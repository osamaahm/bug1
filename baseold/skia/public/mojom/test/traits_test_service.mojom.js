// skia/public/mojom/test/traits_test_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'skia/public/mojom/test/traits_test_service.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('skia.mojom');
  var image_info$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/image_info.mojom', '../image_info.mojom.js');
  }
  var bitmap$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/bitmap.mojom', '../bitmap.mojom.js');
  }
  var blur_image_filter_tile_mode$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/blur_image_filter_tile_mode.mojom', '../blur_image_filter_tile_mode.mojom.js');
  }



  function TraitsTestService_EchoImageInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TraitsTestService_EchoImageInfo_Params.prototype.initDefaults_ = function() {
    this.i = null;
  };
  TraitsTestService_EchoImageInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TraitsTestService_EchoImageInfo_Params.validate = function(messageValidator, offset) {
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


    // validate TraitsTestService_EchoImageInfo_Params.i
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, image_info$.ImageInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TraitsTestService_EchoImageInfo_Params.encodedSize = codec.kStructHeaderSize + 8;

  TraitsTestService_EchoImageInfo_Params.decode = function(decoder) {
    var packed;
    var val = new TraitsTestService_EchoImageInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.i = decoder.decodeStructPointer(image_info$.ImageInfo);
    return val;
  };

  TraitsTestService_EchoImageInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TraitsTestService_EchoImageInfo_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(image_info$.ImageInfo, val.i);
  };
  function TraitsTestService_EchoImageInfo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TraitsTestService_EchoImageInfo_ResponseParams.prototype.initDefaults_ = function() {
    this.pass = null;
  };
  TraitsTestService_EchoImageInfo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TraitsTestService_EchoImageInfo_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate TraitsTestService_EchoImageInfo_ResponseParams.pass
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, image_info$.ImageInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TraitsTestService_EchoImageInfo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TraitsTestService_EchoImageInfo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TraitsTestService_EchoImageInfo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pass = decoder.decodeStructPointer(image_info$.ImageInfo);
    return val;
  };

  TraitsTestService_EchoImageInfo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TraitsTestService_EchoImageInfo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(image_info$.ImageInfo, val.pass);
  };
  function TraitsTestService_EchoBitmap_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TraitsTestService_EchoBitmap_Params.prototype.initDefaults_ = function() {
    this.b = null;
  };
  TraitsTestService_EchoBitmap_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TraitsTestService_EchoBitmap_Params.validate = function(messageValidator, offset) {
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


    // validate TraitsTestService_EchoBitmap_Params.b
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, bitmap$.Bitmap, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TraitsTestService_EchoBitmap_Params.encodedSize = codec.kStructHeaderSize + 8;

  TraitsTestService_EchoBitmap_Params.decode = function(decoder) {
    var packed;
    var val = new TraitsTestService_EchoBitmap_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.b = decoder.decodeStructPointer(bitmap$.Bitmap);
    return val;
  };

  TraitsTestService_EchoBitmap_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TraitsTestService_EchoBitmap_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(bitmap$.Bitmap, val.b);
  };
  function TraitsTestService_EchoBitmap_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TraitsTestService_EchoBitmap_ResponseParams.prototype.initDefaults_ = function() {
    this.pass = null;
  };
  TraitsTestService_EchoBitmap_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TraitsTestService_EchoBitmap_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate TraitsTestService_EchoBitmap_ResponseParams.pass
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, bitmap$.Bitmap, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TraitsTestService_EchoBitmap_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TraitsTestService_EchoBitmap_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TraitsTestService_EchoBitmap_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pass = decoder.decodeStructPointer(bitmap$.Bitmap);
    return val;
  };

  TraitsTestService_EchoBitmap_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TraitsTestService_EchoBitmap_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(bitmap$.Bitmap, val.pass);
  };
  function TraitsTestService_EchoBlurImageFilterTileMode_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TraitsTestService_EchoBlurImageFilterTileMode_Params.prototype.initDefaults_ = function() {
    this.t = 0;
  };
  TraitsTestService_EchoBlurImageFilterTileMode_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TraitsTestService_EchoBlurImageFilterTileMode_Params.validate = function(messageValidator, offset) {
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


    // validate TraitsTestService_EchoBlurImageFilterTileMode_Params.t
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, blur_image_filter_tile_mode$.BlurTileMode);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TraitsTestService_EchoBlurImageFilterTileMode_Params.encodedSize = codec.kStructHeaderSize + 8;

  TraitsTestService_EchoBlurImageFilterTileMode_Params.decode = function(decoder) {
    var packed;
    var val = new TraitsTestService_EchoBlurImageFilterTileMode_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.t = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TraitsTestService_EchoBlurImageFilterTileMode_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TraitsTestService_EchoBlurImageFilterTileMode_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.t);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams.prototype.initDefaults_ = function() {
    this.pass = 0;
  };
  TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams.pass
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, blur_image_filter_tile_mode$.BlurTileMode);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pass = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.pass);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kTraitsTestService_EchoImageInfo_Name = 0;
  var kTraitsTestService_EchoBitmap_Name = 1;
  var kTraitsTestService_EchoBlurImageFilterTileMode_Name = 2;

  function TraitsTestServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(TraitsTestService,
                                                   handleOrPtrInfo);
  }

  function TraitsTestServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        TraitsTestService, associatedInterfacePtrInfo);
  }

  TraitsTestServiceAssociatedPtr.prototype =
      Object.create(TraitsTestServicePtr.prototype);
  TraitsTestServiceAssociatedPtr.prototype.constructor =
      TraitsTestServiceAssociatedPtr;

  function TraitsTestServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  TraitsTestServicePtr.prototype.echoImageInfo = function() {
    return TraitsTestServiceProxy.prototype.echoImageInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  TraitsTestServiceProxy.prototype.echoImageInfo = function(i) {
    var params_ = new TraitsTestService_EchoImageInfo_Params();
    params_.i = i;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTraitsTestService_EchoImageInfo_Name,
          codec.align(TraitsTestService_EchoImageInfo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TraitsTestService_EchoImageInfo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TraitsTestService_EchoImageInfo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TraitsTestServicePtr.prototype.echoBitmap = function() {
    return TraitsTestServiceProxy.prototype.echoBitmap
        .apply(this.ptr.getProxy(), arguments);
  };

  TraitsTestServiceProxy.prototype.echoBitmap = function(b) {
    var params_ = new TraitsTestService_EchoBitmap_Params();
    params_.b = b;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTraitsTestService_EchoBitmap_Name,
          codec.align(TraitsTestService_EchoBitmap_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TraitsTestService_EchoBitmap_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TraitsTestService_EchoBitmap_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TraitsTestServicePtr.prototype.echoBlurImageFilterTileMode = function() {
    return TraitsTestServiceProxy.prototype.echoBlurImageFilterTileMode
        .apply(this.ptr.getProxy(), arguments);
  };

  TraitsTestServiceProxy.prototype.echoBlurImageFilterTileMode = function(t) {
    var params_ = new TraitsTestService_EchoBlurImageFilterTileMode_Params();
    params_.t = t;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTraitsTestService_EchoBlurImageFilterTileMode_Name,
          codec.align(TraitsTestService_EchoBlurImageFilterTileMode_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TraitsTestService_EchoBlurImageFilterTileMode_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function TraitsTestServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  TraitsTestServiceStub.prototype.echoImageInfo = function(i) {
    return this.delegate_ && this.delegate_.echoImageInfo && this.delegate_.echoImageInfo(i);
  }
  TraitsTestServiceStub.prototype.echoBitmap = function(b) {
    return this.delegate_ && this.delegate_.echoBitmap && this.delegate_.echoBitmap(b);
  }
  TraitsTestServiceStub.prototype.echoBlurImageFilterTileMode = function(t) {
    return this.delegate_ && this.delegate_.echoBlurImageFilterTileMode && this.delegate_.echoBlurImageFilterTileMode(t);
  }

  TraitsTestServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TraitsTestServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTraitsTestService_EchoImageInfo_Name:
      var params = reader.decodeStruct(TraitsTestService_EchoImageInfo_Params);
      this.echoImageInfo(params.i).then(function(response) {
        var responseParams =
            new TraitsTestService_EchoImageInfo_ResponseParams();
        responseParams.pass = response.pass;
        var builder = new codec.MessageV1Builder(
            kTraitsTestService_EchoImageInfo_Name,
            codec.align(TraitsTestService_EchoImageInfo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TraitsTestService_EchoImageInfo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTraitsTestService_EchoBitmap_Name:
      var params = reader.decodeStruct(TraitsTestService_EchoBitmap_Params);
      this.echoBitmap(params.b).then(function(response) {
        var responseParams =
            new TraitsTestService_EchoBitmap_ResponseParams();
        responseParams.pass = response.pass;
        var builder = new codec.MessageV1Builder(
            kTraitsTestService_EchoBitmap_Name,
            codec.align(TraitsTestService_EchoBitmap_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TraitsTestService_EchoBitmap_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTraitsTestService_EchoBlurImageFilterTileMode_Name:
      var params = reader.decodeStruct(TraitsTestService_EchoBlurImageFilterTileMode_Params);
      this.echoBlurImageFilterTileMode(params.t).then(function(response) {
        var responseParams =
            new TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams();
        responseParams.pass = response.pass;
        var builder = new codec.MessageV1Builder(
            kTraitsTestService_EchoBlurImageFilterTileMode_Name,
            codec.align(TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateTraitsTestServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTraitsTestService_EchoImageInfo_Name:
        if (message.expectsResponse())
          paramsClass = TraitsTestService_EchoImageInfo_Params;
      break;
      case kTraitsTestService_EchoBitmap_Name:
        if (message.expectsResponse())
          paramsClass = TraitsTestService_EchoBitmap_Params;
      break;
      case kTraitsTestService_EchoBlurImageFilterTileMode_Name:
        if (message.expectsResponse())
          paramsClass = TraitsTestService_EchoBlurImageFilterTileMode_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTraitsTestServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kTraitsTestService_EchoImageInfo_Name:
        if (message.isResponse())
          paramsClass = TraitsTestService_EchoImageInfo_ResponseParams;
        break;
      case kTraitsTestService_EchoBitmap_Name:
        if (message.isResponse())
          paramsClass = TraitsTestService_EchoBitmap_ResponseParams;
        break;
      case kTraitsTestService_EchoBlurImageFilterTileMode_Name:
        if (message.isResponse())
          paramsClass = TraitsTestService_EchoBlurImageFilterTileMode_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var TraitsTestService = {
    name: 'skia.mojom.TraitsTestService',
    kVersion: 0,
    ptrClass: TraitsTestServicePtr,
    proxyClass: TraitsTestServiceProxy,
    stubClass: TraitsTestServiceStub,
    validateRequest: validateTraitsTestServiceRequest,
    validateResponse: validateTraitsTestServiceResponse,
  };
  TraitsTestServiceStub.prototype.validator = validateTraitsTestServiceRequest;
  TraitsTestServiceProxy.prototype.validator = validateTraitsTestServiceResponse;
  exports.TraitsTestService = TraitsTestService;
  exports.TraitsTestServicePtr = TraitsTestServicePtr;
  exports.TraitsTestServiceAssociatedPtr = TraitsTestServiceAssociatedPtr;
})();