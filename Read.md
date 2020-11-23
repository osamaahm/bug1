
#RCE

The type information of  loop variable is error in Typer::Visitor::TypeInductionVariablePhi, https://chromium.googlesource.com/v8/v8.git/+/refs/heads/chromium/3945/src/compiler/typer.cc#845

```c++
Type Typer::Visitor::TypeInductionVariablePhi(Node* node) {
  int arity = NodeProperties::GetControlInput(node)->op()->ControlInputCount();
  DCHECK_EQ(IrOpcode::kLoop, NodeProperties::GetControlInput(node)->opcode());
  DCHECK_EQ(2, NodeProperties::GetControlInput(node)->InputCount());

  auto res = induction_vars_->induction_variables().find(node->id());
  DCHECK(res != induction_vars_->induction_variables().end());
  InductionVariable* induction_var = res->second;
  InductionVariable::ArithmeticType arithmetic_type = induction_var->Type();
  Type initial_type = Operand(node, 0);
  Type increment_type = Operand(node, 2);

  const bool both_types_integer = initial_type.Is(typer_->cache_->kInteger) &&
                                  increment_type.Is(typer_->cache_->kInteger);
  bool maybe_nan = false;
  // The addition or subtraction could still produce a NaN, if the integer
  // ranges touch infinity.
  if (both_types_integer) {
    Type resultant_type =
        (arithmetic_type == InductionVariable::ArithmeticType::kAddition)
            ? typer_->operation_typer()->NumberAdd(initial_type, increment_type)
            : typer_->operation_typer()->NumberSubtract(initial_type,
                                                        increment_type);
    maybe_nan = resultant_type.Maybe(Type::NaN());
  }

  // We only handle integer induction variables (otherwise ranges
  // do not apply and we cannot do anything).
  if (!both_types_integer || maybe_nan) {
    // Fallback to normal phi typing, but ensure monotonicity.
    // (Unfortunately, without baking in the previous type, monotonicity might
    // be violated because we might not yet have retyped the incrementing
    // operation even though the increment's type might been already reflected
    // in the induction variable phi.)
    Type type = NodeProperties::IsTyped(node) ? NodeProperties::GetType(node)
                                              : Type::None();
    for (int i = 0; i < arity; ++i) {
      type = Type::Union(type, Operand(node, i), zone());
    }
    return type;
  }
  // If we do not have enough type information for the initial value or
  // the increment, just return the initial value's type.
  if (initial_type.IsNone() ||
      increment_type.Is(typer_->cache_->kSingletonZero)) {
    return initial_type;
  }

  // Now process the bounds.
  double min = -V8_INFINITY;
  double max = V8_INFINITY;

  double increment_min;
  double increment_max;
  if (arithmetic_type == InductionVariable::ArithmeticType::kAddition) {
    increment_min = increment_type.Min();
    increment_max = increment_type.Max();
  } else {
    DCHECK_EQ(InductionVariable::ArithmeticType::kSubtraction, arithmetic_type);
    increment_min = -increment_type.Max();
    increment_max = -increment_type.Min();
  }

  if (increment_min >= 0) {
    ...
  } else if (increment_max <= 0) {
    ...
  } else {
    // Shortcut: If the increment can be both positive and negative,
    // the variable can go arbitrarily far, so just return integer.
    return typer_->cache_->kInteger;    [1] ----------------> this type information is wrong

  }
  ...
}
```
the return satement in [1]  assumes that when the increment variable can be both positive and negative, the result type will be `kInteger` (which doesn't include `NaN`). However, since the value of `increment` can be changed from inside the loop body, it's possible, for example, to keep subtracting from `i` until it reaches `-Infinity`, and then set `increment` to `+Infinity`. This will make `i` become `NaN` in the next iteration of the loop.
it's easy to use this bug to get an malformated array, whose length filed is large but it's backing store is small, so we can get an oob access and then modify an arraybuffer's backing store to achieve arbitray read and write. with the ablity of arbitray read and write, we can enable mojo inerface to trigger the LPE bug.

#LPE
Use after free in VideoDecoderService.
```c++

void MojoVideoDecoderService::Initialize(const VideoDecoderConfig& config,
                                         bool low_delay,
                                         int32_t cdm_id,
                                         InitializeCallback callback) {
  DVLOG(1) << __func__ << " config = " << config.AsHumanReadableString()
           << ", cdm_id = " << cdm_id;
  DCHECK(!init_cb_);
  DCHECK(callback);

  TRACE_EVENT_ASYNC_BEGIN2("media", kInitializeTraceName, this, "config",
                           config.AsHumanReadableString(), "cdm_id", cdm_id);

  init_cb_ = std::move(callback);

  if (!decoder_) {
    OnDecoderInitialized(false);
    return;
  }

  // Get CdmContext from cdm_id if the stream is encrypted.
  CdmContext* cdm_context = nullptr;
  if (cdm_id != CdmContext::kInvalidCdmId) {
    auto cdm_context_ref = mojo_cdm_service_context_->GetCdmContextRef(cdm_id);
    if (!cdm_context_ref) {
      DVLOG(1) << "CdmContextRef not found for CDM id: " << cdm_id;
      OnDecoderInitialized(false);
      return;
    }

    // |cdm_context_ref_| must be kept as long as |cdm_context| is used by the
    // |decoder_|.
    cdm_context_ref_ = std::move(cdm_context_ref);
    cdm_context = cdm_context_ref_->GetCdmContext();
    DCHECK(cdm_context);
  }

  using Self = MojoVideoDecoderService;
  decoder_->Initialize(
      config, low_delay, cdm_context,             ****[1]*****
      base::BindRepeating(&Self::OnDecoderInitialized, weak_this_),
      base::BindRepeating(&Self::OnDecoderOutput, weak_this_),
      base::BindRepeating(&Self::OnDecoderWaiting, weak_this_));
}
```
cdm_context is an raw point, its reference is held by cdm_context_ref_. in code posiont [1], the cdm_content argument will be stored and used after the function is return. but  cdm_context_ref_ can be reset if MojoVideoDecoderService::Initialize are called twice with specific arguments. so cdm_context will be used after free. we modiy a vtable point to call system to achieve a reverse shell.