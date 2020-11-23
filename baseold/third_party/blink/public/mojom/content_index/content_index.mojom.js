// third_party/blink/public/mojom/content_index/content_index.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/content_index/content_index.mojom';
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
  var bitmap$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/bitmap.mojom', '../../../../../skia/public/mojom/bitmap.mojom.js');
  }
  var manifest$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/manifest/manifest.mojom', '../manifest/manifest.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }


  var ContentIndexError = {};
  ContentIndexError.NONE = 0;
  ContentIndexError.INVALID_PARAMETER = ContentIndexError.NONE + 1;
  ContentIndexError.STORAGE_ERROR = ContentIndexError.INVALID_PARAMETER + 1;
  ContentIndexError.NO_SERVICE_WORKER = ContentIndexError.STORAGE_ERROR + 1;
  ContentIndexError.MIN_VALUE = 0,
  ContentIndexError.MAX_VALUE = 3,

  ContentIndexError.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ContentIndexError.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ContentCategory = {};
  ContentCategory.NONE = 0;
  ContentCategory.HOME_PAGE = ContentCategory.NONE + 1;
  ContentCategory.ARTICLE = ContentCategory.HOME_PAGE + 1;
  ContentCategory.VIDEO = ContentCategory.ARTICLE + 1;
  ContentCategory.AUDIO = ContentCategory.VIDEO + 1;
  ContentCategory.MIN_VALUE = 0,
  ContentCategory.MAX_VALUE = 4,

  ContentCategory.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  ContentCategory.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ContentIconDefinition(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentIconDefinition.prototype.initDefaults_ = function() {
    this.src = null;
    this.sizes = null;
    this.type = null;
  };
  ContentIconDefinition.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentIconDefinition.validate = function(messageValidator, offset) {
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


    // validate ContentIconDefinition.src
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentIconDefinition.sizes
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentIconDefinition.type
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentIconDefinition.encodedSize = codec.kStructHeaderSize + 24;

  ContentIconDefinition.decode = function(decoder) {
    var packed;
    var val = new ContentIconDefinition();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.src = decoder.decodeStruct(codec.String);
    val.sizes = decoder.decodeStruct(codec.NullableString);
    val.type = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  ContentIconDefinition.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentIconDefinition.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.src);
    encoder.encodeStruct(codec.NullableString, val.sizes);
    encoder.encodeStruct(codec.NullableString, val.type);
  };
  function ContentDescription(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentDescription.prototype.initDefaults_ = function() {
    this.id = null;
    this.title = null;
    this.description = null;
    this.category = 0;
    this.icons = null;
    this.launchUrl = null;
  };
  ContentDescription.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentDescription.validate = function(messageValidator, offset) {
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


    // validate ContentDescription.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentDescription.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentDescription.description
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentDescription.category
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, ContentCategory);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentDescription.icons
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(ContentIconDefinition), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentDescription.launchUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentDescription.encodedSize = codec.kStructHeaderSize + 48;

  ContentDescription.decode = function(decoder) {
    var packed;
    var val = new ContentDescription();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id = decoder.decodeStruct(codec.String);
    val.title = decoder.decodeStruct(codec.String);
    val.description = decoder.decodeStruct(codec.String);
    val.category = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.icons = decoder.decodeArrayPointer(new codec.PointerTo(ContentIconDefinition));
    val.launchUrl = decoder.decodeStruct(codec.String);
    return val;
  };

  ContentDescription.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentDescription.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.id);
    encoder.encodeStruct(codec.String, val.title);
    encoder.encodeStruct(codec.String, val.description);
    encoder.encodeStruct(codec.Int32, val.category);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(ContentIconDefinition), val.icons);
    encoder.encodeStruct(codec.String, val.launchUrl);
  };
  function ContentIndexService_GetIconSizes_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentIndexService_GetIconSizes_Params.prototype.initDefaults_ = function() {
    this.category = 0;
  };
  ContentIndexService_GetIconSizes_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentIndexService_GetIconSizes_Params.validate = function(messageValidator, offset) {
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


    // validate ContentIndexService_GetIconSizes_Params.category
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ContentCategory);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentIndexService_GetIconSizes_Params.encodedSize = codec.kStructHeaderSize + 8;

  ContentIndexService_GetIconSizes_Params.decode = function(decoder) {
    var packed;
    var val = new ContentIndexService_GetIconSizes_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.category = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ContentIndexService_GetIconSizes_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentIndexService_GetIconSizes_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.category);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ContentIndexService_GetIconSizes_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentIndexService_GetIconSizes_ResponseParams.prototype.initDefaults_ = function() {
    this.iconSizes = null;
  };
  ContentIndexService_GetIconSizes_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentIndexService_GetIconSizes_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ContentIndexService_GetIconSizes_ResponseParams.iconSizes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(geometry$.Size), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentIndexService_GetIconSizes_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ContentIndexService_GetIconSizes_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ContentIndexService_GetIconSizes_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.iconSizes = decoder.decodeArrayPointer(new codec.PointerTo(geometry$.Size));
    return val;
  };

  ContentIndexService_GetIconSizes_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentIndexService_GetIconSizes_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(geometry$.Size), val.iconSizes);
  };
  function ContentIndexService_Add_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentIndexService_Add_Params.prototype.initDefaults_ = function() {
    this.serviceWorkerRegistrationId = 0;
    this.description = null;
    this.icon = null;
    this.launchUrl = null;
  };
  ContentIndexService_Add_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentIndexService_Add_Params.validate = function(messageValidator, offset) {
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



    // validate ContentIndexService_Add_Params.description
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ContentDescription, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentIndexService_Add_Params.icon
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(bitmap$.Bitmap), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentIndexService_Add_Params.launchUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentIndexService_Add_Params.encodedSize = codec.kStructHeaderSize + 32;

  ContentIndexService_Add_Params.decode = function(decoder) {
    var packed;
    var val = new ContentIndexService_Add_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceWorkerRegistrationId = decoder.decodeStruct(codec.Int64);
    val.description = decoder.decodeStructPointer(ContentDescription);
    val.icon = decoder.decodeArrayPointer(new codec.PointerTo(bitmap$.Bitmap));
    val.launchUrl = decoder.decodeStructPointer(url$.Url);
    return val;
  };

  ContentIndexService_Add_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentIndexService_Add_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerRegistrationId);
    encoder.encodeStructPointer(ContentDescription, val.description);
    encoder.encodeArrayPointer(new codec.PointerTo(bitmap$.Bitmap), val.icon);
    encoder.encodeStructPointer(url$.Url, val.launchUrl);
  };
  function ContentIndexService_Add_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentIndexService_Add_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  ContentIndexService_Add_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentIndexService_Add_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ContentIndexService_Add_ResponseParams.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ContentIndexError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentIndexService_Add_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ContentIndexService_Add_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ContentIndexService_Add_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ContentIndexService_Add_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentIndexService_Add_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ContentIndexService_Delete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentIndexService_Delete_Params.prototype.initDefaults_ = function() {
    this.serviceWorkerRegistrationId = 0;
    this.id = null;
  };
  ContentIndexService_Delete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentIndexService_Delete_Params.validate = function(messageValidator, offset) {
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



    // validate ContentIndexService_Delete_Params.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentIndexService_Delete_Params.encodedSize = codec.kStructHeaderSize + 16;

  ContentIndexService_Delete_Params.decode = function(decoder) {
    var packed;
    var val = new ContentIndexService_Delete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceWorkerRegistrationId = decoder.decodeStruct(codec.Int64);
    val.id = decoder.decodeStruct(codec.String);
    return val;
  };

  ContentIndexService_Delete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentIndexService_Delete_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerRegistrationId);
    encoder.encodeStruct(codec.String, val.id);
  };
  function ContentIndexService_Delete_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentIndexService_Delete_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
  };
  ContentIndexService_Delete_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentIndexService_Delete_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ContentIndexService_Delete_ResponseParams.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ContentIndexError);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentIndexService_Delete_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ContentIndexService_Delete_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ContentIndexService_Delete_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ContentIndexService_Delete_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentIndexService_Delete_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ContentIndexService_GetDescriptions_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentIndexService_GetDescriptions_Params.prototype.initDefaults_ = function() {
    this.serviceWorkerRegistrationId = 0;
  };
  ContentIndexService_GetDescriptions_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentIndexService_GetDescriptions_Params.validate = function(messageValidator, offset) {
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

  ContentIndexService_GetDescriptions_Params.encodedSize = codec.kStructHeaderSize + 8;

  ContentIndexService_GetDescriptions_Params.decode = function(decoder) {
    var packed;
    var val = new ContentIndexService_GetDescriptions_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceWorkerRegistrationId = decoder.decodeStruct(codec.Int64);
    return val;
  };

  ContentIndexService_GetDescriptions_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentIndexService_GetDescriptions_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerRegistrationId);
  };
  function ContentIndexService_GetDescriptions_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentIndexService_GetDescriptions_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
    this.descriptions = null;
  };
  ContentIndexService_GetDescriptions_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentIndexService_GetDescriptions_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ContentIndexService_GetDescriptions_ResponseParams.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ContentIndexError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContentIndexService_GetDescriptions_ResponseParams.descriptions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(ContentDescription), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentIndexService_GetDescriptions_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  ContentIndexService_GetDescriptions_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ContentIndexService_GetDescriptions_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.descriptions = decoder.decodeArrayPointer(new codec.PointerTo(ContentDescription));
    return val;
  };

  ContentIndexService_GetDescriptions_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentIndexService_GetDescriptions_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(ContentDescription), val.descriptions);
  };
  var kContentIndexService_GetIconSizes_Name = 0;
  var kContentIndexService_Add_Name = 1;
  var kContentIndexService_Delete_Name = 2;
  var kContentIndexService_GetDescriptions_Name = 3;

  function ContentIndexServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ContentIndexService,
                                                   handleOrPtrInfo);
  }

  function ContentIndexServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ContentIndexService, associatedInterfacePtrInfo);
  }

  ContentIndexServiceAssociatedPtr.prototype =
      Object.create(ContentIndexServicePtr.prototype);
  ContentIndexServiceAssociatedPtr.prototype.constructor =
      ContentIndexServiceAssociatedPtr;

  function ContentIndexServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  ContentIndexServicePtr.prototype.getIconSizes = function() {
    return ContentIndexServiceProxy.prototype.getIconSizes
        .apply(this.ptr.getProxy(), arguments);
  };

  ContentIndexServiceProxy.prototype.getIconSizes = function(category) {
    var params_ = new ContentIndexService_GetIconSizes_Params();
    params_.category = category;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kContentIndexService_GetIconSizes_Name,
          codec.align(ContentIndexService_GetIconSizes_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ContentIndexService_GetIconSizes_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ContentIndexService_GetIconSizes_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ContentIndexServicePtr.prototype.add = function() {
    return ContentIndexServiceProxy.prototype.add
        .apply(this.ptr.getProxy(), arguments);
  };

  ContentIndexServiceProxy.prototype.add = function(serviceWorkerRegistrationId, description, icon, launchUrl) {
    var params_ = new ContentIndexService_Add_Params();
    params_.serviceWorkerRegistrationId = serviceWorkerRegistrationId;
    params_.description = description;
    params_.icon = icon;
    params_.launchUrl = launchUrl;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kContentIndexService_Add_Name,
          codec.align(ContentIndexService_Add_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ContentIndexService_Add_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ContentIndexService_Add_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ContentIndexServicePtr.prototype.delete = function() {
    return ContentIndexServiceProxy.prototype.delete
        .apply(this.ptr.getProxy(), arguments);
  };

  ContentIndexServiceProxy.prototype.delete = function(serviceWorkerRegistrationId, id) {
    var params_ = new ContentIndexService_Delete_Params();
    params_.serviceWorkerRegistrationId = serviceWorkerRegistrationId;
    params_.id = id;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kContentIndexService_Delete_Name,
          codec.align(ContentIndexService_Delete_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ContentIndexService_Delete_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ContentIndexService_Delete_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ContentIndexServicePtr.prototype.getDescriptions = function() {
    return ContentIndexServiceProxy.prototype.getDescriptions
        .apply(this.ptr.getProxy(), arguments);
  };

  ContentIndexServiceProxy.prototype.getDescriptions = function(serviceWorkerRegistrationId) {
    var params_ = new ContentIndexService_GetDescriptions_Params();
    params_.serviceWorkerRegistrationId = serviceWorkerRegistrationId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kContentIndexService_GetDescriptions_Name,
          codec.align(ContentIndexService_GetDescriptions_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ContentIndexService_GetDescriptions_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ContentIndexService_GetDescriptions_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ContentIndexServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  ContentIndexServiceStub.prototype.getIconSizes = function(category) {
    return this.delegate_ && this.delegate_.getIconSizes && this.delegate_.getIconSizes(category);
  }
  ContentIndexServiceStub.prototype.add = function(serviceWorkerRegistrationId, description, icon, launchUrl) {
    return this.delegate_ && this.delegate_.add && this.delegate_.add(serviceWorkerRegistrationId, description, icon, launchUrl);
  }
  ContentIndexServiceStub.prototype.delete = function(serviceWorkerRegistrationId, id) {
    return this.delegate_ && this.delegate_.delete && this.delegate_.delete(serviceWorkerRegistrationId, id);
  }
  ContentIndexServiceStub.prototype.getDescriptions = function(serviceWorkerRegistrationId) {
    return this.delegate_ && this.delegate_.getDescriptions && this.delegate_.getDescriptions(serviceWorkerRegistrationId);
  }

  ContentIndexServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ContentIndexServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kContentIndexService_GetIconSizes_Name:
      var params = reader.decodeStruct(ContentIndexService_GetIconSizes_Params);
      this.getIconSizes(params.category).then(function(response) {
        var responseParams =
            new ContentIndexService_GetIconSizes_ResponseParams();
        responseParams.iconSizes = response.iconSizes;
        var builder = new codec.MessageV1Builder(
            kContentIndexService_GetIconSizes_Name,
            codec.align(ContentIndexService_GetIconSizes_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ContentIndexService_GetIconSizes_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kContentIndexService_Add_Name:
      var params = reader.decodeStruct(ContentIndexService_Add_Params);
      this.add(params.serviceWorkerRegistrationId, params.description, params.icon, params.launchUrl).then(function(response) {
        var responseParams =
            new ContentIndexService_Add_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kContentIndexService_Add_Name,
            codec.align(ContentIndexService_Add_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ContentIndexService_Add_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kContentIndexService_Delete_Name:
      var params = reader.decodeStruct(ContentIndexService_Delete_Params);
      this.delete(params.serviceWorkerRegistrationId, params.id).then(function(response) {
        var responseParams =
            new ContentIndexService_Delete_ResponseParams();
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kContentIndexService_Delete_Name,
            codec.align(ContentIndexService_Delete_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ContentIndexService_Delete_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kContentIndexService_GetDescriptions_Name:
      var params = reader.decodeStruct(ContentIndexService_GetDescriptions_Params);
      this.getDescriptions(params.serviceWorkerRegistrationId).then(function(response) {
        var responseParams =
            new ContentIndexService_GetDescriptions_ResponseParams();
        responseParams.error = response.error;
        responseParams.descriptions = response.descriptions;
        var builder = new codec.MessageV1Builder(
            kContentIndexService_GetDescriptions_Name,
            codec.align(ContentIndexService_GetDescriptions_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ContentIndexService_GetDescriptions_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateContentIndexServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kContentIndexService_GetIconSizes_Name:
        if (message.expectsResponse())
          paramsClass = ContentIndexService_GetIconSizes_Params;
      break;
      case kContentIndexService_Add_Name:
        if (message.expectsResponse())
          paramsClass = ContentIndexService_Add_Params;
      break;
      case kContentIndexService_Delete_Name:
        if (message.expectsResponse())
          paramsClass = ContentIndexService_Delete_Params;
      break;
      case kContentIndexService_GetDescriptions_Name:
        if (message.expectsResponse())
          paramsClass = ContentIndexService_GetDescriptions_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateContentIndexServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kContentIndexService_GetIconSizes_Name:
        if (message.isResponse())
          paramsClass = ContentIndexService_GetIconSizes_ResponseParams;
        break;
      case kContentIndexService_Add_Name:
        if (message.isResponse())
          paramsClass = ContentIndexService_Add_ResponseParams;
        break;
      case kContentIndexService_Delete_Name:
        if (message.isResponse())
          paramsClass = ContentIndexService_Delete_ResponseParams;
        break;
      case kContentIndexService_GetDescriptions_Name:
        if (message.isResponse())
          paramsClass = ContentIndexService_GetDescriptions_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ContentIndexService = {
    name: 'blink.mojom.ContentIndexService',
    kVersion: 0,
    ptrClass: ContentIndexServicePtr,
    proxyClass: ContentIndexServiceProxy,
    stubClass: ContentIndexServiceStub,
    validateRequest: validateContentIndexServiceRequest,
    validateResponse: validateContentIndexServiceResponse,
  };
  ContentIndexService.MAX_ICON_RESOLUTION = 65536,
  ContentIndexServiceStub.prototype.validator = validateContentIndexServiceRequest;
  ContentIndexServiceProxy.prototype.validator = validateContentIndexServiceResponse;
  exports.ContentIndexError = ContentIndexError;
  exports.ContentCategory = ContentCategory;
  exports.ContentIconDefinition = ContentIconDefinition;
  exports.ContentDescription = ContentDescription;
  exports.ContentIndexService = ContentIndexService;
  exports.ContentIndexServicePtr = ContentIndexServicePtr;
  exports.ContentIndexServiceAssociatedPtr = ContentIndexServiceAssociatedPtr;
})();