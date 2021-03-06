// ui/gfx/mojom/color_space.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojom/color_space.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gfx.mojom');


  var ColorSpacePrimaryID = {};
  ColorSpacePrimaryID.INVALID = 0;
  ColorSpacePrimaryID.BT709 = ColorSpacePrimaryID.INVALID + 1;
  ColorSpacePrimaryID.BT470M = ColorSpacePrimaryID.BT709 + 1;
  ColorSpacePrimaryID.BT470BG = ColorSpacePrimaryID.BT470M + 1;
  ColorSpacePrimaryID.SMPTE170M = ColorSpacePrimaryID.BT470BG + 1;
  ColorSpacePrimaryID.SMPTE240M = ColorSpacePrimaryID.SMPTE170M + 1;
  ColorSpacePrimaryID.FILM = ColorSpacePrimaryID.SMPTE240M + 1;
  ColorSpacePrimaryID.BT2020 = ColorSpacePrimaryID.FILM + 1;
  ColorSpacePrimaryID.SMPTEST428_1 = ColorSpacePrimaryID.BT2020 + 1;
  ColorSpacePrimaryID.SMPTEST431_2 = ColorSpacePrimaryID.SMPTEST428_1 + 1;
  ColorSpacePrimaryID.SMPTEST432_1 = ColorSpacePrimaryID.SMPTEST431_2 + 1;
  ColorSpacePrimaryID.XYZ_D50 = ColorSpacePrimaryID.SMPTEST432_1 + 1;
  ColorSpacePrimaryID.ADOBE_RGB = ColorSpacePrimaryID.XYZ_D50 + 1;
  ColorSpacePrimaryID.APPLE_GENERIC_RGB = ColorSpacePrimaryID.ADOBE_RGB + 1;
  ColorSpacePrimaryID.WIDE_GAMUT_COLOR_SPIN = ColorSpacePrimaryID.APPLE_GENERIC_RGB + 1;
  ColorSpacePrimaryID.CUSTOM = ColorSpacePrimaryID.WIDE_GAMUT_COLOR_SPIN + 1;
  ColorSpacePrimaryID.MIN_VALUE = 0,
  ColorSpacePrimaryID.MAX_VALUE = 15,

  ColorSpacePrimaryID.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  ColorSpacePrimaryID.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ColorSpaceTransferID = {};
  ColorSpaceTransferID.INVALID = 0;
  ColorSpaceTransferID.BT709 = ColorSpaceTransferID.INVALID + 1;
  ColorSpaceTransferID.BT709_APPLE = ColorSpaceTransferID.BT709 + 1;
  ColorSpaceTransferID.GAMMA18 = ColorSpaceTransferID.BT709_APPLE + 1;
  ColorSpaceTransferID.GAMMA22 = ColorSpaceTransferID.GAMMA18 + 1;
  ColorSpaceTransferID.GAMMA24 = ColorSpaceTransferID.GAMMA22 + 1;
  ColorSpaceTransferID.GAMMA28 = ColorSpaceTransferID.GAMMA24 + 1;
  ColorSpaceTransferID.SMPTE170M = ColorSpaceTransferID.GAMMA28 + 1;
  ColorSpaceTransferID.SMPTE240M = ColorSpaceTransferID.SMPTE170M + 1;
  ColorSpaceTransferID.LINEAR = ColorSpaceTransferID.SMPTE240M + 1;
  ColorSpaceTransferID.LOG = ColorSpaceTransferID.LINEAR + 1;
  ColorSpaceTransferID.LOG_SQRT = ColorSpaceTransferID.LOG + 1;
  ColorSpaceTransferID.IEC61966_2_4 = ColorSpaceTransferID.LOG_SQRT + 1;
  ColorSpaceTransferID.BT1361_ECG = ColorSpaceTransferID.IEC61966_2_4 + 1;
  ColorSpaceTransferID.IEC61966_2_1 = ColorSpaceTransferID.BT1361_ECG + 1;
  ColorSpaceTransferID.BT2020_10 = ColorSpaceTransferID.IEC61966_2_1 + 1;
  ColorSpaceTransferID.BT2020_12 = ColorSpaceTransferID.BT2020_10 + 1;
  ColorSpaceTransferID.SMPTEST2084 = ColorSpaceTransferID.BT2020_12 + 1;
  ColorSpaceTransferID.SMPTEST428_1 = ColorSpaceTransferID.SMPTEST2084 + 1;
  ColorSpaceTransferID.ARIB_STD_B67 = ColorSpaceTransferID.SMPTEST428_1 + 1;
  ColorSpaceTransferID.SMPTEST2084_NON_HDR = ColorSpaceTransferID.ARIB_STD_B67 + 1;
  ColorSpaceTransferID.IEC61966_2_1_HDR = ColorSpaceTransferID.SMPTEST2084_NON_HDR + 1;
  ColorSpaceTransferID.LINEAR_HDR = ColorSpaceTransferID.IEC61966_2_1_HDR + 1;
  ColorSpaceTransferID.CUSTOM = ColorSpaceTransferID.LINEAR_HDR + 1;
  ColorSpaceTransferID.MIN_VALUE = 0,
  ColorSpaceTransferID.MAX_VALUE = 23,

  ColorSpaceTransferID.isKnownEnumValue = function(value) {
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
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      return true;
    }
    return false;
  };

  ColorSpaceTransferID.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ColorSpaceMatrixID = {};
  ColorSpaceMatrixID.INVALID = 0;
  ColorSpaceMatrixID.RGB = ColorSpaceMatrixID.INVALID + 1;
  ColorSpaceMatrixID.BT709 = ColorSpaceMatrixID.RGB + 1;
  ColorSpaceMatrixID.FCC = ColorSpaceMatrixID.BT709 + 1;
  ColorSpaceMatrixID.BT470BG = ColorSpaceMatrixID.FCC + 1;
  ColorSpaceMatrixID.SMPTE170M = ColorSpaceMatrixID.BT470BG + 1;
  ColorSpaceMatrixID.SMPTE240M = ColorSpaceMatrixID.SMPTE170M + 1;
  ColorSpaceMatrixID.YCOCG = ColorSpaceMatrixID.SMPTE240M + 1;
  ColorSpaceMatrixID.BT2020_NCL = ColorSpaceMatrixID.YCOCG + 1;
  ColorSpaceMatrixID.BT2020_CL = ColorSpaceMatrixID.BT2020_NCL + 1;
  ColorSpaceMatrixID.YDZDX = ColorSpaceMatrixID.BT2020_CL + 1;
  ColorSpaceMatrixID.GBR = ColorSpaceMatrixID.YDZDX + 1;
  ColorSpaceMatrixID.MIN_VALUE = 0,
  ColorSpaceMatrixID.MAX_VALUE = 11,

  ColorSpaceMatrixID.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  ColorSpaceMatrixID.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ColorSpaceRangeID = {};
  ColorSpaceRangeID.INVALID = 0;
  ColorSpaceRangeID.LIMITED = ColorSpaceRangeID.INVALID + 1;
  ColorSpaceRangeID.FULL = ColorSpaceRangeID.LIMITED + 1;
  ColorSpaceRangeID.DERIVED = ColorSpaceRangeID.FULL + 1;
  ColorSpaceRangeID.MIN_VALUE = 0,
  ColorSpaceRangeID.MAX_VALUE = 3,

  ColorSpaceRangeID.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ColorSpaceRangeID.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ColorSpace(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ColorSpace.prototype.initDefaults_ = function() {
    this.primaries = 0;
    this.transfer = 0;
    this.matrix = 0;
    this.range = 0;
    this.customPrimaryMatrix = null;
    this.customTransferParams = null;
  };
  ColorSpace.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ColorSpace.validate = function(messageValidator, offset) {
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


    // validate ColorSpace.primaries
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ColorSpacePrimaryID);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ColorSpace.transfer
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, ColorSpaceTransferID);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ColorSpace.matrix
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, ColorSpaceMatrixID);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ColorSpace.range
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, ColorSpaceRangeID);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ColorSpace.customPrimaryMatrix
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, codec.Float, false, [9], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ColorSpace.customTransferParams
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, codec.Float, false, [7], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ColorSpace.encodedSize = codec.kStructHeaderSize + 32;

  ColorSpace.decode = function(decoder) {
    var packed;
    var val = new ColorSpace();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.primaries = decoder.decodeStruct(codec.Int32);
    val.transfer = decoder.decodeStruct(codec.Int32);
    val.matrix = decoder.decodeStruct(codec.Int32);
    val.range = decoder.decodeStruct(codec.Int32);
    val.customPrimaryMatrix = decoder.decodeArrayPointer(codec.Float);
    val.customTransferParams = decoder.decodeArrayPointer(codec.Float);
    return val;
  };

  ColorSpace.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ColorSpace.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.primaries);
    encoder.encodeStruct(codec.Int32, val.transfer);
    encoder.encodeStruct(codec.Int32, val.matrix);
    encoder.encodeStruct(codec.Int32, val.range);
    encoder.encodeArrayPointer(codec.Float, val.customPrimaryMatrix);
    encoder.encodeArrayPointer(codec.Float, val.customTransferParams);
  };
  exports.ColorSpacePrimaryID = ColorSpacePrimaryID;
  exports.ColorSpaceTransferID = ColorSpaceTransferID;
  exports.ColorSpaceMatrixID = ColorSpaceMatrixID;
  exports.ColorSpaceRangeID = ColorSpaceRangeID;
  exports.ColorSpace = ColorSpace;
})();