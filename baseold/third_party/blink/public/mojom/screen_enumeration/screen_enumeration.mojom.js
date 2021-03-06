// third_party/blink/public/mojom/screen_enumeration/screen_enumeration.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/screen_enumeration/screen_enumeration.mojom';
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



  function Display(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Display.prototype.initDefaults_ = function() {
    this.name = null;
    this.scaleFactor = 0;
    this.width = 0;
    this.height = 0;
    this.left = 0;
    this.top = 0;
    this.colorDepth = 0;
    this.isPrimary = false;
    this.isInternal = false;
  };
  Display.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Display.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Display.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;









    return validator.validationError.NONE;
  };

  Display.encodedSize = codec.kStructHeaderSize + 40;

  Display.decode = function(decoder) {
    var packed;
    var val = new Display();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    val.scaleFactor = decoder.decodeStruct(codec.Float);
    val.width = decoder.decodeStruct(codec.Int32);
    val.height = decoder.decodeStruct(codec.Int32);
    val.left = decoder.decodeStruct(codec.Int32);
    val.top = decoder.decodeStruct(codec.Int32);
    val.colorDepth = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.isPrimary = (packed >> 0) & 1 ? true : false;
    val.isInternal = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Display.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Display.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.Float, val.scaleFactor);
    encoder.encodeStruct(codec.Int32, val.width);
    encoder.encodeStruct(codec.Int32, val.height);
    encoder.encodeStruct(codec.Int32, val.left);
    encoder.encodeStruct(codec.Int32, val.top);
    encoder.encodeStruct(codec.Int32, val.colorDepth);
    packed = 0;
    packed |= (val.isPrimary & 1) << 0
    packed |= (val.isInternal & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ScreenEnumeration_RequestDisplays_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ScreenEnumeration_RequestDisplays_Params.prototype.initDefaults_ = function() {
  };
  ScreenEnumeration_RequestDisplays_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ScreenEnumeration_RequestDisplays_Params.validate = function(messageValidator, offset) {
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

  ScreenEnumeration_RequestDisplays_Params.encodedSize = codec.kStructHeaderSize + 0;

  ScreenEnumeration_RequestDisplays_Params.decode = function(decoder) {
    var packed;
    var val = new ScreenEnumeration_RequestDisplays_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ScreenEnumeration_RequestDisplays_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ScreenEnumeration_RequestDisplays_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ScreenEnumeration_RequestDisplays_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ScreenEnumeration_RequestDisplays_ResponseParams.prototype.initDefaults_ = function() {
    this.displays = null;
    this.success = false;
  };
  ScreenEnumeration_RequestDisplays_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ScreenEnumeration_RequestDisplays_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ScreenEnumeration_RequestDisplays_ResponseParams.displays
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(Display), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ScreenEnumeration_RequestDisplays_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  ScreenEnumeration_RequestDisplays_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ScreenEnumeration_RequestDisplays_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.displays = decoder.decodeArrayPointer(new codec.PointerTo(Display));
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ScreenEnumeration_RequestDisplays_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ScreenEnumeration_RequestDisplays_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(Display), val.displays);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kScreenEnumeration_RequestDisplays_Name = 0;

  function ScreenEnumerationPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ScreenEnumeration,
                                                   handleOrPtrInfo);
  }

  function ScreenEnumerationAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ScreenEnumeration, associatedInterfacePtrInfo);
  }

  ScreenEnumerationAssociatedPtr.prototype =
      Object.create(ScreenEnumerationPtr.prototype);
  ScreenEnumerationAssociatedPtr.prototype.constructor =
      ScreenEnumerationAssociatedPtr;

  function ScreenEnumerationProxy(receiver) {
    this.receiver_ = receiver;
  }
  ScreenEnumerationPtr.prototype.requestDisplays = function() {
    return ScreenEnumerationProxy.prototype.requestDisplays
        .apply(this.ptr.getProxy(), arguments);
  };

  ScreenEnumerationProxy.prototype.requestDisplays = function() {
    var params_ = new ScreenEnumeration_RequestDisplays_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kScreenEnumeration_RequestDisplays_Name,
          codec.align(ScreenEnumeration_RequestDisplays_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ScreenEnumeration_RequestDisplays_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ScreenEnumeration_RequestDisplays_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ScreenEnumerationStub(delegate) {
    this.delegate_ = delegate;
  }
  ScreenEnumerationStub.prototype.requestDisplays = function() {
    return this.delegate_ && this.delegate_.requestDisplays && this.delegate_.requestDisplays();
  }

  ScreenEnumerationStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ScreenEnumerationStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kScreenEnumeration_RequestDisplays_Name:
      var params = reader.decodeStruct(ScreenEnumeration_RequestDisplays_Params);
      this.requestDisplays().then(function(response) {
        var responseParams =
            new ScreenEnumeration_RequestDisplays_ResponseParams();
        responseParams.displays = response.displays;
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kScreenEnumeration_RequestDisplays_Name,
            codec.align(ScreenEnumeration_RequestDisplays_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ScreenEnumeration_RequestDisplays_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateScreenEnumerationRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kScreenEnumeration_RequestDisplays_Name:
        if (message.expectsResponse())
          paramsClass = ScreenEnumeration_RequestDisplays_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateScreenEnumerationResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kScreenEnumeration_RequestDisplays_Name:
        if (message.isResponse())
          paramsClass = ScreenEnumeration_RequestDisplays_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ScreenEnumeration = {
    name: 'blink.mojom.ScreenEnumeration',
    kVersion: 0,
    ptrClass: ScreenEnumerationPtr,
    proxyClass: ScreenEnumerationProxy,
    stubClass: ScreenEnumerationStub,
    validateRequest: validateScreenEnumerationRequest,
    validateResponse: validateScreenEnumerationResponse,
  };
  ScreenEnumerationStub.prototype.validator = validateScreenEnumerationRequest;
  ScreenEnumerationProxy.prototype.validator = validateScreenEnumerationResponse;
  exports.Display = Display;
  exports.ScreenEnumeration = ScreenEnumeration;
  exports.ScreenEnumerationPtr = ScreenEnumerationPtr;
  exports.ScreenEnumerationAssociatedPtr = ScreenEnumerationAssociatedPtr;
})();