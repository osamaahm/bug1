// components/subresource_filter/content/mojom/subresource_filter_agent.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/subresource_filter/content/mojom/subresource_filter_agent.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('subresourceFilter.mojom');
  var subresource_filter$ =
      mojo.internal.exposeNamespace('subresourceFilter.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/subresource_filter/core/mojom/subresource_filter.mojom', '../../core/mojom/subresource_filter.mojom.js');
  }
  var ad_frame$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/ad_tagging/ad_frame.mojom', '../../../../third_party/blink/public/mojom/ad_tagging/ad_frame.mojom.js');
  }



  function SubresourceFilterAgent_ActivateForNextCommittedLoad_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SubresourceFilterAgent_ActivateForNextCommittedLoad_Params.prototype.initDefaults_ = function() {
    this.activationState = null;
    this.adType = 0;
  };
  SubresourceFilterAgent_ActivateForNextCommittedLoad_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SubresourceFilterAgent_ActivateForNextCommittedLoad_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SubresourceFilterAgent_ActivateForNextCommittedLoad_Params.activationState
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, subresource_filter$.ActivationState, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SubresourceFilterAgent_ActivateForNextCommittedLoad_Params.adType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, ad_frame$.AdFrameType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SubresourceFilterAgent_ActivateForNextCommittedLoad_Params.encodedSize = codec.kStructHeaderSize + 16;

  SubresourceFilterAgent_ActivateForNextCommittedLoad_Params.decode = function(decoder) {
    var packed;
    var val = new SubresourceFilterAgent_ActivateForNextCommittedLoad_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.activationState = decoder.decodeStructPointer(subresource_filter$.ActivationState);
    val.adType = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SubresourceFilterAgent_ActivateForNextCommittedLoad_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SubresourceFilterAgent_ActivateForNextCommittedLoad_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(subresource_filter$.ActivationState, val.activationState);
    encoder.encodeStruct(codec.Int32, val.adType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kSubresourceFilterAgent_ActivateForNextCommittedLoad_Name = 0;

  function SubresourceFilterAgentPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SubresourceFilterAgent,
                                                   handleOrPtrInfo);
  }

  function SubresourceFilterAgentAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SubresourceFilterAgent, associatedInterfacePtrInfo);
  }

  SubresourceFilterAgentAssociatedPtr.prototype =
      Object.create(SubresourceFilterAgentPtr.prototype);
  SubresourceFilterAgentAssociatedPtr.prototype.constructor =
      SubresourceFilterAgentAssociatedPtr;

  function SubresourceFilterAgentProxy(receiver) {
    this.receiver_ = receiver;
  }
  SubresourceFilterAgentPtr.prototype.activateForNextCommittedLoad = function() {
    return SubresourceFilterAgentProxy.prototype.activateForNextCommittedLoad
        .apply(this.ptr.getProxy(), arguments);
  };

  SubresourceFilterAgentProxy.prototype.activateForNextCommittedLoad = function(activationState, adType) {
    var params_ = new SubresourceFilterAgent_ActivateForNextCommittedLoad_Params();
    params_.activationState = activationState;
    params_.adType = adType;
    var builder = new codec.MessageV0Builder(
        kSubresourceFilterAgent_ActivateForNextCommittedLoad_Name,
        codec.align(SubresourceFilterAgent_ActivateForNextCommittedLoad_Params.encodedSize));
    builder.encodeStruct(SubresourceFilterAgent_ActivateForNextCommittedLoad_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SubresourceFilterAgentStub(delegate) {
    this.delegate_ = delegate;
  }
  SubresourceFilterAgentStub.prototype.activateForNextCommittedLoad = function(activationState, adType) {
    return this.delegate_ && this.delegate_.activateForNextCommittedLoad && this.delegate_.activateForNextCommittedLoad(activationState, adType);
  }

  SubresourceFilterAgentStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSubresourceFilterAgent_ActivateForNextCommittedLoad_Name:
      var params = reader.decodeStruct(SubresourceFilterAgent_ActivateForNextCommittedLoad_Params);
      this.activateForNextCommittedLoad(params.activationState, params.adType);
      return true;
    default:
      return false;
    }
  };

  SubresourceFilterAgentStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSubresourceFilterAgentRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSubresourceFilterAgent_ActivateForNextCommittedLoad_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SubresourceFilterAgent_ActivateForNextCommittedLoad_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSubresourceFilterAgentResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SubresourceFilterAgent = {
    name: 'subresource_filter.mojom.SubresourceFilterAgent',
    kVersion: 0,
    ptrClass: SubresourceFilterAgentPtr,
    proxyClass: SubresourceFilterAgentProxy,
    stubClass: SubresourceFilterAgentStub,
    validateRequest: validateSubresourceFilterAgentRequest,
    validateResponse: null,
  };
  SubresourceFilterAgentStub.prototype.validator = validateSubresourceFilterAgentRequest;
  SubresourceFilterAgentProxy.prototype.validator = null;
  exports.SubresourceFilterAgent = SubresourceFilterAgent;
  exports.SubresourceFilterAgentPtr = SubresourceFilterAgentPtr;
  exports.SubresourceFilterAgentAssociatedPtr = SubresourceFilterAgentAssociatedPtr;
})();