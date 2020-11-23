// services/viz/public/mojom/gpu.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/mojom/gpu.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('viz.mojom');
  var gpu_feature_info$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/gpu_feature_info.mojom', '../../../../gpu/ipc/common/gpu_feature_info.mojom.js');
  }
  var gpu_info$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/gpu_info.mojom', '../../../../gpu/ipc/common/gpu_info.mojom.js');
  }
  var sync_token$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/sync_token.mojom', '../../../../gpu/ipc/common/sync_token.mojom.js');
  }
  var video_encode_accelerator$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/video_encode_accelerator.mojom', '../../../../media/mojo/mojom/video_encode_accelerator.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }
  var buffer_types$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/buffer_types.mojom', '../../../../ui/gfx/mojom/buffer_types.mojom.js');
  }



  function GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params.prototype.initDefaults_ = function() {
    this.id = null;
    this.size = null;
    this.format = 0;
    this.usage = 0;
  };
  GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params.validate = function(messageValidator, offset) {
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


    // validate GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, buffer_types$.GpuMemoryBufferId, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params.format
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, buffer_types$.BufferFormat);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params.usage
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 20, buffer_types$.BufferUsage);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params.encodedSize = codec.kStructHeaderSize + 24;

  GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStructPointer(buffer_types$.GpuMemoryBufferId);
    val.size = decoder.decodeStructPointer(geometry$.Size);
    val.format = decoder.decodeStruct(codec.Int32);
    val.usage = decoder.decodeStruct(codec.Int32);
    return val;
  };

  GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(buffer_types$.GpuMemoryBufferId, val.id);
    encoder.encodeStructPointer(geometry$.Size, val.size);
    encoder.encodeStruct(codec.Int32, val.format);
    encoder.encodeStruct(codec.Int32, val.usage);
  };
  function GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams.prototype.initDefaults_ = function() {
    this.bufferHandle = null;
  };
  GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams.bufferHandle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, buffer_types$.GpuMemoryBufferHandle, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bufferHandle = decoder.decodeStructPointer(buffer_types$.GpuMemoryBufferHandle);
    return val;
  };

  GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(buffer_types$.GpuMemoryBufferHandle, val.bufferHandle);
  };
  function GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params.prototype.initDefaults_ = function() {
    this.id = null;
    this.syncToken = null;
  };
  GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params.validate = function(messageValidator, offset) {
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


    // validate GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, buffer_types$.GpuMemoryBufferId, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params.syncToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, sync_token$.SyncToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params.encodedSize = codec.kStructHeaderSize + 16;

  GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStructPointer(buffer_types$.GpuMemoryBufferId);
    val.syncToken = decoder.decodeStructPointer(sync_token$.SyncToken);
    return val;
  };

  GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(buffer_types$.GpuMemoryBufferId, val.id);
    encoder.encodeStructPointer(sync_token$.SyncToken, val.syncToken);
  };
  function Gpu_CreateGpuMemoryBufferFactory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Gpu_CreateGpuMemoryBufferFactory_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  Gpu_CreateGpuMemoryBufferFactory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Gpu_CreateGpuMemoryBufferFactory_Params.validate = function(messageValidator, offset) {
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


    // validate Gpu_CreateGpuMemoryBufferFactory_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Gpu_CreateGpuMemoryBufferFactory_Params.encodedSize = codec.kStructHeaderSize + 8;

  Gpu_CreateGpuMemoryBufferFactory_Params.decode = function(decoder) {
    var packed;
    var val = new Gpu_CreateGpuMemoryBufferFactory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Gpu_CreateGpuMemoryBufferFactory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Gpu_CreateGpuMemoryBufferFactory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Gpu_EstablishGpuChannel_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Gpu_EstablishGpuChannel_Params.prototype.initDefaults_ = function() {
  };
  Gpu_EstablishGpuChannel_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Gpu_EstablishGpuChannel_Params.validate = function(messageValidator, offset) {
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

  Gpu_EstablishGpuChannel_Params.encodedSize = codec.kStructHeaderSize + 0;

  Gpu_EstablishGpuChannel_Params.decode = function(decoder) {
    var packed;
    var val = new Gpu_EstablishGpuChannel_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Gpu_EstablishGpuChannel_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Gpu_EstablishGpuChannel_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function Gpu_EstablishGpuChannel_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Gpu_EstablishGpuChannel_ResponseParams.prototype.initDefaults_ = function() {
    this.clientId = 0;
    this.channelHandle = null;
    this.gpuInfo = null;
    this.gpuFeatureInfo = null;
  };
  Gpu_EstablishGpuChannel_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Gpu_EstablishGpuChannel_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate Gpu_EstablishGpuChannel_ResponseParams.channelHandle
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Gpu_EstablishGpuChannel_ResponseParams.gpuInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, gpu_info$.GpuInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Gpu_EstablishGpuChannel_ResponseParams.gpuFeatureInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, gpu_feature_info$.GpuFeatureInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Gpu_EstablishGpuChannel_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  Gpu_EstablishGpuChannel_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Gpu_EstablishGpuChannel_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.clientId = decoder.decodeStruct(codec.Int32);
    val.channelHandle = decoder.decodeStruct(codec.NullableHandle);
    val.gpuInfo = decoder.decodeStructPointer(gpu_info$.GpuInfo);
    val.gpuFeatureInfo = decoder.decodeStructPointer(gpu_feature_info$.GpuFeatureInfo);
    return val;
  };

  Gpu_EstablishGpuChannel_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Gpu_EstablishGpuChannel_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.clientId);
    encoder.encodeStruct(codec.NullableHandle, val.channelHandle);
    encoder.encodeStructPointer(gpu_info$.GpuInfo, val.gpuInfo);
    encoder.encodeStructPointer(gpu_feature_info$.GpuFeatureInfo, val.gpuFeatureInfo);
  };
  function Gpu_CreateVideoEncodeAcceleratorProvider_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Gpu_CreateVideoEncodeAcceleratorProvider_Params.prototype.initDefaults_ = function() {
    this.veaProvider = new bindings.InterfaceRequest();
  };
  Gpu_CreateVideoEncodeAcceleratorProvider_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Gpu_CreateVideoEncodeAcceleratorProvider_Params.validate = function(messageValidator, offset) {
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


    // validate Gpu_CreateVideoEncodeAcceleratorProvider_Params.veaProvider
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Gpu_CreateVideoEncodeAcceleratorProvider_Params.encodedSize = codec.kStructHeaderSize + 8;

  Gpu_CreateVideoEncodeAcceleratorProvider_Params.decode = function(decoder) {
    var packed;
    var val = new Gpu_CreateVideoEncodeAcceleratorProvider_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.veaProvider = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Gpu_CreateVideoEncodeAcceleratorProvider_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Gpu_CreateVideoEncodeAcceleratorProvider_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.veaProvider);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kGpuMemoryBufferFactory_CreateGpuMemoryBuffer_Name = 0;
  var kGpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Name = 1;

  function GpuMemoryBufferFactoryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(GpuMemoryBufferFactory,
                                                   handleOrPtrInfo);
  }

  function GpuMemoryBufferFactoryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        GpuMemoryBufferFactory, associatedInterfacePtrInfo);
  }

  GpuMemoryBufferFactoryAssociatedPtr.prototype =
      Object.create(GpuMemoryBufferFactoryPtr.prototype);
  GpuMemoryBufferFactoryAssociatedPtr.prototype.constructor =
      GpuMemoryBufferFactoryAssociatedPtr;

  function GpuMemoryBufferFactoryProxy(receiver) {
    this.receiver_ = receiver;
  }
  GpuMemoryBufferFactoryPtr.prototype.createGpuMemoryBuffer = function() {
    return GpuMemoryBufferFactoryProxy.prototype.createGpuMemoryBuffer
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuMemoryBufferFactoryProxy.prototype.createGpuMemoryBuffer = function(id, size, format, usage) {
    var params_ = new GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params();
    params_.id = id;
    params_.size = size;
    params_.format = format;
    params_.usage = usage;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpuMemoryBufferFactory_CreateGpuMemoryBuffer_Name,
          codec.align(GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuMemoryBufferFactoryPtr.prototype.destroyGpuMemoryBuffer = function() {
    return GpuMemoryBufferFactoryProxy.prototype.destroyGpuMemoryBuffer
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuMemoryBufferFactoryProxy.prototype.destroyGpuMemoryBuffer = function(id, syncToken) {
    var params_ = new GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params();
    params_.id = id;
    params_.syncToken = syncToken;
    var builder = new codec.MessageV0Builder(
        kGpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Name,
        codec.align(GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params.encodedSize));
    builder.encodeStruct(GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function GpuMemoryBufferFactoryStub(delegate) {
    this.delegate_ = delegate;
  }
  GpuMemoryBufferFactoryStub.prototype.createGpuMemoryBuffer = function(id, size, format, usage) {
    return this.delegate_ && this.delegate_.createGpuMemoryBuffer && this.delegate_.createGpuMemoryBuffer(id, size, format, usage);
  }
  GpuMemoryBufferFactoryStub.prototype.destroyGpuMemoryBuffer = function(id, syncToken) {
    return this.delegate_ && this.delegate_.destroyGpuMemoryBuffer && this.delegate_.destroyGpuMemoryBuffer(id, syncToken);
  }

  GpuMemoryBufferFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kGpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Name:
      var params = reader.decodeStruct(GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params);
      this.destroyGpuMemoryBuffer(params.id, params.syncToken);
      return true;
    default:
      return false;
    }
  };

  GpuMemoryBufferFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kGpuMemoryBufferFactory_CreateGpuMemoryBuffer_Name:
      var params = reader.decodeStruct(GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params);
      this.createGpuMemoryBuffer(params.id, params.size, params.format, params.usage).then(function(response) {
        var responseParams =
            new GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams();
        responseParams.bufferHandle = response.bufferHandle;
        var builder = new codec.MessageV1Builder(
            kGpuMemoryBufferFactory_CreateGpuMemoryBuffer_Name,
            codec.align(GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateGpuMemoryBufferFactoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kGpuMemoryBufferFactory_CreateGpuMemoryBuffer_Name:
        if (message.expectsResponse())
          paramsClass = GpuMemoryBufferFactory_CreateGpuMemoryBuffer_Params;
      break;
      case kGpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = GpuMemoryBufferFactory_DestroyGpuMemoryBuffer_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateGpuMemoryBufferFactoryResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kGpuMemoryBufferFactory_CreateGpuMemoryBuffer_Name:
        if (message.isResponse())
          paramsClass = GpuMemoryBufferFactory_CreateGpuMemoryBuffer_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var GpuMemoryBufferFactory = {
    name: 'viz.mojom.GpuMemoryBufferFactory',
    kVersion: 0,
    ptrClass: GpuMemoryBufferFactoryPtr,
    proxyClass: GpuMemoryBufferFactoryProxy,
    stubClass: GpuMemoryBufferFactoryStub,
    validateRequest: validateGpuMemoryBufferFactoryRequest,
    validateResponse: validateGpuMemoryBufferFactoryResponse,
  };
  GpuMemoryBufferFactoryStub.prototype.validator = validateGpuMemoryBufferFactoryRequest;
  GpuMemoryBufferFactoryProxy.prototype.validator = validateGpuMemoryBufferFactoryResponse;
  var kGpu_CreateGpuMemoryBufferFactory_Name = 0;
  var kGpu_EstablishGpuChannel_Name = 1;
  var kGpu_CreateVideoEncodeAcceleratorProvider_Name = 2;

  function GpuPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(Gpu,
                                                   handleOrPtrInfo);
  }

  function GpuAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        Gpu, associatedInterfacePtrInfo);
  }

  GpuAssociatedPtr.prototype =
      Object.create(GpuPtr.prototype);
  GpuAssociatedPtr.prototype.constructor =
      GpuAssociatedPtr;

  function GpuProxy(receiver) {
    this.receiver_ = receiver;
  }
  GpuPtr.prototype.createGpuMemoryBufferFactory = function() {
    return GpuProxy.prototype.createGpuMemoryBufferFactory
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuProxy.prototype.createGpuMemoryBufferFactory = function(receiver) {
    var params_ = new Gpu_CreateGpuMemoryBufferFactory_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kGpu_CreateGpuMemoryBufferFactory_Name,
        codec.align(Gpu_CreateGpuMemoryBufferFactory_Params.encodedSize));
    builder.encodeStruct(Gpu_CreateGpuMemoryBufferFactory_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  GpuPtr.prototype.establishGpuChannel = function() {
    return GpuProxy.prototype.establishGpuChannel
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuProxy.prototype.establishGpuChannel = function() {
    var params_ = new Gpu_EstablishGpuChannel_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpu_EstablishGpuChannel_Name,
          codec.align(Gpu_EstablishGpuChannel_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Gpu_EstablishGpuChannel_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Gpu_EstablishGpuChannel_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GpuPtr.prototype.createVideoEncodeAcceleratorProvider = function() {
    return GpuProxy.prototype.createVideoEncodeAcceleratorProvider
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuProxy.prototype.createVideoEncodeAcceleratorProvider = function(veaProvider) {
    var params_ = new Gpu_CreateVideoEncodeAcceleratorProvider_Params();
    params_.veaProvider = veaProvider;
    var builder = new codec.MessageV0Builder(
        kGpu_CreateVideoEncodeAcceleratorProvider_Name,
        codec.align(Gpu_CreateVideoEncodeAcceleratorProvider_Params.encodedSize));
    builder.encodeStruct(Gpu_CreateVideoEncodeAcceleratorProvider_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function GpuStub(delegate) {
    this.delegate_ = delegate;
  }
  GpuStub.prototype.createGpuMemoryBufferFactory = function(receiver) {
    return this.delegate_ && this.delegate_.createGpuMemoryBufferFactory && this.delegate_.createGpuMemoryBufferFactory(receiver);
  }
  GpuStub.prototype.establishGpuChannel = function() {
    return this.delegate_ && this.delegate_.establishGpuChannel && this.delegate_.establishGpuChannel();
  }
  GpuStub.prototype.createVideoEncodeAcceleratorProvider = function(veaProvider) {
    return this.delegate_ && this.delegate_.createVideoEncodeAcceleratorProvider && this.delegate_.createVideoEncodeAcceleratorProvider(veaProvider);
  }

  GpuStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kGpu_CreateGpuMemoryBufferFactory_Name:
      var params = reader.decodeStruct(Gpu_CreateGpuMemoryBufferFactory_Params);
      this.createGpuMemoryBufferFactory(params.receiver);
      return true;
    case kGpu_CreateVideoEncodeAcceleratorProvider_Name:
      var params = reader.decodeStruct(Gpu_CreateVideoEncodeAcceleratorProvider_Params);
      this.createVideoEncodeAcceleratorProvider(params.veaProvider);
      return true;
    default:
      return false;
    }
  };

  GpuStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kGpu_EstablishGpuChannel_Name:
      var params = reader.decodeStruct(Gpu_EstablishGpuChannel_Params);
      this.establishGpuChannel().then(function(response) {
        var responseParams =
            new Gpu_EstablishGpuChannel_ResponseParams();
        responseParams.clientId = response.clientId;
        responseParams.channelHandle = response.channelHandle;
        responseParams.gpuInfo = response.gpuInfo;
        responseParams.gpuFeatureInfo = response.gpuFeatureInfo;
        var builder = new codec.MessageV1Builder(
            kGpu_EstablishGpuChannel_Name,
            codec.align(Gpu_EstablishGpuChannel_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Gpu_EstablishGpuChannel_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateGpuRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kGpu_CreateGpuMemoryBufferFactory_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Gpu_CreateGpuMemoryBufferFactory_Params;
      break;
      case kGpu_EstablishGpuChannel_Name:
        if (message.expectsResponse())
          paramsClass = Gpu_EstablishGpuChannel_Params;
      break;
      case kGpu_CreateVideoEncodeAcceleratorProvider_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Gpu_CreateVideoEncodeAcceleratorProvider_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateGpuResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kGpu_EstablishGpuChannel_Name:
        if (message.isResponse())
          paramsClass = Gpu_EstablishGpuChannel_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Gpu = {
    name: 'viz.mojom.Gpu',
    kVersion: 0,
    ptrClass: GpuPtr,
    proxyClass: GpuProxy,
    stubClass: GpuStub,
    validateRequest: validateGpuRequest,
    validateResponse: validateGpuResponse,
  };
  GpuStub.prototype.validator = validateGpuRequest;
  GpuProxy.prototype.validator = validateGpuResponse;
  exports.GpuMemoryBufferFactory = GpuMemoryBufferFactory;
  exports.GpuMemoryBufferFactoryPtr = GpuMemoryBufferFactoryPtr;
  exports.GpuMemoryBufferFactoryAssociatedPtr = GpuMemoryBufferFactoryAssociatedPtr;
  exports.Gpu = Gpu;
  exports.GpuPtr = GpuPtr;
  exports.GpuAssociatedPtr = GpuAssociatedPtr;
})();