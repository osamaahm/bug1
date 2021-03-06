// components/subresource_filter/core/mojom/subresource_filter.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/subresource_filter/core/mojom/subresource_filter.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }


  var ActivationLevel = {};
  ActivationLevel.kDisabled = 0;
  ActivationLevel.kDryRun = ActivationLevel.kDisabled + 1;
  ActivationLevel.kEnabled = ActivationLevel.kDryRun + 1;
  ActivationLevel.MIN_VALUE = 0,
  ActivationLevel.MAX_VALUE = 2,

  ActivationLevel.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ActivationLevel.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ActivationState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ActivationState.prototype.initDefaults_ = function() {
    this.activationLevel = ActivationLevel.kDisabled;
    this.filteringDisabledForDocument = false;
    this.genericBlockingRulesDisabled = false;
    this.measurePerformance = false;
    this.enableLogging = false;
  };
  ActivationState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ActivationState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ActivationState.activationLevel
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ActivationLevel);
    if (err !== validator.validationError.NONE)
        return err;





    return validator.validationError.NONE;
  };

  ActivationState.encodedSize = codec.kStructHeaderSize + 8;

  ActivationState.decode = function(decoder) {
    var packed;
    var val = new ActivationState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.activationLevel = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.filteringDisabledForDocument = (packed >> 0) & 1 ? true : false;
    val.genericBlockingRulesDisabled = (packed >> 1) & 1 ? true : false;
    val.measurePerformance = (packed >> 2) & 1 ? true : false;
    val.enableLogging = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ActivationState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ActivationState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.activationLevel);
    packed = 0;
    packed |= (val.filteringDisabledForDocument & 1) << 0
    packed |= (val.genericBlockingRulesDisabled & 1) << 1
    packed |= (val.measurePerformance & 1) << 2
    packed |= (val.enableLogging & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DocumentLoadStatistics(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DocumentLoadStatistics.prototype.initDefaults_ = function() {
    this.numLoadsTotal = 0;
    this.numLoadsEvaluated = 0;
    this.numLoadsMatchingRules = 0;
    this.numLoadsDisallowed = 0;
    this.evaluationTotalWallDuration = null;
    this.evaluationTotalCpuDuration = null;
  };
  DocumentLoadStatistics.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DocumentLoadStatistics.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;






    // validate DocumentLoadStatistics.evaluationTotalWallDuration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DocumentLoadStatistics.evaluationTotalCpuDuration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DocumentLoadStatistics.encodedSize = codec.kStructHeaderSize + 32;

  DocumentLoadStatistics.decode = function(decoder) {
    var packed;
    var val = new DocumentLoadStatistics();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.numLoadsTotal = decoder.decodeStruct(codec.Int32);
    val.numLoadsEvaluated = decoder.decodeStruct(codec.Int32);
    val.numLoadsMatchingRules = decoder.decodeStruct(codec.Int32);
    val.numLoadsDisallowed = decoder.decodeStruct(codec.Int32);
    val.evaluationTotalWallDuration = decoder.decodeStructPointer(time$.TimeDelta);
    val.evaluationTotalCpuDuration = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  DocumentLoadStatistics.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DocumentLoadStatistics.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.numLoadsTotal);
    encoder.encodeStruct(codec.Int32, val.numLoadsEvaluated);
    encoder.encodeStruct(codec.Int32, val.numLoadsMatchingRules);
    encoder.encodeStruct(codec.Int32, val.numLoadsDisallowed);
    encoder.encodeStructPointer(time$.TimeDelta, val.evaluationTotalWallDuration);
    encoder.encodeStructPointer(time$.TimeDelta, val.evaluationTotalCpuDuration);
  };
  function SubresourceFilterHost_DidDisallowFirstSubresource_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SubresourceFilterHost_DidDisallowFirstSubresource_Params.prototype.initDefaults_ = function() {
  };
  SubresourceFilterHost_DidDisallowFirstSubresource_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SubresourceFilterHost_DidDisallowFirstSubresource_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SubresourceFilterHost_DidDisallowFirstSubresource_Params.encodedSize = codec.kStructHeaderSize + 0;

  SubresourceFilterHost_DidDisallowFirstSubresource_Params.decode = function(decoder) {
    var packed;
    var val = new SubresourceFilterHost_DidDisallowFirstSubresource_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SubresourceFilterHost_DidDisallowFirstSubresource_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SubresourceFilterHost_DidDisallowFirstSubresource_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SubresourceFilterHost_FrameIsAdSubframe_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SubresourceFilterHost_FrameIsAdSubframe_Params.prototype.initDefaults_ = function() {
  };
  SubresourceFilterHost_FrameIsAdSubframe_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SubresourceFilterHost_FrameIsAdSubframe_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SubresourceFilterHost_FrameIsAdSubframe_Params.encodedSize = codec.kStructHeaderSize + 0;

  SubresourceFilterHost_FrameIsAdSubframe_Params.decode = function(decoder) {
    var packed;
    var val = new SubresourceFilterHost_FrameIsAdSubframe_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SubresourceFilterHost_FrameIsAdSubframe_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SubresourceFilterHost_FrameIsAdSubframe_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SubresourceFilterHost_SetDocumentLoadStatistics_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SubresourceFilterHost_SetDocumentLoadStatistics_Params.prototype.initDefaults_ = function() {
    this.statistics = null;
  };
  SubresourceFilterHost_SetDocumentLoadStatistics_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SubresourceFilterHost_SetDocumentLoadStatistics_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SubresourceFilterHost_SetDocumentLoadStatistics_Params.statistics
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DocumentLoadStatistics, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SubresourceFilterHost_SetDocumentLoadStatistics_Params.encodedSize = codec.kStructHeaderSize + 8;

  SubresourceFilterHost_SetDocumentLoadStatistics_Params.decode = function(decoder) {
    var packed;
    var val = new SubresourceFilterHost_SetDocumentLoadStatistics_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.statistics = decoder.decodeStructPointer(DocumentLoadStatistics);
    return val;
  };

  SubresourceFilterHost_SetDocumentLoadStatistics_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SubresourceFilterHost_SetDocumentLoadStatistics_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DocumentLoadStatistics, val.statistics);
  };
  var kSubresourceFilterHost_DidDisallowFirstSubresource_Name = 0;
  var kSubresourceFilterHost_FrameIsAdSubframe_Name = 1;
  var kSubresourceFilterHost_SetDocumentLoadStatistics_Name = 2;

  function SubresourceFilterHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SubresourceFilterHost,
                                                   handleOrPtrInfo);
  }

  function SubresourceFilterHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SubresourceFilterHost, associatedInterfacePtrInfo);
  }

  SubresourceFilterHostAssociatedPtr.prototype =
      Object.create(SubresourceFilterHostPtr.prototype);
  SubresourceFilterHostAssociatedPtr.prototype.constructor =
      SubresourceFilterHostAssociatedPtr;

  function SubresourceFilterHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  SubresourceFilterHostPtr.prototype.didDisallowFirstSubresource = function() {
    return SubresourceFilterHostProxy.prototype.didDisallowFirstSubresource
        .apply(this.ptr.getProxy(), arguments);
  };

  SubresourceFilterHostProxy.prototype.didDisallowFirstSubresource = function() {
    var params_ = new SubresourceFilterHost_DidDisallowFirstSubresource_Params();
    var builder = new codec.MessageV0Builder(
        kSubresourceFilterHost_DidDisallowFirstSubresource_Name,
        codec.align(SubresourceFilterHost_DidDisallowFirstSubresource_Params.encodedSize));
    builder.encodeStruct(SubresourceFilterHost_DidDisallowFirstSubresource_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SubresourceFilterHostPtr.prototype.frameIsAdSubframe = function() {
    return SubresourceFilterHostProxy.prototype.frameIsAdSubframe
        .apply(this.ptr.getProxy(), arguments);
  };

  SubresourceFilterHostProxy.prototype.frameIsAdSubframe = function() {
    var params_ = new SubresourceFilterHost_FrameIsAdSubframe_Params();
    var builder = new codec.MessageV0Builder(
        kSubresourceFilterHost_FrameIsAdSubframe_Name,
        codec.align(SubresourceFilterHost_FrameIsAdSubframe_Params.encodedSize));
    builder.encodeStruct(SubresourceFilterHost_FrameIsAdSubframe_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SubresourceFilterHostPtr.prototype.setDocumentLoadStatistics = function() {
    return SubresourceFilterHostProxy.prototype.setDocumentLoadStatistics
        .apply(this.ptr.getProxy(), arguments);
  };

  SubresourceFilterHostProxy.prototype.setDocumentLoadStatistics = function(statistics) {
    var params_ = new SubresourceFilterHost_SetDocumentLoadStatistics_Params();
    params_.statistics = statistics;
    var builder = new codec.MessageV0Builder(
        kSubresourceFilterHost_SetDocumentLoadStatistics_Name,
        codec.align(SubresourceFilterHost_SetDocumentLoadStatistics_Params.encodedSize));
    builder.encodeStruct(SubresourceFilterHost_SetDocumentLoadStatistics_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SubresourceFilterHostStub(delegate) {
    this.delegate_ = delegate;
  }
  SubresourceFilterHostStub.prototype.didDisallowFirstSubresource = function() {
    return this.delegate_ && this.delegate_.didDisallowFirstSubresource && this.delegate_.didDisallowFirstSubresource();
  }
  SubresourceFilterHostStub.prototype.frameIsAdSubframe = function() {
    return this.delegate_ && this.delegate_.frameIsAdSubframe && this.delegate_.frameIsAdSubframe();
  }
  SubresourceFilterHostStub.prototype.setDocumentLoadStatistics = function(statistics) {
    return this.delegate_ && this.delegate_.setDocumentLoadStatistics && this.delegate_.setDocumentLoadStatistics(statistics);
  }

  SubresourceFilterHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSubresourceFilterHost_DidDisallowFirstSubresource_Name:
      var params = reader.decodeStruct(SubresourceFilterHost_DidDisallowFirstSubresource_Params);
      this.didDisallowFirstSubresource();
      return true;
    case kSubresourceFilterHost_FrameIsAdSubframe_Name:
      var params = reader.decodeStruct(SubresourceFilterHost_FrameIsAdSubframe_Params);
      this.frameIsAdSubframe();
      return true;
    case kSubresourceFilterHost_SetDocumentLoadStatistics_Name:
      var params = reader.decodeStruct(SubresourceFilterHost_SetDocumentLoadStatistics_Params);
      this.setDocumentLoadStatistics(params.statistics);
      return true;
    default:
      return false;
    }
  };

  SubresourceFilterHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSubresourceFilterHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSubresourceFilterHost_DidDisallowFirstSubresource_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SubresourceFilterHost_DidDisallowFirstSubresource_Params;
      break;
      case kSubresourceFilterHost_FrameIsAdSubframe_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SubresourceFilterHost_FrameIsAdSubframe_Params;
      break;
      case kSubresourceFilterHost_SetDocumentLoadStatistics_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SubresourceFilterHost_SetDocumentLoadStatistics_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSubresourceFilterHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SubresourceFilterHost = {
    name: 'subresource_filter.mojom.SubresourceFilterHost',
    kVersion: 0,
    ptrClass: SubresourceFilterHostPtr,
    proxyClass: SubresourceFilterHostProxy,
    stubClass: SubresourceFilterHostStub,
    validateRequest: validateSubresourceFilterHostRequest,
    validateResponse: null,
  };
  SubresourceFilterHostStub.prototype.validator = validateSubresourceFilterHostRequest;
  SubresourceFilterHostProxy.prototype.validator = null;
  exports.ActivationLevel = ActivationLevel;
  exports.ActivationState = ActivationState;
  exports.DocumentLoadStatistics = DocumentLoadStatistics;
  exports.SubresourceFilterHost = SubresourceFilterHost;
  exports.SubresourceFilterHostPtr = SubresourceFilterHostPtr;
  exports.SubresourceFilterHostAssociatedPtr = SubresourceFilterHostAssociatedPtr;
})();