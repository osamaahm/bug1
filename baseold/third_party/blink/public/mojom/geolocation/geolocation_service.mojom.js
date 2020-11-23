// third_party/blink/public/mojom/geolocation/geolocation_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/geolocation/geolocation_service.mojom';
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
  var geolocation$ =
      mojo.internal.exposeNamespace('device.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/device/public/mojom/geolocation.mojom', '../../../../../services/device/public/mojom/geolocation.mojom.js');
  }
  var permission_status$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/permissions/permission_status.mojom', '../permissions/permission_status.mojom.js');
  }



  function GeolocationService_CreateGeolocation_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GeolocationService_CreateGeolocation_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
    this.userGesture = false;
  };
  GeolocationService_CreateGeolocation_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GeolocationService_CreateGeolocation_Params.validate = function(messageValidator, offset) {
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


    // validate GeolocationService_CreateGeolocation_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  GeolocationService_CreateGeolocation_Params.encodedSize = codec.kStructHeaderSize + 8;

  GeolocationService_CreateGeolocation_Params.decode = function(decoder) {
    var packed;
    var val = new GeolocationService_CreateGeolocation_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver = decoder.decodeStruct(codec.InterfaceRequest);
    packed = decoder.readUint8();
    val.userGesture = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GeolocationService_CreateGeolocation_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GeolocationService_CreateGeolocation_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    packed = 0;
    packed |= (val.userGesture & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function GeolocationService_CreateGeolocation_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GeolocationService_CreateGeolocation_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
  };
  GeolocationService_CreateGeolocation_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GeolocationService_CreateGeolocation_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate GeolocationService_CreateGeolocation_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, permission_status$.PermissionStatus);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GeolocationService_CreateGeolocation_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  GeolocationService_CreateGeolocation_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GeolocationService_CreateGeolocation_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GeolocationService_CreateGeolocation_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GeolocationService_CreateGeolocation_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kGeolocationService_CreateGeolocation_Name = 0;

  function GeolocationServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(GeolocationService,
                                                   handleOrPtrInfo);
  }

  function GeolocationServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        GeolocationService, associatedInterfacePtrInfo);
  }

  GeolocationServiceAssociatedPtr.prototype =
      Object.create(GeolocationServicePtr.prototype);
  GeolocationServiceAssociatedPtr.prototype.constructor =
      GeolocationServiceAssociatedPtr;

  function GeolocationServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  GeolocationServicePtr.prototype.createGeolocation = function() {
    return GeolocationServiceProxy.prototype.createGeolocation
        .apply(this.ptr.getProxy(), arguments);
  };

  GeolocationServiceProxy.prototype.createGeolocation = function(receiver, userGesture) {
    var params_ = new GeolocationService_CreateGeolocation_Params();
    params_.receiver = receiver;
    params_.userGesture = userGesture;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGeolocationService_CreateGeolocation_Name,
          codec.align(GeolocationService_CreateGeolocation_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GeolocationService_CreateGeolocation_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GeolocationService_CreateGeolocation_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function GeolocationServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  GeolocationServiceStub.prototype.createGeolocation = function(receiver, userGesture) {
    return this.delegate_ && this.delegate_.createGeolocation && this.delegate_.createGeolocation(receiver, userGesture);
  }

  GeolocationServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  GeolocationServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kGeolocationService_CreateGeolocation_Name:
      var params = reader.decodeStruct(GeolocationService_CreateGeolocation_Params);
      this.createGeolocation(params.receiver, params.userGesture).then(function(response) {
        var responseParams =
            new GeolocationService_CreateGeolocation_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kGeolocationService_CreateGeolocation_Name,
            codec.align(GeolocationService_CreateGeolocation_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GeolocationService_CreateGeolocation_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateGeolocationServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kGeolocationService_CreateGeolocation_Name:
        if (message.expectsResponse())
          paramsClass = GeolocationService_CreateGeolocation_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateGeolocationServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kGeolocationService_CreateGeolocation_Name:
        if (message.isResponse())
          paramsClass = GeolocationService_CreateGeolocation_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var GeolocationService = {
    name: 'blink.mojom.GeolocationService',
    kVersion: 0,
    ptrClass: GeolocationServicePtr,
    proxyClass: GeolocationServiceProxy,
    stubClass: GeolocationServiceStub,
    validateRequest: validateGeolocationServiceRequest,
    validateResponse: validateGeolocationServiceResponse,
  };
  GeolocationServiceStub.prototype.validator = validateGeolocationServiceRequest;
  GeolocationServiceProxy.prototype.validator = validateGeolocationServiceResponse;
  exports.GeolocationService = GeolocationService;
  exports.GeolocationServicePtr = GeolocationServicePtr;
  exports.GeolocationServiceAssociatedPtr = GeolocationServiceAssociatedPtr;
})();