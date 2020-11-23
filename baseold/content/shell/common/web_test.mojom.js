// content/shell/common/web_test.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'content/shell/common/web_test.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('content.mojom');
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var bitmap$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/bitmap.mojom', '../../../skia/public/mojom/bitmap.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }



  function ShellTestConfiguration(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ShellTestConfiguration.prototype.initDefaults_ = function() {
    this.currentWorkingDirectory = null;
    this.tempPath = null;
    this.testUrl = null;
    this.allowExternalPages = false;
    this.protocolMode = false;
    this.expectedPixelHash = null;
    this.initialSize = null;
  };
  ShellTestConfiguration.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ShellTestConfiguration.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ShellTestConfiguration.currentWorkingDirectory
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ShellTestConfiguration.tempPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ShellTestConfiguration.testUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate ShellTestConfiguration.expectedPixelHash
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ShellTestConfiguration.initialSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ShellTestConfiguration.encodedSize = codec.kStructHeaderSize + 48;

  ShellTestConfiguration.decode = function(decoder) {
    var packed;
    var val = new ShellTestConfiguration();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.currentWorkingDirectory = decoder.decodeStructPointer(file_path$.FilePath);
    val.tempPath = decoder.decodeStructPointer(file_path$.FilePath);
    val.testUrl = decoder.decodeStructPointer(url$.Url);
    packed = decoder.readUint8();
    val.allowExternalPages = (packed >> 0) & 1 ? true : false;
    val.protocolMode = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.expectedPixelHash = decoder.decodeStruct(codec.String);
    val.initialSize = decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  ShellTestConfiguration.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ShellTestConfiguration.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_path$.FilePath, val.currentWorkingDirectory);
    encoder.encodeStructPointer(file_path$.FilePath, val.tempPath);
    encoder.encodeStructPointer(url$.Url, val.testUrl);
    packed = 0;
    packed |= (val.allowExternalPages & 1) << 0
    packed |= (val.protocolMode & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.expectedPixelHash);
    encoder.encodeStructPointer(geometry$.Size, val.initialSize);
  };
  function WebTestDump(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTestDump.prototype.initDefaults_ = function() {
    this.audio = null;
    this.layout = null;
    this.pixels = null;
    this.actualPixelHash = null;
    this.selectionRect = null;
  };
  WebTestDump.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTestDump.validate = function(messageValidator, offset) {
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


    // validate WebTestDump.audio
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebTestDump.layout
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebTestDump.pixels
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, bitmap$.Bitmap, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebTestDump.actualPixelHash
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebTestDump.selectionRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebTestDump.encodedSize = codec.kStructHeaderSize + 40;

  WebTestDump.decode = function(decoder) {
    var packed;
    var val = new WebTestDump();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.audio = decoder.decodeArrayPointer(codec.Uint8);
    val.layout = decoder.decodeStruct(codec.NullableString);
    val.pixels = decoder.decodeStructPointer(bitmap$.Bitmap);
    val.actualPixelHash = decoder.decodeStruct(codec.String);
    val.selectionRect = decoder.decodeStructPointer(geometry$.Rect);
    return val;
  };

  WebTestDump.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTestDump.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.audio);
    encoder.encodeStruct(codec.NullableString, val.layout);
    encoder.encodeStructPointer(bitmap$.Bitmap, val.pixels);
    encoder.encodeStruct(codec.String, val.actualPixelHash);
    encoder.encodeStructPointer(geometry$.Rect, val.selectionRect);
  };
  function WebTestControl_CaptureDump_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTestControl_CaptureDump_Params.prototype.initDefaults_ = function() {
  };
  WebTestControl_CaptureDump_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTestControl_CaptureDump_Params.validate = function(messageValidator, offset) {
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

  WebTestControl_CaptureDump_Params.encodedSize = codec.kStructHeaderSize + 0;

  WebTestControl_CaptureDump_Params.decode = function(decoder) {
    var packed;
    var val = new WebTestControl_CaptureDump_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebTestControl_CaptureDump_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTestControl_CaptureDump_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WebTestControl_CaptureDump_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTestControl_CaptureDump_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  WebTestControl_CaptureDump_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTestControl_CaptureDump_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate WebTestControl_CaptureDump_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, WebTestDump, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebTestControl_CaptureDump_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WebTestControl_CaptureDump_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebTestControl_CaptureDump_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result = decoder.decodeStructPointer(WebTestDump);
    return val;
  };

  WebTestControl_CaptureDump_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTestControl_CaptureDump_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(WebTestDump, val.result);
  };
  function WebTestControl_CompositeWithRaster_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTestControl_CompositeWithRaster_Params.prototype.initDefaults_ = function() {
  };
  WebTestControl_CompositeWithRaster_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTestControl_CompositeWithRaster_Params.validate = function(messageValidator, offset) {
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

  WebTestControl_CompositeWithRaster_Params.encodedSize = codec.kStructHeaderSize + 0;

  WebTestControl_CompositeWithRaster_Params.decode = function(decoder) {
    var packed;
    var val = new WebTestControl_CompositeWithRaster_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebTestControl_CompositeWithRaster_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTestControl_CompositeWithRaster_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WebTestControl_CompositeWithRaster_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTestControl_CompositeWithRaster_ResponseParams.prototype.initDefaults_ = function() {
  };
  WebTestControl_CompositeWithRaster_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTestControl_CompositeWithRaster_ResponseParams.validate = function(messageValidator, offset) {
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

  WebTestControl_CompositeWithRaster_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  WebTestControl_CompositeWithRaster_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebTestControl_CompositeWithRaster_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebTestControl_CompositeWithRaster_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTestControl_CompositeWithRaster_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function WebTestControl_DumpFrameLayout_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTestControl_DumpFrameLayout_Params.prototype.initDefaults_ = function() {
  };
  WebTestControl_DumpFrameLayout_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTestControl_DumpFrameLayout_Params.validate = function(messageValidator, offset) {
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

  WebTestControl_DumpFrameLayout_Params.encodedSize = codec.kStructHeaderSize + 0;

  WebTestControl_DumpFrameLayout_Params.decode = function(decoder) {
    var packed;
    var val = new WebTestControl_DumpFrameLayout_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebTestControl_DumpFrameLayout_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTestControl_DumpFrameLayout_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WebTestControl_DumpFrameLayout_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTestControl_DumpFrameLayout_ResponseParams.prototype.initDefaults_ = function() {
    this.frameLayoutDump = null;
  };
  WebTestControl_DumpFrameLayout_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTestControl_DumpFrameLayout_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate WebTestControl_DumpFrameLayout_ResponseParams.frameLayoutDump
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebTestControl_DumpFrameLayout_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WebTestControl_DumpFrameLayout_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebTestControl_DumpFrameLayout_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameLayoutDump = decoder.decodeStruct(codec.String);
    return val;
  };

  WebTestControl_DumpFrameLayout_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTestControl_DumpFrameLayout_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.frameLayoutDump);
  };
  function WebTestControl_ReplicateTestConfiguration_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTestControl_ReplicateTestConfiguration_Params.prototype.initDefaults_ = function() {
    this.config = null;
  };
  WebTestControl_ReplicateTestConfiguration_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTestControl_ReplicateTestConfiguration_Params.validate = function(messageValidator, offset) {
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


    // validate WebTestControl_ReplicateTestConfiguration_Params.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ShellTestConfiguration, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebTestControl_ReplicateTestConfiguration_Params.encodedSize = codec.kStructHeaderSize + 8;

  WebTestControl_ReplicateTestConfiguration_Params.decode = function(decoder) {
    var packed;
    var val = new WebTestControl_ReplicateTestConfiguration_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.config = decoder.decodeStructPointer(ShellTestConfiguration);
    return val;
  };

  WebTestControl_ReplicateTestConfiguration_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTestControl_ReplicateTestConfiguration_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ShellTestConfiguration, val.config);
  };
  function WebTestControl_SetTestConfiguration_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTestControl_SetTestConfiguration_Params.prototype.initDefaults_ = function() {
    this.config = null;
  };
  WebTestControl_SetTestConfiguration_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTestControl_SetTestConfiguration_Params.validate = function(messageValidator, offset) {
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


    // validate WebTestControl_SetTestConfiguration_Params.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ShellTestConfiguration, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebTestControl_SetTestConfiguration_Params.encodedSize = codec.kStructHeaderSize + 8;

  WebTestControl_SetTestConfiguration_Params.decode = function(decoder) {
    var packed;
    var val = new WebTestControl_SetTestConfiguration_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.config = decoder.decodeStructPointer(ShellTestConfiguration);
    return val;
  };

  WebTestControl_SetTestConfiguration_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTestControl_SetTestConfiguration_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ShellTestConfiguration, val.config);
  };
  function WebTestControl_SetupSecondaryRenderer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTestControl_SetupSecondaryRenderer_Params.prototype.initDefaults_ = function() {
  };
  WebTestControl_SetupSecondaryRenderer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTestControl_SetupSecondaryRenderer_Params.validate = function(messageValidator, offset) {
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

  WebTestControl_SetupSecondaryRenderer_Params.encodedSize = codec.kStructHeaderSize + 0;

  WebTestControl_SetupSecondaryRenderer_Params.decode = function(decoder) {
    var packed;
    var val = new WebTestControl_SetupSecondaryRenderer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebTestControl_SetupSecondaryRenderer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTestControl_SetupSecondaryRenderer_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kWebTestControl_CaptureDump_Name = 0;
  var kWebTestControl_CompositeWithRaster_Name = 1;
  var kWebTestControl_DumpFrameLayout_Name = 2;
  var kWebTestControl_ReplicateTestConfiguration_Name = 3;
  var kWebTestControl_SetTestConfiguration_Name = 4;
  var kWebTestControl_SetupSecondaryRenderer_Name = 5;

  function WebTestControlPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WebTestControl,
                                                   handleOrPtrInfo);
  }

  function WebTestControlAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WebTestControl, associatedInterfacePtrInfo);
  }

  WebTestControlAssociatedPtr.prototype =
      Object.create(WebTestControlPtr.prototype);
  WebTestControlAssociatedPtr.prototype.constructor =
      WebTestControlAssociatedPtr;

  function WebTestControlProxy(receiver) {
    this.receiver_ = receiver;
  }
  WebTestControlPtr.prototype.captureDump = function() {
    return WebTestControlProxy.prototype.captureDump
        .apply(this.ptr.getProxy(), arguments);
  };

  WebTestControlProxy.prototype.captureDump = function() {
    var params_ = new WebTestControl_CaptureDump_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebTestControl_CaptureDump_Name,
          codec.align(WebTestControl_CaptureDump_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebTestControl_CaptureDump_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebTestControl_CaptureDump_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  WebTestControlPtr.prototype.compositeWithRaster = function() {
    return WebTestControlProxy.prototype.compositeWithRaster
        .apply(this.ptr.getProxy(), arguments);
  };

  WebTestControlProxy.prototype.compositeWithRaster = function() {
    var params_ = new WebTestControl_CompositeWithRaster_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebTestControl_CompositeWithRaster_Name,
          codec.align(WebTestControl_CompositeWithRaster_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebTestControl_CompositeWithRaster_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebTestControl_CompositeWithRaster_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  WebTestControlPtr.prototype.dumpFrameLayout = function() {
    return WebTestControlProxy.prototype.dumpFrameLayout
        .apply(this.ptr.getProxy(), arguments);
  };

  WebTestControlProxy.prototype.dumpFrameLayout = function() {
    var params_ = new WebTestControl_DumpFrameLayout_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebTestControl_DumpFrameLayout_Name,
          codec.align(WebTestControl_DumpFrameLayout_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebTestControl_DumpFrameLayout_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebTestControl_DumpFrameLayout_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  WebTestControlPtr.prototype.replicateTestConfiguration = function() {
    return WebTestControlProxy.prototype.replicateTestConfiguration
        .apply(this.ptr.getProxy(), arguments);
  };

  WebTestControlProxy.prototype.replicateTestConfiguration = function(config) {
    var params_ = new WebTestControl_ReplicateTestConfiguration_Params();
    params_.config = config;
    var builder = new codec.MessageV0Builder(
        kWebTestControl_ReplicateTestConfiguration_Name,
        codec.align(WebTestControl_ReplicateTestConfiguration_Params.encodedSize));
    builder.encodeStruct(WebTestControl_ReplicateTestConfiguration_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WebTestControlPtr.prototype.setTestConfiguration = function() {
    return WebTestControlProxy.prototype.setTestConfiguration
        .apply(this.ptr.getProxy(), arguments);
  };

  WebTestControlProxy.prototype.setTestConfiguration = function(config) {
    var params_ = new WebTestControl_SetTestConfiguration_Params();
    params_.config = config;
    var builder = new codec.MessageV0Builder(
        kWebTestControl_SetTestConfiguration_Name,
        codec.align(WebTestControl_SetTestConfiguration_Params.encodedSize));
    builder.encodeStruct(WebTestControl_SetTestConfiguration_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  WebTestControlPtr.prototype.setupSecondaryRenderer = function() {
    return WebTestControlProxy.prototype.setupSecondaryRenderer
        .apply(this.ptr.getProxy(), arguments);
  };

  WebTestControlProxy.prototype.setupSecondaryRenderer = function() {
    var params_ = new WebTestControl_SetupSecondaryRenderer_Params();
    var builder = new codec.MessageV0Builder(
        kWebTestControl_SetupSecondaryRenderer_Name,
        codec.align(WebTestControl_SetupSecondaryRenderer_Params.encodedSize));
    builder.encodeStruct(WebTestControl_SetupSecondaryRenderer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function WebTestControlStub(delegate) {
    this.delegate_ = delegate;
  }
  WebTestControlStub.prototype.captureDump = function() {
    return this.delegate_ && this.delegate_.captureDump && this.delegate_.captureDump();
  }
  WebTestControlStub.prototype.compositeWithRaster = function() {
    return this.delegate_ && this.delegate_.compositeWithRaster && this.delegate_.compositeWithRaster();
  }
  WebTestControlStub.prototype.dumpFrameLayout = function() {
    return this.delegate_ && this.delegate_.dumpFrameLayout && this.delegate_.dumpFrameLayout();
  }
  WebTestControlStub.prototype.replicateTestConfiguration = function(config) {
    return this.delegate_ && this.delegate_.replicateTestConfiguration && this.delegate_.replicateTestConfiguration(config);
  }
  WebTestControlStub.prototype.setTestConfiguration = function(config) {
    return this.delegate_ && this.delegate_.setTestConfiguration && this.delegate_.setTestConfiguration(config);
  }
  WebTestControlStub.prototype.setupSecondaryRenderer = function() {
    return this.delegate_ && this.delegate_.setupSecondaryRenderer && this.delegate_.setupSecondaryRenderer();
  }

  WebTestControlStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebTestControl_ReplicateTestConfiguration_Name:
      var params = reader.decodeStruct(WebTestControl_ReplicateTestConfiguration_Params);
      this.replicateTestConfiguration(params.config);
      return true;
    case kWebTestControl_SetTestConfiguration_Name:
      var params = reader.decodeStruct(WebTestControl_SetTestConfiguration_Params);
      this.setTestConfiguration(params.config);
      return true;
    case kWebTestControl_SetupSecondaryRenderer_Name:
      var params = reader.decodeStruct(WebTestControl_SetupSecondaryRenderer_Params);
      this.setupSecondaryRenderer();
      return true;
    default:
      return false;
    }
  };

  WebTestControlStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebTestControl_CaptureDump_Name:
      var params = reader.decodeStruct(WebTestControl_CaptureDump_Params);
      this.captureDump().then(function(response) {
        var responseParams =
            new WebTestControl_CaptureDump_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kWebTestControl_CaptureDump_Name,
            codec.align(WebTestControl_CaptureDump_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebTestControl_CaptureDump_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kWebTestControl_CompositeWithRaster_Name:
      var params = reader.decodeStruct(WebTestControl_CompositeWithRaster_Params);
      this.compositeWithRaster().then(function(response) {
        var responseParams =
            new WebTestControl_CompositeWithRaster_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kWebTestControl_CompositeWithRaster_Name,
            codec.align(WebTestControl_CompositeWithRaster_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebTestControl_CompositeWithRaster_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kWebTestControl_DumpFrameLayout_Name:
      var params = reader.decodeStruct(WebTestControl_DumpFrameLayout_Params);
      this.dumpFrameLayout().then(function(response) {
        var responseParams =
            new WebTestControl_DumpFrameLayout_ResponseParams();
        responseParams.frameLayoutDump = response.frameLayoutDump;
        var builder = new codec.MessageV1Builder(
            kWebTestControl_DumpFrameLayout_Name,
            codec.align(WebTestControl_DumpFrameLayout_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebTestControl_DumpFrameLayout_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateWebTestControlRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWebTestControl_CaptureDump_Name:
        if (message.expectsResponse())
          paramsClass = WebTestControl_CaptureDump_Params;
      break;
      case kWebTestControl_CompositeWithRaster_Name:
        if (message.expectsResponse())
          paramsClass = WebTestControl_CompositeWithRaster_Params;
      break;
      case kWebTestControl_DumpFrameLayout_Name:
        if (message.expectsResponse())
          paramsClass = WebTestControl_DumpFrameLayout_Params;
      break;
      case kWebTestControl_ReplicateTestConfiguration_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebTestControl_ReplicateTestConfiguration_Params;
      break;
      case kWebTestControl_SetTestConfiguration_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebTestControl_SetTestConfiguration_Params;
      break;
      case kWebTestControl_SetupSecondaryRenderer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebTestControl_SetupSecondaryRenderer_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWebTestControlResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kWebTestControl_CaptureDump_Name:
        if (message.isResponse())
          paramsClass = WebTestControl_CaptureDump_ResponseParams;
        break;
      case kWebTestControl_CompositeWithRaster_Name:
        if (message.isResponse())
          paramsClass = WebTestControl_CompositeWithRaster_ResponseParams;
        break;
      case kWebTestControl_DumpFrameLayout_Name:
        if (message.isResponse())
          paramsClass = WebTestControl_DumpFrameLayout_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var WebTestControl = {
    name: 'content.mojom.WebTestControl',
    kVersion: 0,
    ptrClass: WebTestControlPtr,
    proxyClass: WebTestControlProxy,
    stubClass: WebTestControlStub,
    validateRequest: validateWebTestControlRequest,
    validateResponse: validateWebTestControlResponse,
  };
  WebTestControlStub.prototype.validator = validateWebTestControlRequest;
  WebTestControlProxy.prototype.validator = validateWebTestControlResponse;
  exports.ShellTestConfiguration = ShellTestConfiguration;
  exports.WebTestDump = WebTestDump;
  exports.WebTestControl = WebTestControl;
  exports.WebTestControlPtr = WebTestControlPtr;
  exports.WebTestControlAssociatedPtr = WebTestControlAssociatedPtr;
})();