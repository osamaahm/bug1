// third_party/blink/public/mojom/reporting/reporting.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/reporting/reporting.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function ReportingServiceProxy_QueueInterventionReport_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReportingServiceProxy_QueueInterventionReport_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.id = null;
    this.message = null;
    this.sourceFile = null;
    this.lineNumber = 0;
    this.columnNumber = 0;
  };
  ReportingServiceProxy_QueueInterventionReport_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ReportingServiceProxy_QueueInterventionReport_Params.validate = function(messageValidator, offset) {
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


    // validate ReportingServiceProxy_QueueInterventionReport_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueInterventionReport_Params.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueInterventionReport_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueInterventionReport_Params.sourceFile
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  ReportingServiceProxy_QueueInterventionReport_Params.encodedSize = codec.kStructHeaderSize + 40;

  ReportingServiceProxy_QueueInterventionReport_Params.decode = function(decoder) {
    var packed;
    var val = new ReportingServiceProxy_QueueInterventionReport_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.id = decoder.decodeStruct(codec.String);
    val.message = decoder.decodeStruct(codec.String);
    val.sourceFile = decoder.decodeStruct(codec.NullableString);
    val.lineNumber = decoder.decodeStruct(codec.Int32);
    val.columnNumber = decoder.decodeStruct(codec.Int32);
    return val;
  };

  ReportingServiceProxy_QueueInterventionReport_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReportingServiceProxy_QueueInterventionReport_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.id);
    encoder.encodeStruct(codec.String, val.message);
    encoder.encodeStruct(codec.NullableString, val.sourceFile);
    encoder.encodeStruct(codec.Int32, val.lineNumber);
    encoder.encodeStruct(codec.Int32, val.columnNumber);
  };
  function ReportingServiceProxy_QueueDeprecationReport_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReportingServiceProxy_QueueDeprecationReport_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.id = null;
    this.anticipatedRemoval = null;
    this.message = null;
    this.sourceFile = null;
    this.lineNumber = 0;
    this.columnNumber = 0;
  };
  ReportingServiceProxy_QueueDeprecationReport_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ReportingServiceProxy_QueueDeprecationReport_Params.validate = function(messageValidator, offset) {
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


    // validate ReportingServiceProxy_QueueDeprecationReport_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueDeprecationReport_Params.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueDeprecationReport_Params.anticipatedRemoval
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.Time, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueDeprecationReport_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueDeprecationReport_Params.sourceFile
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, true)
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  ReportingServiceProxy_QueueDeprecationReport_Params.encodedSize = codec.kStructHeaderSize + 48;

  ReportingServiceProxy_QueueDeprecationReport_Params.decode = function(decoder) {
    var packed;
    var val = new ReportingServiceProxy_QueueDeprecationReport_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.id = decoder.decodeStruct(codec.String);
    val.anticipatedRemoval = decoder.decodeStructPointer(time$.Time);
    val.message = decoder.decodeStruct(codec.String);
    val.sourceFile = decoder.decodeStruct(codec.NullableString);
    val.lineNumber = decoder.decodeStruct(codec.Int32);
    val.columnNumber = decoder.decodeStruct(codec.Int32);
    return val;
  };

  ReportingServiceProxy_QueueDeprecationReport_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReportingServiceProxy_QueueDeprecationReport_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.id);
    encoder.encodeStructPointer(time$.Time, val.anticipatedRemoval);
    encoder.encodeStruct(codec.String, val.message);
    encoder.encodeStruct(codec.NullableString, val.sourceFile);
    encoder.encodeStruct(codec.Int32, val.lineNumber);
    encoder.encodeStruct(codec.Int32, val.columnNumber);
  };
  function ReportingServiceProxy_QueueCspViolationReport_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReportingServiceProxy_QueueCspViolationReport_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.group = null;
    this.documentUrl = null;
    this.referrer = null;
    this.blockedUrl = null;
    this.effectiveDirective = null;
    this.originalPolicy = null;
    this.sourceFile = null;
    this.scriptSample = null;
    this.disposition = null;
    this.statusCode = 0;
    this.lineNumber = 0;
    this.columnNumber = 0;
  };
  ReportingServiceProxy_QueueCspViolationReport_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ReportingServiceProxy_QueueCspViolationReport_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 104}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueCspViolationReport_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueCspViolationReport_Params.group
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueCspViolationReport_Params.documentUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueCspViolationReport_Params.referrer
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueCspViolationReport_Params.blockedUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueCspViolationReport_Params.effectiveDirective
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueCspViolationReport_Params.originalPolicy
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueCspViolationReport_Params.sourceFile
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueCspViolationReport_Params.scriptSample
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 64, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueCspViolationReport_Params.disposition
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 72, false)
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  ReportingServiceProxy_QueueCspViolationReport_Params.encodedSize = codec.kStructHeaderSize + 96;

  ReportingServiceProxy_QueueCspViolationReport_Params.decode = function(decoder) {
    var packed;
    var val = new ReportingServiceProxy_QueueCspViolationReport_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.group = decoder.decodeStruct(codec.String);
    val.documentUrl = decoder.decodeStruct(codec.String);
    val.referrer = decoder.decodeStruct(codec.NullableString);
    val.blockedUrl = decoder.decodeStruct(codec.NullableString);
    val.effectiveDirective = decoder.decodeStruct(codec.String);
    val.originalPolicy = decoder.decodeStruct(codec.String);
    val.sourceFile = decoder.decodeStruct(codec.NullableString);
    val.scriptSample = decoder.decodeStruct(codec.NullableString);
    val.disposition = decoder.decodeStruct(codec.String);
    val.statusCode = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    val.lineNumber = decoder.decodeStruct(codec.Int32);
    val.columnNumber = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ReportingServiceProxy_QueueCspViolationReport_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReportingServiceProxy_QueueCspViolationReport_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.group);
    encoder.encodeStruct(codec.String, val.documentUrl);
    encoder.encodeStruct(codec.NullableString, val.referrer);
    encoder.encodeStruct(codec.NullableString, val.blockedUrl);
    encoder.encodeStruct(codec.String, val.effectiveDirective);
    encoder.encodeStruct(codec.String, val.originalPolicy);
    encoder.encodeStruct(codec.NullableString, val.sourceFile);
    encoder.encodeStruct(codec.NullableString, val.scriptSample);
    encoder.encodeStruct(codec.String, val.disposition);
    encoder.encodeStruct(codec.Uint16, val.statusCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.lineNumber);
    encoder.encodeStruct(codec.Int32, val.columnNumber);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.policyId = null;
    this.disposition = null;
    this.message = null;
    this.sourceFile = null;
    this.lineNumber = 0;
    this.columnNumber = 0;
  };
  ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.validate = function(messageValidator, offset) {
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


    // validate ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.policyId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.disposition
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.sourceFile
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, true)
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.encodedSize = codec.kStructHeaderSize + 48;

  ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.decode = function(decoder) {
    var packed;
    var val = new ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.policyId = decoder.decodeStruct(codec.String);
    val.disposition = decoder.decodeStruct(codec.String);
    val.message = decoder.decodeStruct(codec.NullableString);
    val.sourceFile = decoder.decodeStruct(codec.NullableString);
    val.lineNumber = decoder.decodeStruct(codec.Int32);
    val.columnNumber = decoder.decodeStruct(codec.Int32);
    return val;
  };

  ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.policyId);
    encoder.encodeStruct(codec.String, val.disposition);
    encoder.encodeStruct(codec.NullableString, val.message);
    encoder.encodeStruct(codec.NullableString, val.sourceFile);
    encoder.encodeStruct(codec.Int32, val.lineNumber);
    encoder.encodeStruct(codec.Int32, val.columnNumber);
  };
  var kReportingServiceProxy_QueueInterventionReport_Name = 0;
  var kReportingServiceProxy_QueueDeprecationReport_Name = 1;
  var kReportingServiceProxy_QueueCspViolationReport_Name = 2;
  var kReportingServiceProxy_QueueFeaturePolicyViolationReport_Name = 3;

  function ReportingServiceProxyPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ReportingServiceProxy,
                                                   handleOrPtrInfo);
  }

  function ReportingServiceProxyAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ReportingServiceProxy, associatedInterfacePtrInfo);
  }

  ReportingServiceProxyAssociatedPtr.prototype =
      Object.create(ReportingServiceProxyPtr.prototype);
  ReportingServiceProxyAssociatedPtr.prototype.constructor =
      ReportingServiceProxyAssociatedPtr;

  function ReportingServiceProxyProxy(receiver) {
    this.receiver_ = receiver;
  }
  ReportingServiceProxyPtr.prototype.queueInterventionReport = function() {
    return ReportingServiceProxyProxy.prototype.queueInterventionReport
        .apply(this.ptr.getProxy(), arguments);
  };

  ReportingServiceProxyProxy.prototype.queueInterventionReport = function(url, id, message, sourceFile, lineNumber, columnNumber) {
    var params_ = new ReportingServiceProxy_QueueInterventionReport_Params();
    params_.url = url;
    params_.id = id;
    params_.message = message;
    params_.sourceFile = sourceFile;
    params_.lineNumber = lineNumber;
    params_.columnNumber = columnNumber;
    var builder = new codec.MessageV0Builder(
        kReportingServiceProxy_QueueInterventionReport_Name,
        codec.align(ReportingServiceProxy_QueueInterventionReport_Params.encodedSize));
    builder.encodeStruct(ReportingServiceProxy_QueueInterventionReport_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ReportingServiceProxyPtr.prototype.queueDeprecationReport = function() {
    return ReportingServiceProxyProxy.prototype.queueDeprecationReport
        .apply(this.ptr.getProxy(), arguments);
  };

  ReportingServiceProxyProxy.prototype.queueDeprecationReport = function(url, id, anticipatedRemoval, message, sourceFile, lineNumber, columnNumber) {
    var params_ = new ReportingServiceProxy_QueueDeprecationReport_Params();
    params_.url = url;
    params_.id = id;
    params_.anticipatedRemoval = anticipatedRemoval;
    params_.message = message;
    params_.sourceFile = sourceFile;
    params_.lineNumber = lineNumber;
    params_.columnNumber = columnNumber;
    var builder = new codec.MessageV0Builder(
        kReportingServiceProxy_QueueDeprecationReport_Name,
        codec.align(ReportingServiceProxy_QueueDeprecationReport_Params.encodedSize));
    builder.encodeStruct(ReportingServiceProxy_QueueDeprecationReport_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ReportingServiceProxyPtr.prototype.queueCspViolationReport = function() {
    return ReportingServiceProxyProxy.prototype.queueCspViolationReport
        .apply(this.ptr.getProxy(), arguments);
  };

  ReportingServiceProxyProxy.prototype.queueCspViolationReport = function(url, group, documentUrl, referrer, blockedUrl, effectiveDirective, originalPolicy, sourceFile, scriptSample, disposition, statusCode, lineNumber, columnNumber) {
    var params_ = new ReportingServiceProxy_QueueCspViolationReport_Params();
    params_.url = url;
    params_.group = group;
    params_.documentUrl = documentUrl;
    params_.referrer = referrer;
    params_.blockedUrl = blockedUrl;
    params_.effectiveDirective = effectiveDirective;
    params_.originalPolicy = originalPolicy;
    params_.sourceFile = sourceFile;
    params_.scriptSample = scriptSample;
    params_.disposition = disposition;
    params_.statusCode = statusCode;
    params_.lineNumber = lineNumber;
    params_.columnNumber = columnNumber;
    var builder = new codec.MessageV0Builder(
        kReportingServiceProxy_QueueCspViolationReport_Name,
        codec.align(ReportingServiceProxy_QueueCspViolationReport_Params.encodedSize));
    builder.encodeStruct(ReportingServiceProxy_QueueCspViolationReport_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ReportingServiceProxyPtr.prototype.queueFeaturePolicyViolationReport = function() {
    return ReportingServiceProxyProxy.prototype.queueFeaturePolicyViolationReport
        .apply(this.ptr.getProxy(), arguments);
  };

  ReportingServiceProxyProxy.prototype.queueFeaturePolicyViolationReport = function(url, policyId, disposition, message, sourceFile, lineNumber, columnNumber) {
    var params_ = new ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params();
    params_.url = url;
    params_.policyId = policyId;
    params_.disposition = disposition;
    params_.message = message;
    params_.sourceFile = sourceFile;
    params_.lineNumber = lineNumber;
    params_.columnNumber = columnNumber;
    var builder = new codec.MessageV0Builder(
        kReportingServiceProxy_QueueFeaturePolicyViolationReport_Name,
        codec.align(ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params.encodedSize));
    builder.encodeStruct(ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ReportingServiceProxyStub(delegate) {
    this.delegate_ = delegate;
  }
  ReportingServiceProxyStub.prototype.queueInterventionReport = function(url, id, message, sourceFile, lineNumber, columnNumber) {
    return this.delegate_ && this.delegate_.queueInterventionReport && this.delegate_.queueInterventionReport(url, id, message, sourceFile, lineNumber, columnNumber);
  }
  ReportingServiceProxyStub.prototype.queueDeprecationReport = function(url, id, anticipatedRemoval, message, sourceFile, lineNumber, columnNumber) {
    return this.delegate_ && this.delegate_.queueDeprecationReport && this.delegate_.queueDeprecationReport(url, id, anticipatedRemoval, message, sourceFile, lineNumber, columnNumber);
  }
  ReportingServiceProxyStub.prototype.queueCspViolationReport = function(url, group, documentUrl, referrer, blockedUrl, effectiveDirective, originalPolicy, sourceFile, scriptSample, disposition, statusCode, lineNumber, columnNumber) {
    return this.delegate_ && this.delegate_.queueCspViolationReport && this.delegate_.queueCspViolationReport(url, group, documentUrl, referrer, blockedUrl, effectiveDirective, originalPolicy, sourceFile, scriptSample, disposition, statusCode, lineNumber, columnNumber);
  }
  ReportingServiceProxyStub.prototype.queueFeaturePolicyViolationReport = function(url, policyId, disposition, message, sourceFile, lineNumber, columnNumber) {
    return this.delegate_ && this.delegate_.queueFeaturePolicyViolationReport && this.delegate_.queueFeaturePolicyViolationReport(url, policyId, disposition, message, sourceFile, lineNumber, columnNumber);
  }

  ReportingServiceProxyStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kReportingServiceProxy_QueueInterventionReport_Name:
      var params = reader.decodeStruct(ReportingServiceProxy_QueueInterventionReport_Params);
      this.queueInterventionReport(params.url, params.id, params.message, params.sourceFile, params.lineNumber, params.columnNumber);
      return true;
    case kReportingServiceProxy_QueueDeprecationReport_Name:
      var params = reader.decodeStruct(ReportingServiceProxy_QueueDeprecationReport_Params);
      this.queueDeprecationReport(params.url, params.id, params.anticipatedRemoval, params.message, params.sourceFile, params.lineNumber, params.columnNumber);
      return true;
    case kReportingServiceProxy_QueueCspViolationReport_Name:
      var params = reader.decodeStruct(ReportingServiceProxy_QueueCspViolationReport_Params);
      this.queueCspViolationReport(params.url, params.group, params.documentUrl, params.referrer, params.blockedUrl, params.effectiveDirective, params.originalPolicy, params.sourceFile, params.scriptSample, params.disposition, params.statusCode, params.lineNumber, params.columnNumber);
      return true;
    case kReportingServiceProxy_QueueFeaturePolicyViolationReport_Name:
      var params = reader.decodeStruct(ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params);
      this.queueFeaturePolicyViolationReport(params.url, params.policyId, params.disposition, params.message, params.sourceFile, params.lineNumber, params.columnNumber);
      return true;
    default:
      return false;
    }
  };

  ReportingServiceProxyStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateReportingServiceProxyRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kReportingServiceProxy_QueueInterventionReport_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ReportingServiceProxy_QueueInterventionReport_Params;
      break;
      case kReportingServiceProxy_QueueDeprecationReport_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ReportingServiceProxy_QueueDeprecationReport_Params;
      break;
      case kReportingServiceProxy_QueueCspViolationReport_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ReportingServiceProxy_QueueCspViolationReport_Params;
      break;
      case kReportingServiceProxy_QueueFeaturePolicyViolationReport_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ReportingServiceProxy_QueueFeaturePolicyViolationReport_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateReportingServiceProxyResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ReportingServiceProxy = {
    name: 'blink.mojom.ReportingServiceProxy',
    kVersion: 0,
    ptrClass: ReportingServiceProxyPtr,
    proxyClass: ReportingServiceProxyProxy,
    stubClass: ReportingServiceProxyStub,
    validateRequest: validateReportingServiceProxyRequest,
    validateResponse: null,
  };
  ReportingServiceProxyStub.prototype.validator = validateReportingServiceProxyRequest;
  ReportingServiceProxyProxy.prototype.validator = null;
  exports.ReportingServiceProxy = ReportingServiceProxy;
  exports.ReportingServiceProxyPtr = ReportingServiceProxyPtr;
  exports.ReportingServiceProxyAssociatedPtr = ReportingServiceProxyAssociatedPtr;
})();