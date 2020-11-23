// ui/display/mojom/display_layout.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/display/mojom/display_layout.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('display.mojom');


  var Position = {};
  Position.TOP = 0;
  Position.RIGHT = Position.TOP + 1;
  Position.BOTTOM = Position.RIGHT + 1;
  Position.LEFT = Position.BOTTOM + 1;
  Position.MIN_VALUE = 0,
  Position.MAX_VALUE = 3,

  Position.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  Position.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var OffsetReference = {};
  OffsetReference.TOP_LEFT = 0;
  OffsetReference.BOTTOM_RIGHT = OffsetReference.TOP_LEFT + 1;
  OffsetReference.MIN_VALUE = 0,
  OffsetReference.MAX_VALUE = 1,

  OffsetReference.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  OffsetReference.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function DisplayPlacement(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DisplayPlacement.prototype.initDefaults_ = function() {
    this.displayId = 0;
    this.parentDisplayId = 0;
    this.position = 0;
    this.offset = 0;
    this.offsetReference = 0;
  };
  DisplayPlacement.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DisplayPlacement.validate = function(messageValidator, offset) {
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




    // validate DisplayPlacement.position
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, Position);
    if (err !== validator.validationError.NONE)
        return err;



    // validate DisplayPlacement.offsetReference
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, OffsetReference);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DisplayPlacement.encodedSize = codec.kStructHeaderSize + 32;

  DisplayPlacement.decode = function(decoder) {
    var packed;
    var val = new DisplayPlacement();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.displayId = decoder.decodeStruct(codec.Int64);
    val.parentDisplayId = decoder.decodeStruct(codec.Int64);
    val.position = decoder.decodeStruct(codec.Int32);
    val.offset = decoder.decodeStruct(codec.Int32);
    val.offsetReference = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DisplayPlacement.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DisplayPlacement.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.displayId);
    encoder.encodeStruct(codec.Int64, val.parentDisplayId);
    encoder.encodeStruct(codec.Int32, val.position);
    encoder.encodeStruct(codec.Int32, val.offset);
    encoder.encodeStruct(codec.Int32, val.offsetReference);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DisplayLayout(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DisplayLayout.prototype.initDefaults_ = function() {
    this.defaultUnified = false;
    this.primaryDisplayId = 0;
    this.placementList = null;
  };
  DisplayLayout.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DisplayLayout.validate = function(messageValidator, offset) {
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




    // validate DisplayLayout.placementList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(DisplayPlacement), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DisplayLayout.encodedSize = codec.kStructHeaderSize + 24;

  DisplayLayout.decode = function(decoder) {
    var packed;
    var val = new DisplayLayout();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.defaultUnified = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.primaryDisplayId = decoder.decodeStruct(codec.Int64);
    val.placementList = decoder.decodeArrayPointer(new codec.PointerTo(DisplayPlacement));
    return val;
  };

  DisplayLayout.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DisplayLayout.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.defaultUnified & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int64, val.primaryDisplayId);
    encoder.encodeArrayPointer(new codec.PointerTo(DisplayPlacement), val.placementList);
  };
  exports.Position = Position;
  exports.OffsetReference = OffsetReference;
  exports.DisplayPlacement = DisplayPlacement;
  exports.DisplayLayout = DisplayLayout;
})();