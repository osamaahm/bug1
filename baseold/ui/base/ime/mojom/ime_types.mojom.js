// ui/base/ime/mojom/ime_types.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/base/ime/mojom/ime_types.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ui.mojom');
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../mojo/public/mojom/base/string16.mojom.js');
  }


  var TextInputType = {};
  TextInputType.NONE = 0;
  TextInputType.TEXT = TextInputType.NONE + 1;
  TextInputType.PASSWORD = TextInputType.TEXT + 1;
  TextInputType.SEARCH = TextInputType.PASSWORD + 1;
  TextInputType.EMAIL = TextInputType.SEARCH + 1;
  TextInputType.NUMBER = TextInputType.EMAIL + 1;
  TextInputType.TELEPHONE = TextInputType.NUMBER + 1;
  TextInputType.URL = TextInputType.TELEPHONE + 1;
  TextInputType.DATE = TextInputType.URL + 1;
  TextInputType.DATE_TIME = TextInputType.DATE + 1;
  TextInputType.DATE_TIME_LOCAL = TextInputType.DATE_TIME + 1;
  TextInputType.MONTH = TextInputType.DATE_TIME_LOCAL + 1;
  TextInputType.TIME = TextInputType.MONTH + 1;
  TextInputType.WEEK = TextInputType.TIME + 1;
  TextInputType.TEXT_AREA = TextInputType.WEEK + 1;
  TextInputType.CONTENT_EDITABLE = TextInputType.TEXT_AREA + 1;
  TextInputType.DATE_TIME_FIELD = TextInputType.CONTENT_EDITABLE + 1;
  TextInputType.MAX = TextInputType.DATE_TIME_FIELD;
  TextInputType.MIN_VALUE = 0,
  TextInputType.MAX_VALUE = 16,

  TextInputType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
      return true;
    }
    return false;
  };

  TextInputType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ImeTextSpanType = {};
  ImeTextSpanType.kComposition = 0;
  ImeTextSpanType.kSuggestion = ImeTextSpanType.kComposition + 1;
  ImeTextSpanType.kMisspellingSuggestion = ImeTextSpanType.kSuggestion + 1;
  ImeTextSpanType.MIN_VALUE = 0,
  ImeTextSpanType.MAX_VALUE = 2,

  ImeTextSpanType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ImeTextSpanType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ImeTextSpanThickness = {};
  ImeTextSpanThickness.kNone = 0;
  ImeTextSpanThickness.kThin = ImeTextSpanThickness.kNone + 1;
  ImeTextSpanThickness.kThick = ImeTextSpanThickness.kThin + 1;
  ImeTextSpanThickness.MIN_VALUE = 0,
  ImeTextSpanThickness.MAX_VALUE = 2,

  ImeTextSpanThickness.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ImeTextSpanThickness.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ImeTextSpan(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ImeTextSpan.prototype.initDefaults_ = function() {
    this.type = 0;
    this.startOffset = 0;
    this.endOffset = 0;
    this.underlineColor = 0;
    this.thickness = 0;
    this.backgroundColor = 0;
    this.suggestionHighlightColor = 0;
    this.removeOnFinishComposing = false;
    this.suggestions = null;
  };
  ImeTextSpan.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ImeTextSpan.validate = function(messageValidator, offset) {
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


    // validate ImeTextSpan.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ImeTextSpanType);
    if (err !== validator.validationError.NONE)
        return err;





    // validate ImeTextSpan.thickness
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, ImeTextSpanThickness);
    if (err !== validator.validationError.NONE)
        return err;





    // validate ImeTextSpan.suggestions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ImeTextSpan.encodedSize = codec.kStructHeaderSize + 40;

  ImeTextSpan.decode = function(decoder) {
    var packed;
    var val = new ImeTextSpan();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    val.startOffset = decoder.decodeStruct(codec.Uint32);
    val.endOffset = decoder.decodeStruct(codec.Uint32);
    val.underlineColor = decoder.decodeStruct(codec.Uint32);
    val.thickness = decoder.decodeStruct(codec.Int32);
    val.backgroundColor = decoder.decodeStruct(codec.Uint32);
    val.suggestionHighlightColor = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.removeOnFinishComposing = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.suggestions = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  ImeTextSpan.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ImeTextSpan.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Uint32, val.startOffset);
    encoder.encodeStruct(codec.Uint32, val.endOffset);
    encoder.encodeStruct(codec.Uint32, val.underlineColor);
    encoder.encodeStruct(codec.Int32, val.thickness);
    encoder.encodeStruct(codec.Uint32, val.backgroundColor);
    encoder.encodeStruct(codec.Uint32, val.suggestionHighlightColor);
    packed = 0;
    packed |= (val.removeOnFinishComposing & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.String, val.suggestions);
  };
  exports.TextInputType = TextInputType;
  exports.ImeTextSpanType = ImeTextSpanType;
  exports.ImeTextSpanThickness = ImeTextSpanThickness;
  exports.ImeTextSpan = ImeTextSpan;
})();