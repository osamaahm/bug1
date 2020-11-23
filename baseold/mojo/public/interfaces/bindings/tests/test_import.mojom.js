// mojo/public/interfaces/bindings/tests/test_import.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'mojo/public/interfaces/bindings/tests/test_import.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojo.test.testImport');
  var test_export$ =
      mojo.internal.exposeNamespace('mojo.test.testExport');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/interfaces/bindings/tests/test_export.mojom', 'test_export.mojom.js');
  }



  function ImportingStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ImportingStruct.prototype.initDefaults_ = function() {
    this.strings = null;
  };
  ImportingStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ImportingStruct.validate = function(messageValidator, offset) {
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


    // validate ImportingStruct.strings
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, test_export$.StringPair, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ImportingStruct.encodedSize = codec.kStructHeaderSize + 8;

  ImportingStruct.decode = function(decoder) {
    var packed;
    var val = new ImportingStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.strings = decoder.decodeStructPointer(test_export$.StringPair);
    return val;
  };

  ImportingStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ImportingStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(test_export$.StringPair, val.strings);
  };
  exports.ImportingStruct = ImportingStruct;
})();