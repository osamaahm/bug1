// services/network/public/mojom/content_security_policy.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/content_security_policy.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');



  function CSPSource(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CSPSource.prototype.initDefaults_ = function() {
    this.scheme = null;
    this.host = null;
    this.port = -1;
    this.isHostWildcard = false;
    this.isPortWildcard = false;
    this.allowSelf = false;
    this.path = null;
  };
  CSPSource.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CSPSource.validate = function(messageValidator, offset) {
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


    // validate CSPSource.scheme
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CSPSource.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate CSPSource.path
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  CSPSource.encodedSize = codec.kStructHeaderSize + 32;

  CSPSource.decode = function(decoder) {
    var packed;
    var val = new CSPSource();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scheme = decoder.decodeStruct(codec.String);
    val.host = decoder.decodeStruct(codec.String);
    val.port = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.isHostWildcard = (packed >> 0) & 1 ? true : false;
    val.isPortWildcard = (packed >> 1) & 1 ? true : false;
    val.allowSelf = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.path = decoder.decodeStruct(codec.String);
    return val;
  };

  CSPSource.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CSPSource.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.scheme);
    encoder.encodeStruct(codec.String, val.host);
    encoder.encodeStruct(codec.Int32, val.port);
    packed = 0;
    packed |= (val.isHostWildcard & 1) << 0
    packed |= (val.isPortWildcard & 1) << 1
    packed |= (val.allowSelf & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.path);
  };
  function CSPSourceList(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CSPSourceList.prototype.initDefaults_ = function() {
    this.sources = null;
  };
  CSPSourceList.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CSPSourceList.validate = function(messageValidator, offset) {
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


    // validate CSPSourceList.sources
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(CSPSource), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CSPSourceList.encodedSize = codec.kStructHeaderSize + 8;

  CSPSourceList.decode = function(decoder) {
    var packed;
    var val = new CSPSourceList();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sources = decoder.decodeArrayPointer(new codec.PointerTo(CSPSource));
    return val;
  };

  CSPSourceList.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CSPSourceList.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(CSPSource), val.sources);
  };
  function ContentSecurityPolicy(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContentSecurityPolicy.prototype.initDefaults_ = function() {
    this.frameAncestors = null;
  };
  ContentSecurityPolicy.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContentSecurityPolicy.validate = function(messageValidator, offset) {
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


    // validate ContentSecurityPolicy.frameAncestors
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CSPSourceList, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContentSecurityPolicy.encodedSize = codec.kStructHeaderSize + 8;

  ContentSecurityPolicy.decode = function(decoder) {
    var packed;
    var val = new ContentSecurityPolicy();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameAncestors = decoder.decodeStructPointer(CSPSourceList);
    return val;
  };

  ContentSecurityPolicy.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContentSecurityPolicy.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CSPSourceList, val.frameAncestors);
  };
  exports.CSPSource = CSPSource;
  exports.CSPSourceList = CSPSourceList;
  exports.ContentSecurityPolicy = ContentSecurityPolicy;
})();