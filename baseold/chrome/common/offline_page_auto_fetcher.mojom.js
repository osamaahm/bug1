// chrome/common/offline_page_auto_fetcher.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/common/offline_page_auto_fetcher.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('chrome.mojom');
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../url/mojom/url.mojom.js');
  }


  var OfflinePageAutoFetcherScheduleResult = {};
  OfflinePageAutoFetcherScheduleResult.kNotEnoughQuota = 0;
  OfflinePageAutoFetcherScheduleResult.kOtherError = OfflinePageAutoFetcherScheduleResult.kNotEnoughQuota + 1;
  OfflinePageAutoFetcherScheduleResult.kAlreadyScheduled = OfflinePageAutoFetcherScheduleResult.kOtherError + 1;
  OfflinePageAutoFetcherScheduleResult.kScheduled = OfflinePageAutoFetcherScheduleResult.kAlreadyScheduled + 1;
  OfflinePageAutoFetcherScheduleResult.MIN_VALUE = 0,
  OfflinePageAutoFetcherScheduleResult.MAX_VALUE = 3,

  OfflinePageAutoFetcherScheduleResult.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  OfflinePageAutoFetcherScheduleResult.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function OfflinePageAutoFetcher_TrySchedule_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OfflinePageAutoFetcher_TrySchedule_Params.prototype.initDefaults_ = function() {
    this.userRequested = false;
  };
  OfflinePageAutoFetcher_TrySchedule_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OfflinePageAutoFetcher_TrySchedule_Params.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  OfflinePageAutoFetcher_TrySchedule_Params.encodedSize = codec.kStructHeaderSize + 8;

  OfflinePageAutoFetcher_TrySchedule_Params.decode = function(decoder) {
    var packed;
    var val = new OfflinePageAutoFetcher_TrySchedule_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.userRequested = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  OfflinePageAutoFetcher_TrySchedule_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OfflinePageAutoFetcher_TrySchedule_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.userRequested & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function OfflinePageAutoFetcher_TrySchedule_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OfflinePageAutoFetcher_TrySchedule_ResponseParams.prototype.initDefaults_ = function() {
    this.out = 0;
  };
  OfflinePageAutoFetcher_TrySchedule_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OfflinePageAutoFetcher_TrySchedule_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate OfflinePageAutoFetcher_TrySchedule_ResponseParams.out
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, OfflinePageAutoFetcherScheduleResult);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OfflinePageAutoFetcher_TrySchedule_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  OfflinePageAutoFetcher_TrySchedule_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new OfflinePageAutoFetcher_TrySchedule_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.out = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  OfflinePageAutoFetcher_TrySchedule_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OfflinePageAutoFetcher_TrySchedule_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.out);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function OfflinePageAutoFetcher_CancelSchedule_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OfflinePageAutoFetcher_CancelSchedule_Params.prototype.initDefaults_ = function() {
  };
  OfflinePageAutoFetcher_CancelSchedule_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OfflinePageAutoFetcher_CancelSchedule_Params.validate = function(messageValidator, offset) {
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

  OfflinePageAutoFetcher_CancelSchedule_Params.encodedSize = codec.kStructHeaderSize + 0;

  OfflinePageAutoFetcher_CancelSchedule_Params.decode = function(decoder) {
    var packed;
    var val = new OfflinePageAutoFetcher_CancelSchedule_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  OfflinePageAutoFetcher_CancelSchedule_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OfflinePageAutoFetcher_CancelSchedule_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kOfflinePageAutoFetcher_TrySchedule_Name = 0;
  var kOfflinePageAutoFetcher_CancelSchedule_Name = 1;

  function OfflinePageAutoFetcherPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(OfflinePageAutoFetcher,
                                                   handleOrPtrInfo);
  }

  function OfflinePageAutoFetcherAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        OfflinePageAutoFetcher, associatedInterfacePtrInfo);
  }

  OfflinePageAutoFetcherAssociatedPtr.prototype =
      Object.create(OfflinePageAutoFetcherPtr.prototype);
  OfflinePageAutoFetcherAssociatedPtr.prototype.constructor =
      OfflinePageAutoFetcherAssociatedPtr;

  function OfflinePageAutoFetcherProxy(receiver) {
    this.receiver_ = receiver;
  }
  OfflinePageAutoFetcherPtr.prototype.trySchedule = function() {
    return OfflinePageAutoFetcherProxy.prototype.trySchedule
        .apply(this.ptr.getProxy(), arguments);
  };

  OfflinePageAutoFetcherProxy.prototype.trySchedule = function(userRequested) {
    var params_ = new OfflinePageAutoFetcher_TrySchedule_Params();
    params_.userRequested = userRequested;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kOfflinePageAutoFetcher_TrySchedule_Name,
          codec.align(OfflinePageAutoFetcher_TrySchedule_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(OfflinePageAutoFetcher_TrySchedule_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(OfflinePageAutoFetcher_TrySchedule_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  OfflinePageAutoFetcherPtr.prototype.cancelSchedule = function() {
    return OfflinePageAutoFetcherProxy.prototype.cancelSchedule
        .apply(this.ptr.getProxy(), arguments);
  };

  OfflinePageAutoFetcherProxy.prototype.cancelSchedule = function() {
    var params_ = new OfflinePageAutoFetcher_CancelSchedule_Params();
    var builder = new codec.MessageV0Builder(
        kOfflinePageAutoFetcher_CancelSchedule_Name,
        codec.align(OfflinePageAutoFetcher_CancelSchedule_Params.encodedSize));
    builder.encodeStruct(OfflinePageAutoFetcher_CancelSchedule_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function OfflinePageAutoFetcherStub(delegate) {
    this.delegate_ = delegate;
  }
  OfflinePageAutoFetcherStub.prototype.trySchedule = function(userRequested) {
    return this.delegate_ && this.delegate_.trySchedule && this.delegate_.trySchedule(userRequested);
  }
  OfflinePageAutoFetcherStub.prototype.cancelSchedule = function() {
    return this.delegate_ && this.delegate_.cancelSchedule && this.delegate_.cancelSchedule();
  }

  OfflinePageAutoFetcherStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kOfflinePageAutoFetcher_CancelSchedule_Name:
      var params = reader.decodeStruct(OfflinePageAutoFetcher_CancelSchedule_Params);
      this.cancelSchedule();
      return true;
    default:
      return false;
    }
  };

  OfflinePageAutoFetcherStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kOfflinePageAutoFetcher_TrySchedule_Name:
      var params = reader.decodeStruct(OfflinePageAutoFetcher_TrySchedule_Params);
      this.trySchedule(params.userRequested).then(function(response) {
        var responseParams =
            new OfflinePageAutoFetcher_TrySchedule_ResponseParams();
        responseParams.out = response.out;
        var builder = new codec.MessageV1Builder(
            kOfflinePageAutoFetcher_TrySchedule_Name,
            codec.align(OfflinePageAutoFetcher_TrySchedule_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(OfflinePageAutoFetcher_TrySchedule_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateOfflinePageAutoFetcherRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kOfflinePageAutoFetcher_TrySchedule_Name:
        if (message.expectsResponse())
          paramsClass = OfflinePageAutoFetcher_TrySchedule_Params;
      break;
      case kOfflinePageAutoFetcher_CancelSchedule_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = OfflinePageAutoFetcher_CancelSchedule_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateOfflinePageAutoFetcherResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kOfflinePageAutoFetcher_TrySchedule_Name:
        if (message.isResponse())
          paramsClass = OfflinePageAutoFetcher_TrySchedule_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var OfflinePageAutoFetcher = {
    name: 'chrome.mojom.OfflinePageAutoFetcher',
    kVersion: 0,
    ptrClass: OfflinePageAutoFetcherPtr,
    proxyClass: OfflinePageAutoFetcherProxy,
    stubClass: OfflinePageAutoFetcherStub,
    validateRequest: validateOfflinePageAutoFetcherRequest,
    validateResponse: validateOfflinePageAutoFetcherResponse,
  };
  OfflinePageAutoFetcherStub.prototype.validator = validateOfflinePageAutoFetcherRequest;
  OfflinePageAutoFetcherProxy.prototype.validator = validateOfflinePageAutoFetcherResponse;
  exports.OfflinePageAutoFetcherScheduleResult = OfflinePageAutoFetcherScheduleResult;
  exports.OfflinePageAutoFetcher = OfflinePageAutoFetcher;
  exports.OfflinePageAutoFetcherPtr = OfflinePageAutoFetcherPtr;
  exports.OfflinePageAutoFetcherAssociatedPtr = OfflinePageAutoFetcherAssociatedPtr;
})();