// third_party/blink/public/mojom/wake_lock/wake_lock.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/wake_lock/wake_lock.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');
  var wake_lock$ =
      mojo.internal.exposeNamespace('device.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/device/public/mojom/wake_lock.mojom', '../../../../../services/device/public/mojom/wake_lock.mojom.js');
  }



  function WakeLockService_GetWakeLock_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WakeLockService_GetWakeLock_Params.prototype.initDefaults_ = function() {
    this.type = 0;
    this.reason = 0;
    this.description = null;
    this.wakeLock = new bindings.InterfaceRequest();
  };
  WakeLockService_GetWakeLock_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WakeLockService_GetWakeLock_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WakeLockService_GetWakeLock_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, wake_lock$.WakeLockType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WakeLockService_GetWakeLock_Params.reason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, wake_lock$.WakeLockReason);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WakeLockService_GetWakeLock_Params.description
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WakeLockService_GetWakeLock_Params.wakeLock
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WakeLockService_GetWakeLock_Params.encodedSize = codec.kStructHeaderSize + 24;

  WakeLockService_GetWakeLock_Params.decode = function(decoder) {
    var packed;
    var val = new WakeLockService_GetWakeLock_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    val.reason = decoder.decodeStruct(codec.Int32);
    val.description = decoder.decodeStruct(codec.String);
    val.wakeLock = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WakeLockService_GetWakeLock_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WakeLockService_GetWakeLock_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Int32, val.reason);
    encoder.encodeStruct(codec.String, val.description);
    encoder.encodeStruct(codec.InterfaceRequest, val.wakeLock);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kWakeLockService_GetWakeLock_Name = 0;

  function WakeLockServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WakeLockService,
                                                   handleOrPtrInfo);
  }

  function WakeLockServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WakeLockService, associatedInterfacePtrInfo);
  }

  WakeLockServiceAssociatedPtr.prototype =
      Object.create(WakeLockServicePtr.prototype);
  WakeLockServiceAssociatedPtr.prototype.constructor =
      WakeLockServiceAssociatedPtr;

  function WakeLockServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  WakeLockServicePtr.prototype.getWakeLock = function() {
    return WakeLockServiceProxy.prototype.getWakeLock
        .apply(this.ptr.getProxy(), arguments);
  };

  WakeLockServiceProxy.prototype.getWakeLock = function(type, reason, description, wakeLock) {
    var params_ = new WakeLockService_GetWakeLock_Params();
    params_.type = type;
    params_.reason = reason;
    params_.description = description;
    params_.wakeLock = wakeLock;
    var builder = new codec.MessageV0Builder(
        kWakeLockService_GetWakeLock_Name,
        codec.align(WakeLockService_GetWakeLock_Params.encodedSize));
    builder.encodeStruct(WakeLockService_GetWakeLock_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function WakeLockServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  WakeLockServiceStub.prototype.getWakeLock = function(type, reason, description, wakeLock) {
    return this.delegate_ && this.delegate_.getWakeLock && this.delegate_.getWakeLock(type, reason, description, wakeLock);
  }

  WakeLockServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWakeLockService_GetWakeLock_Name:
      var params = reader.decodeStruct(WakeLockService_GetWakeLock_Params);
      this.getWakeLock(params.type, params.reason, params.description, params.wakeLock);
      return true;
    default:
      return false;
    }
  };

  WakeLockServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateWakeLockServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWakeLockService_GetWakeLock_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WakeLockService_GetWakeLock_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWakeLockServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var WakeLockService = {
    name: 'blink.mojom.WakeLockService',
    kVersion: 0,
    ptrClass: WakeLockServicePtr,
    proxyClass: WakeLockServiceProxy,
    stubClass: WakeLockServiceStub,
    validateRequest: validateWakeLockServiceRequest,
    validateResponse: null,
  };
  WakeLockServiceStub.prototype.validator = validateWakeLockServiceRequest;
  WakeLockServiceProxy.prototype.validator = null;
  exports.WakeLockService = WakeLockService;
  exports.WakeLockServicePtr = WakeLockServicePtr;
  exports.WakeLockServiceAssociatedPtr = WakeLockServiceAssociatedPtr;
})();