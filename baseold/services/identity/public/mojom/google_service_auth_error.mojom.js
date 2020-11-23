// services/identity/public/mojom/google_service_auth_error.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/identity/public/mojom/google_service_auth_error.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('identity.mojom');
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }



  function GoogleServiceAuthError(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GoogleServiceAuthError.prototype.initDefaults_ = function() {
    this.state = 0;
    this.networkError = 0;
    this.errorMessage = null;
  };
  GoogleServiceAuthError.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GoogleServiceAuthError.validate = function(messageValidator, offset) {
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




    // validate GoogleServiceAuthError.errorMessage
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GoogleServiceAuthError.encodedSize = codec.kStructHeaderSize + 16;

  GoogleServiceAuthError.decode = function(decoder) {
    var packed;
    var val = new GoogleServiceAuthError();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStruct(codec.Int32);
    val.networkError = decoder.decodeStruct(codec.Int32);
    val.errorMessage = decoder.decodeStruct(codec.String);
    return val;
  };

  GoogleServiceAuthError.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GoogleServiceAuthError.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.encodeStruct(codec.Int32, val.networkError);
    encoder.encodeStruct(codec.String, val.errorMessage);
  };
  exports.GoogleServiceAuthError = GoogleServiceAuthError;
})();