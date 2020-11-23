// services/video_capture/public/mojom/video_source_provider.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/video_capture/public/mojom/video_source_provider.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('videoCapture.mojom');
  var video_capture_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/capture/mojom/video_capture_types.mojom', '../../../../media/capture/mojom/video_capture_types.mojom.js');
  }
  var devices_changed_observer$ =
      mojo.internal.exposeNamespace('videoCapture.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/video_capture/public/mojom/devices_changed_observer.mojom', 'devices_changed_observer.mojom.js');
  }
  var producer$ =
      mojo.internal.exposeNamespace('videoCapture.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/video_capture/public/mojom/producer.mojom', 'producer.mojom.js');
  }
  var video_source$ =
      mojo.internal.exposeNamespace('videoCapture.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/video_capture/public/mojom/video_source.mojom', 'video_source.mojom.js');
  }
  var virtual_device$ =
      mojo.internal.exposeNamespace('videoCapture.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/video_capture/public/mojom/virtual_device.mojom', 'virtual_device.mojom.js');
  }



  function VideoSourceProvider_GetSourceInfos_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoSourceProvider_GetSourceInfos_Params.prototype.initDefaults_ = function() {
  };
  VideoSourceProvider_GetSourceInfos_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoSourceProvider_GetSourceInfos_Params.validate = function(messageValidator, offset) {
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

  VideoSourceProvider_GetSourceInfos_Params.encodedSize = codec.kStructHeaderSize + 0;

  VideoSourceProvider_GetSourceInfos_Params.decode = function(decoder) {
    var packed;
    var val = new VideoSourceProvider_GetSourceInfos_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VideoSourceProvider_GetSourceInfos_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoSourceProvider_GetSourceInfos_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VideoSourceProvider_GetSourceInfos_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoSourceProvider_GetSourceInfos_ResponseParams.prototype.initDefaults_ = function() {
    this.sourceInfos = null;
  };
  VideoSourceProvider_GetSourceInfos_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoSourceProvider_GetSourceInfos_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate VideoSourceProvider_GetSourceInfos_ResponseParams.sourceInfos
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(video_capture_types$.VideoCaptureDeviceInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoSourceProvider_GetSourceInfos_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VideoSourceProvider_GetSourceInfos_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VideoSourceProvider_GetSourceInfos_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sourceInfos = decoder.decodeArrayPointer(new codec.PointerTo(video_capture_types$.VideoCaptureDeviceInfo));
    return val;
  };

  VideoSourceProvider_GetSourceInfos_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoSourceProvider_GetSourceInfos_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(video_capture_types$.VideoCaptureDeviceInfo), val.sourceInfos);
  };
  function VideoSourceProvider_GetVideoSource_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoSourceProvider_GetVideoSource_Params.prototype.initDefaults_ = function() {
    this.sourceId = null;
    this.stream = new bindings.InterfaceRequest();
  };
  VideoSourceProvider_GetVideoSource_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoSourceProvider_GetVideoSource_Params.validate = function(messageValidator, offset) {
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


    // validate VideoSourceProvider_GetVideoSource_Params.sourceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoSourceProvider_GetVideoSource_Params.stream
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoSourceProvider_GetVideoSource_Params.encodedSize = codec.kStructHeaderSize + 16;

  VideoSourceProvider_GetVideoSource_Params.decode = function(decoder) {
    var packed;
    var val = new VideoSourceProvider_GetVideoSource_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sourceId = decoder.decodeStruct(codec.String);
    val.stream = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoSourceProvider_GetVideoSource_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoSourceProvider_GetVideoSource_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.sourceId);
    encoder.encodeStruct(codec.InterfaceRequest, val.stream);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoSourceProvider_AddSharedMemoryVirtualDevice_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoSourceProvider_AddSharedMemoryVirtualDevice_Params.prototype.initDefaults_ = function() {
    this.deviceInfo = null;
    this.producer = new producer$.ProducerPtr();
    this.sendBufferHandlesToProducerAsRawFileDescriptors = false;
    this.virtualDevice = new bindings.InterfaceRequest();
  };
  VideoSourceProvider_AddSharedMemoryVirtualDevice_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoSourceProvider_AddSharedMemoryVirtualDevice_Params.validate = function(messageValidator, offset) {
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


    // validate VideoSourceProvider_AddSharedMemoryVirtualDevice_Params.deviceInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, video_capture_types$.VideoCaptureDeviceInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoSourceProvider_AddSharedMemoryVirtualDevice_Params.producer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate VideoSourceProvider_AddSharedMemoryVirtualDevice_Params.virtualDevice
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 20, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoSourceProvider_AddSharedMemoryVirtualDevice_Params.encodedSize = codec.kStructHeaderSize + 24;

  VideoSourceProvider_AddSharedMemoryVirtualDevice_Params.decode = function(decoder) {
    var packed;
    var val = new VideoSourceProvider_AddSharedMemoryVirtualDevice_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceInfo = decoder.decodeStructPointer(video_capture_types$.VideoCaptureDeviceInfo);
    val.producer = decoder.decodeStruct(new codec.Interface(producer$.ProducerPtr));
    packed = decoder.readUint8();
    val.sendBufferHandlesToProducerAsRawFileDescriptors = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.virtualDevice = decoder.decodeStruct(codec.InterfaceRequest);
    return val;
  };

  VideoSourceProvider_AddSharedMemoryVirtualDevice_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoSourceProvider_AddSharedMemoryVirtualDevice_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(video_capture_types$.VideoCaptureDeviceInfo, val.deviceInfo);
    encoder.encodeStruct(new codec.Interface(producer$.ProducerPtr), val.producer);
    packed = 0;
    packed |= (val.sendBufferHandlesToProducerAsRawFileDescriptors & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.InterfaceRequest, val.virtualDevice);
  };
  function VideoSourceProvider_AddTextureVirtualDevice_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoSourceProvider_AddTextureVirtualDevice_Params.prototype.initDefaults_ = function() {
    this.deviceInfo = null;
    this.virtualDevice = new bindings.InterfaceRequest();
  };
  VideoSourceProvider_AddTextureVirtualDevice_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoSourceProvider_AddTextureVirtualDevice_Params.validate = function(messageValidator, offset) {
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


    // validate VideoSourceProvider_AddTextureVirtualDevice_Params.deviceInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, video_capture_types$.VideoCaptureDeviceInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoSourceProvider_AddTextureVirtualDevice_Params.virtualDevice
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoSourceProvider_AddTextureVirtualDevice_Params.encodedSize = codec.kStructHeaderSize + 16;

  VideoSourceProvider_AddTextureVirtualDevice_Params.decode = function(decoder) {
    var packed;
    var val = new VideoSourceProvider_AddTextureVirtualDevice_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceInfo = decoder.decodeStructPointer(video_capture_types$.VideoCaptureDeviceInfo);
    val.virtualDevice = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoSourceProvider_AddTextureVirtualDevice_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoSourceProvider_AddTextureVirtualDevice_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(video_capture_types$.VideoCaptureDeviceInfo, val.deviceInfo);
    encoder.encodeStruct(codec.InterfaceRequest, val.virtualDevice);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params.prototype.initDefaults_ = function() {
    this.observer = new devices_changed_observer$.DevicesChangedObserverPtr();
    this.raiseEventIfVirtualDevicesAlreadyPresent = false;
  };
  VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params.validate = function(messageValidator, offset) {
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


    // validate VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params.encodedSize = codec.kStructHeaderSize + 16;

  VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params.decode = function(decoder) {
    var packed;
    var val = new VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.observer = decoder.decodeStruct(new codec.Interface(devices_changed_observer$.DevicesChangedObserverPtr));
    packed = decoder.readUint8();
    val.raiseEventIfVirtualDevicesAlreadyPresent = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(devices_changed_observer$.DevicesChangedObserverPtr), val.observer);
    packed = 0;
    packed |= (val.raiseEventIfVirtualDevicesAlreadyPresent & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoSourceProvider_Close_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoSourceProvider_Close_Params.prototype.initDefaults_ = function() {
  };
  VideoSourceProvider_Close_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoSourceProvider_Close_Params.validate = function(messageValidator, offset) {
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

  VideoSourceProvider_Close_Params.encodedSize = codec.kStructHeaderSize + 0;

  VideoSourceProvider_Close_Params.decode = function(decoder) {
    var packed;
    var val = new VideoSourceProvider_Close_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VideoSourceProvider_Close_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoSourceProvider_Close_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VideoSourceProvider_Close_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoSourceProvider_Close_ResponseParams.prototype.initDefaults_ = function() {
  };
  VideoSourceProvider_Close_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoSourceProvider_Close_ResponseParams.validate = function(messageValidator, offset) {
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

  VideoSourceProvider_Close_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  VideoSourceProvider_Close_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VideoSourceProvider_Close_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VideoSourceProvider_Close_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoSourceProvider_Close_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  var kVideoSourceProvider_GetSourceInfos_Name = 0;
  var kVideoSourceProvider_GetVideoSource_Name = 1;
  var kVideoSourceProvider_AddSharedMemoryVirtualDevice_Name = 2;
  var kVideoSourceProvider_AddTextureVirtualDevice_Name = 3;
  var kVideoSourceProvider_RegisterVirtualDevicesChangedObserver_Name = 4;
  var kVideoSourceProvider_Close_Name = 5;

  function VideoSourceProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VideoSourceProvider,
                                                   handleOrPtrInfo);
  }

  function VideoSourceProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VideoSourceProvider, associatedInterfacePtrInfo);
  }

  VideoSourceProviderAssociatedPtr.prototype =
      Object.create(VideoSourceProviderPtr.prototype);
  VideoSourceProviderAssociatedPtr.prototype.constructor =
      VideoSourceProviderAssociatedPtr;

  function VideoSourceProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  VideoSourceProviderPtr.prototype.getSourceInfos = function() {
    return VideoSourceProviderProxy.prototype.getSourceInfos
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoSourceProviderProxy.prototype.getSourceInfos = function() {
    var params_ = new VideoSourceProvider_GetSourceInfos_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVideoSourceProvider_GetSourceInfos_Name,
          codec.align(VideoSourceProvider_GetSourceInfos_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VideoSourceProvider_GetSourceInfos_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VideoSourceProvider_GetSourceInfos_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VideoSourceProviderPtr.prototype.getVideoSource = function() {
    return VideoSourceProviderProxy.prototype.getVideoSource
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoSourceProviderProxy.prototype.getVideoSource = function(sourceId, stream) {
    var params_ = new VideoSourceProvider_GetVideoSource_Params();
    params_.sourceId = sourceId;
    params_.stream = stream;
    var builder = new codec.MessageV0Builder(
        kVideoSourceProvider_GetVideoSource_Name,
        codec.align(VideoSourceProvider_GetVideoSource_Params.encodedSize));
    builder.encodeStruct(VideoSourceProvider_GetVideoSource_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoSourceProviderPtr.prototype.addSharedMemoryVirtualDevice = function() {
    return VideoSourceProviderProxy.prototype.addSharedMemoryVirtualDevice
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoSourceProviderProxy.prototype.addSharedMemoryVirtualDevice = function(deviceInfo, producer, sendBufferHandlesToProducerAsRawFileDescriptors, virtualDevice) {
    var params_ = new VideoSourceProvider_AddSharedMemoryVirtualDevice_Params();
    params_.deviceInfo = deviceInfo;
    params_.producer = producer;
    params_.sendBufferHandlesToProducerAsRawFileDescriptors = sendBufferHandlesToProducerAsRawFileDescriptors;
    params_.virtualDevice = virtualDevice;
    var builder = new codec.MessageV0Builder(
        kVideoSourceProvider_AddSharedMemoryVirtualDevice_Name,
        codec.align(VideoSourceProvider_AddSharedMemoryVirtualDevice_Params.encodedSize));
    builder.encodeStruct(VideoSourceProvider_AddSharedMemoryVirtualDevice_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoSourceProviderPtr.prototype.addTextureVirtualDevice = function() {
    return VideoSourceProviderProxy.prototype.addTextureVirtualDevice
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoSourceProviderProxy.prototype.addTextureVirtualDevice = function(deviceInfo, virtualDevice) {
    var params_ = new VideoSourceProvider_AddTextureVirtualDevice_Params();
    params_.deviceInfo = deviceInfo;
    params_.virtualDevice = virtualDevice;
    var builder = new codec.MessageV0Builder(
        kVideoSourceProvider_AddTextureVirtualDevice_Name,
        codec.align(VideoSourceProvider_AddTextureVirtualDevice_Params.encodedSize));
    builder.encodeStruct(VideoSourceProvider_AddTextureVirtualDevice_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoSourceProviderPtr.prototype.registerVirtualDevicesChangedObserver = function() {
    return VideoSourceProviderProxy.prototype.registerVirtualDevicesChangedObserver
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoSourceProviderProxy.prototype.registerVirtualDevicesChangedObserver = function(observer, raiseEventIfVirtualDevicesAlreadyPresent) {
    var params_ = new VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params();
    params_.observer = observer;
    params_.raiseEventIfVirtualDevicesAlreadyPresent = raiseEventIfVirtualDevicesAlreadyPresent;
    var builder = new codec.MessageV0Builder(
        kVideoSourceProvider_RegisterVirtualDevicesChangedObserver_Name,
        codec.align(VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params.encodedSize));
    builder.encodeStruct(VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VideoSourceProviderPtr.prototype.close = function() {
    return VideoSourceProviderProxy.prototype.close
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoSourceProviderProxy.prototype.close = function() {
    var params_ = new VideoSourceProvider_Close_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVideoSourceProvider_Close_Name,
          codec.align(VideoSourceProvider_Close_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VideoSourceProvider_Close_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VideoSourceProvider_Close_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function VideoSourceProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  VideoSourceProviderStub.prototype.getSourceInfos = function() {
    return this.delegate_ && this.delegate_.getSourceInfos && this.delegate_.getSourceInfos();
  }
  VideoSourceProviderStub.prototype.getVideoSource = function(sourceId, stream) {
    return this.delegate_ && this.delegate_.getVideoSource && this.delegate_.getVideoSource(sourceId, stream);
  }
  VideoSourceProviderStub.prototype.addSharedMemoryVirtualDevice = function(deviceInfo, producer, sendBufferHandlesToProducerAsRawFileDescriptors, virtualDevice) {
    return this.delegate_ && this.delegate_.addSharedMemoryVirtualDevice && this.delegate_.addSharedMemoryVirtualDevice(deviceInfo, producer, sendBufferHandlesToProducerAsRawFileDescriptors, virtualDevice);
  }
  VideoSourceProviderStub.prototype.addTextureVirtualDevice = function(deviceInfo, virtualDevice) {
    return this.delegate_ && this.delegate_.addTextureVirtualDevice && this.delegate_.addTextureVirtualDevice(deviceInfo, virtualDevice);
  }
  VideoSourceProviderStub.prototype.registerVirtualDevicesChangedObserver = function(observer, raiseEventIfVirtualDevicesAlreadyPresent) {
    return this.delegate_ && this.delegate_.registerVirtualDevicesChangedObserver && this.delegate_.registerVirtualDevicesChangedObserver(observer, raiseEventIfVirtualDevicesAlreadyPresent);
  }
  VideoSourceProviderStub.prototype.close = function() {
    return this.delegate_ && this.delegate_.close && this.delegate_.close();
  }

  VideoSourceProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVideoSourceProvider_GetVideoSource_Name:
      var params = reader.decodeStruct(VideoSourceProvider_GetVideoSource_Params);
      this.getVideoSource(params.sourceId, params.stream);
      return true;
    case kVideoSourceProvider_AddSharedMemoryVirtualDevice_Name:
      var params = reader.decodeStruct(VideoSourceProvider_AddSharedMemoryVirtualDevice_Params);
      this.addSharedMemoryVirtualDevice(params.deviceInfo, params.producer, params.sendBufferHandlesToProducerAsRawFileDescriptors, params.virtualDevice);
      return true;
    case kVideoSourceProvider_AddTextureVirtualDevice_Name:
      var params = reader.decodeStruct(VideoSourceProvider_AddTextureVirtualDevice_Params);
      this.addTextureVirtualDevice(params.deviceInfo, params.virtualDevice);
      return true;
    case kVideoSourceProvider_RegisterVirtualDevicesChangedObserver_Name:
      var params = reader.decodeStruct(VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params);
      this.registerVirtualDevicesChangedObserver(params.observer, params.raiseEventIfVirtualDevicesAlreadyPresent);
      return true;
    default:
      return false;
    }
  };

  VideoSourceProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVideoSourceProvider_GetSourceInfos_Name:
      var params = reader.decodeStruct(VideoSourceProvider_GetSourceInfos_Params);
      this.getSourceInfos().then(function(response) {
        var responseParams =
            new VideoSourceProvider_GetSourceInfos_ResponseParams();
        responseParams.sourceInfos = response.sourceInfos;
        var builder = new codec.MessageV1Builder(
            kVideoSourceProvider_GetSourceInfos_Name,
            codec.align(VideoSourceProvider_GetSourceInfos_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VideoSourceProvider_GetSourceInfos_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVideoSourceProvider_Close_Name:
      var params = reader.decodeStruct(VideoSourceProvider_Close_Params);
      this.close().then(function(response) {
        var responseParams =
            new VideoSourceProvider_Close_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kVideoSourceProvider_Close_Name,
            codec.align(VideoSourceProvider_Close_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VideoSourceProvider_Close_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateVideoSourceProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVideoSourceProvider_GetSourceInfos_Name:
        if (message.expectsResponse())
          paramsClass = VideoSourceProvider_GetSourceInfos_Params;
      break;
      case kVideoSourceProvider_GetVideoSource_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoSourceProvider_GetVideoSource_Params;
      break;
      case kVideoSourceProvider_AddSharedMemoryVirtualDevice_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoSourceProvider_AddSharedMemoryVirtualDevice_Params;
      break;
      case kVideoSourceProvider_AddTextureVirtualDevice_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoSourceProvider_AddTextureVirtualDevice_Params;
      break;
      case kVideoSourceProvider_RegisterVirtualDevicesChangedObserver_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params;
      break;
      case kVideoSourceProvider_Close_Name:
        if (message.expectsResponse())
          paramsClass = VideoSourceProvider_Close_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVideoSourceProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVideoSourceProvider_GetSourceInfos_Name:
        if (message.isResponse())
          paramsClass = VideoSourceProvider_GetSourceInfos_ResponseParams;
        break;
      case kVideoSourceProvider_Close_Name:
        if (message.isResponse())
          paramsClass = VideoSourceProvider_Close_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VideoSourceProvider = {
    name: 'video_capture.mojom.VideoSourceProvider',
    kVersion: 0,
    ptrClass: VideoSourceProviderPtr,
    proxyClass: VideoSourceProviderProxy,
    stubClass: VideoSourceProviderStub,
    validateRequest: validateVideoSourceProviderRequest,
    validateResponse: validateVideoSourceProviderResponse,
  };
  VideoSourceProviderStub.prototype.validator = validateVideoSourceProviderRequest;
  VideoSourceProviderProxy.prototype.validator = validateVideoSourceProviderResponse;
  exports.VideoSourceProvider = VideoSourceProvider;
  exports.VideoSourceProviderPtr = VideoSourceProviderPtr;
  exports.VideoSourceProviderAssociatedPtr = VideoSourceProviderAssociatedPtr;
})();