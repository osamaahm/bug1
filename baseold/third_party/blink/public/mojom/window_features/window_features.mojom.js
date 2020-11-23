// third_party/blink/public/mojom/window_features/window_features.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/window_features/window_features.mojom';
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



  function WindowFeatures(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WindowFeatures.prototype.initDefaults_ = function() {
    this.x = 0;
    this.hasX = false;
    this.hasY = false;
    this.hasWidth = false;
    this.hasHeight = false;
    this.menuBarVisible = true;
    this.statusBarVisible = true;
    this.toolBarVisible = true;
    this.scrollbarsVisible = true;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  };
  WindowFeatures.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WindowFeatures.validate = function(messageValidator, offset) {
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













    return validator.validationError.NONE;
  };

  WindowFeatures.encodedSize = codec.kStructHeaderSize + 24;

  WindowFeatures.decode = function(decoder) {
    var packed;
    var val = new WindowFeatures();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.x = decoder.decodeStruct(codec.Float);
    packed = decoder.readUint8();
    val.hasX = (packed >> 0) & 1 ? true : false;
    val.hasY = (packed >> 1) & 1 ? true : false;
    val.hasWidth = (packed >> 2) & 1 ? true : false;
    val.hasHeight = (packed >> 3) & 1 ? true : false;
    val.menuBarVisible = (packed >> 4) & 1 ? true : false;
    val.statusBarVisible = (packed >> 5) & 1 ? true : false;
    val.toolBarVisible = (packed >> 6) & 1 ? true : false;
    val.scrollbarsVisible = (packed >> 7) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.y = decoder.decodeStruct(codec.Float);
    val.width = decoder.decodeStruct(codec.Float);
    val.height = decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WindowFeatures.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WindowFeatures.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.x);
    packed = 0;
    packed |= (val.hasX & 1) << 0
    packed |= (val.hasY & 1) << 1
    packed |= (val.hasWidth & 1) << 2
    packed |= (val.hasHeight & 1) << 3
    packed |= (val.menuBarVisible & 1) << 4
    packed |= (val.statusBarVisible & 1) << 5
    packed |= (val.toolBarVisible & 1) << 6
    packed |= (val.scrollbarsVisible & 1) << 7
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Float, val.y);
    encoder.encodeStruct(codec.Float, val.width);
    encoder.encodeStruct(codec.Float, val.height);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.WindowFeatures = WindowFeatures;
})();