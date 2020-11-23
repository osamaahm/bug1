// content/public/test/test_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'content/public/test/test_service.mojom';
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



  function TestService_DoSomething_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestService_DoSomething_Params.prototype.initDefaults_ = function() {
  };
  TestService_DoSomething_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestService_DoSomething_Params.validate = function(messageValidator, offset) {
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

  TestService_DoSomething_Params.encodedSize = codec.kStructHeaderSize + 0;

  TestService_DoSomething_Params.decode = function(decoder) {
    var packed;
    var val = new TestService_DoSomething_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TestService_DoSomething_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestService_DoSomething_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function TestService_DoSomething_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestService_DoSomething_ResponseParams.prototype.initDefaults_ = function() {
  };
  TestService_DoSomething_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestService_DoSomething_ResponseParams.validate = function(messageValidator, offset) {
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

  TestService_DoSomething_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  TestService_DoSomething_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TestService_DoSomething_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TestService_DoSomething_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestService_DoSomething_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function TestService_DoTerminateProcess_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestService_DoTerminateProcess_Params.prototype.initDefaults_ = function() {
  };
  TestService_DoTerminateProcess_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestService_DoTerminateProcess_Params.validate = function(messageValidator, offset) {
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

  TestService_DoTerminateProcess_Params.encodedSize = codec.kStructHeaderSize + 0;

  TestService_DoTerminateProcess_Params.decode = function(decoder) {
    var packed;
    var val = new TestService_DoTerminateProcess_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TestService_DoTerminateProcess_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestService_DoTerminateProcess_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function TestService_DoTerminateProcess_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestService_DoTerminateProcess_ResponseParams.prototype.initDefaults_ = function() {
  };
  TestService_DoTerminateProcess_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestService_DoTerminateProcess_ResponseParams.validate = function(messageValidator, offset) {
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

  TestService_DoTerminateProcess_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  TestService_DoTerminateProcess_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TestService_DoTerminateProcess_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TestService_DoTerminateProcess_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestService_DoTerminateProcess_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function TestService_DoCrashImmediately_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestService_DoCrashImmediately_Params.prototype.initDefaults_ = function() {
  };
  TestService_DoCrashImmediately_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestService_DoCrashImmediately_Params.validate = function(messageValidator, offset) {
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

  TestService_DoCrashImmediately_Params.encodedSize = codec.kStructHeaderSize + 0;

  TestService_DoCrashImmediately_Params.decode = function(decoder) {
    var packed;
    var val = new TestService_DoCrashImmediately_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TestService_DoCrashImmediately_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestService_DoCrashImmediately_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function TestService_DoCrashImmediately_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestService_DoCrashImmediately_ResponseParams.prototype.initDefaults_ = function() {
  };
  TestService_DoCrashImmediately_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestService_DoCrashImmediately_ResponseParams.validate = function(messageValidator, offset) {
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

  TestService_DoCrashImmediately_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  TestService_DoCrashImmediately_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TestService_DoCrashImmediately_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TestService_DoCrashImmediately_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestService_DoCrashImmediately_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function TestService_CreateFolder_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestService_CreateFolder_Params.prototype.initDefaults_ = function() {
  };
  TestService_CreateFolder_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestService_CreateFolder_Params.validate = function(messageValidator, offset) {
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

  TestService_CreateFolder_Params.encodedSize = codec.kStructHeaderSize + 0;

  TestService_CreateFolder_Params.decode = function(decoder) {
    var packed;
    var val = new TestService_CreateFolder_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TestService_CreateFolder_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestService_CreateFolder_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function TestService_CreateFolder_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestService_CreateFolder_ResponseParams.prototype.initDefaults_ = function() {
    this.succeeded = false;
  };
  TestService_CreateFolder_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestService_CreateFolder_ResponseParams.validate = function(messageValidator, offset) {
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

  TestService_CreateFolder_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TestService_CreateFolder_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TestService_CreateFolder_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.succeeded = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TestService_CreateFolder_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestService_CreateFolder_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.succeeded & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TestService_GetRequestorName_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestService_GetRequestorName_Params.prototype.initDefaults_ = function() {
  };
  TestService_GetRequestorName_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestService_GetRequestorName_Params.validate = function(messageValidator, offset) {
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

  TestService_GetRequestorName_Params.encodedSize = codec.kStructHeaderSize + 0;

  TestService_GetRequestorName_Params.decode = function(decoder) {
    var packed;
    var val = new TestService_GetRequestorName_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TestService_GetRequestorName_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestService_GetRequestorName_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function TestService_GetRequestorName_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestService_GetRequestorName_ResponseParams.prototype.initDefaults_ = function() {
    this.name = null;
  };
  TestService_GetRequestorName_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestService_GetRequestorName_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate TestService_GetRequestorName_ResponseParams.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TestService_GetRequestorName_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TestService_GetRequestorName_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TestService_GetRequestorName_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeStruct(codec.String);
    return val;
  };

  TestService_GetRequestorName_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestService_GetRequestorName_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
  };
  function TestService_CreateSharedBuffer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestService_CreateSharedBuffer_Params.prototype.initDefaults_ = function() {
    this.message = null;
  };
  TestService_CreateSharedBuffer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestService_CreateSharedBuffer_Params.validate = function(messageValidator, offset) {
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


    // validate TestService_CreateSharedBuffer_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TestService_CreateSharedBuffer_Params.encodedSize = codec.kStructHeaderSize + 8;

  TestService_CreateSharedBuffer_Params.decode = function(decoder) {
    var packed;
    var val = new TestService_CreateSharedBuffer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message = decoder.decodeStruct(codec.String);
    return val;
  };

  TestService_CreateSharedBuffer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestService_CreateSharedBuffer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.message);
  };
  function TestService_CreateSharedBuffer_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestService_CreateSharedBuffer_ResponseParams.prototype.initDefaults_ = function() {
    this.buffer = null;
  };
  TestService_CreateSharedBuffer_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestService_CreateSharedBuffer_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate TestService_CreateSharedBuffer_ResponseParams.buffer
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TestService_CreateSharedBuffer_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TestService_CreateSharedBuffer_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TestService_CreateSharedBuffer_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.buffer = decoder.decodeStruct(codec.NullableHandle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TestService_CreateSharedBuffer_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestService_CreateSharedBuffer_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableHandle, val.buffer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kTestService_DoSomething_Name = 0;
  var kTestService_DoTerminateProcess_Name = 1;
  var kTestService_DoCrashImmediately_Name = 2;
  var kTestService_CreateFolder_Name = 3;
  var kTestService_GetRequestorName_Name = 4;
  var kTestService_CreateSharedBuffer_Name = 5;

  function TestServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(TestService,
                                                   handleOrPtrInfo);
  }

  function TestServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        TestService, associatedInterfacePtrInfo);
  }

  TestServiceAssociatedPtr.prototype =
      Object.create(TestServicePtr.prototype);
  TestServiceAssociatedPtr.prototype.constructor =
      TestServiceAssociatedPtr;

  function TestServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  TestServicePtr.prototype.doSomething = function() {
    return TestServiceProxy.prototype.doSomething
        .apply(this.ptr.getProxy(), arguments);
  };

  TestServiceProxy.prototype.doSomething = function() {
    var params_ = new TestService_DoSomething_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTestService_DoSomething_Name,
          codec.align(TestService_DoSomething_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TestService_DoSomething_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TestService_DoSomething_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TestServicePtr.prototype.doTerminateProcess = function() {
    return TestServiceProxy.prototype.doTerminateProcess
        .apply(this.ptr.getProxy(), arguments);
  };

  TestServiceProxy.prototype.doTerminateProcess = function() {
    var params_ = new TestService_DoTerminateProcess_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTestService_DoTerminateProcess_Name,
          codec.align(TestService_DoTerminateProcess_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TestService_DoTerminateProcess_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TestService_DoTerminateProcess_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TestServicePtr.prototype.doCrashImmediately = function() {
    return TestServiceProxy.prototype.doCrashImmediately
        .apply(this.ptr.getProxy(), arguments);
  };

  TestServiceProxy.prototype.doCrashImmediately = function() {
    var params_ = new TestService_DoCrashImmediately_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTestService_DoCrashImmediately_Name,
          codec.align(TestService_DoCrashImmediately_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TestService_DoCrashImmediately_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TestService_DoCrashImmediately_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TestServicePtr.prototype.createFolder = function() {
    return TestServiceProxy.prototype.createFolder
        .apply(this.ptr.getProxy(), arguments);
  };

  TestServiceProxy.prototype.createFolder = function() {
    var params_ = new TestService_CreateFolder_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTestService_CreateFolder_Name,
          codec.align(TestService_CreateFolder_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TestService_CreateFolder_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TestService_CreateFolder_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TestServicePtr.prototype.getRequestorName = function() {
    return TestServiceProxy.prototype.getRequestorName
        .apply(this.ptr.getProxy(), arguments);
  };

  TestServiceProxy.prototype.getRequestorName = function() {
    var params_ = new TestService_GetRequestorName_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTestService_GetRequestorName_Name,
          codec.align(TestService_GetRequestorName_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TestService_GetRequestorName_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TestService_GetRequestorName_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TestServicePtr.prototype.createSharedBuffer = function() {
    return TestServiceProxy.prototype.createSharedBuffer
        .apply(this.ptr.getProxy(), arguments);
  };

  TestServiceProxy.prototype.createSharedBuffer = function(message) {
    var params_ = new TestService_CreateSharedBuffer_Params();
    params_.message = message;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTestService_CreateSharedBuffer_Name,
          codec.align(TestService_CreateSharedBuffer_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TestService_CreateSharedBuffer_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TestService_CreateSharedBuffer_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function TestServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  TestServiceStub.prototype.doSomething = function() {
    return this.delegate_ && this.delegate_.doSomething && this.delegate_.doSomething();
  }
  TestServiceStub.prototype.doTerminateProcess = function() {
    return this.delegate_ && this.delegate_.doTerminateProcess && this.delegate_.doTerminateProcess();
  }
  TestServiceStub.prototype.doCrashImmediately = function() {
    return this.delegate_ && this.delegate_.doCrashImmediately && this.delegate_.doCrashImmediately();
  }
  TestServiceStub.prototype.createFolder = function() {
    return this.delegate_ && this.delegate_.createFolder && this.delegate_.createFolder();
  }
  TestServiceStub.prototype.getRequestorName = function() {
    return this.delegate_ && this.delegate_.getRequestorName && this.delegate_.getRequestorName();
  }
  TestServiceStub.prototype.createSharedBuffer = function(message) {
    return this.delegate_ && this.delegate_.createSharedBuffer && this.delegate_.createSharedBuffer(message);
  }

  TestServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TestServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTestService_DoSomething_Name:
      var params = reader.decodeStruct(TestService_DoSomething_Params);
      this.doSomething().then(function(response) {
        var responseParams =
            new TestService_DoSomething_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kTestService_DoSomething_Name,
            codec.align(TestService_DoSomething_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TestService_DoSomething_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTestService_DoTerminateProcess_Name:
      var params = reader.decodeStruct(TestService_DoTerminateProcess_Params);
      this.doTerminateProcess().then(function(response) {
        var responseParams =
            new TestService_DoTerminateProcess_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kTestService_DoTerminateProcess_Name,
            codec.align(TestService_DoTerminateProcess_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TestService_DoTerminateProcess_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTestService_DoCrashImmediately_Name:
      var params = reader.decodeStruct(TestService_DoCrashImmediately_Params);
      this.doCrashImmediately().then(function(response) {
        var responseParams =
            new TestService_DoCrashImmediately_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kTestService_DoCrashImmediately_Name,
            codec.align(TestService_DoCrashImmediately_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TestService_DoCrashImmediately_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTestService_CreateFolder_Name:
      var params = reader.decodeStruct(TestService_CreateFolder_Params);
      this.createFolder().then(function(response) {
        var responseParams =
            new TestService_CreateFolder_ResponseParams();
        responseParams.succeeded = response.succeeded;
        var builder = new codec.MessageV1Builder(
            kTestService_CreateFolder_Name,
            codec.align(TestService_CreateFolder_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TestService_CreateFolder_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTestService_GetRequestorName_Name:
      var params = reader.decodeStruct(TestService_GetRequestorName_Params);
      this.getRequestorName().then(function(response) {
        var responseParams =
            new TestService_GetRequestorName_ResponseParams();
        responseParams.name = response.name;
        var builder = new codec.MessageV1Builder(
            kTestService_GetRequestorName_Name,
            codec.align(TestService_GetRequestorName_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TestService_GetRequestorName_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTestService_CreateSharedBuffer_Name:
      var params = reader.decodeStruct(TestService_CreateSharedBuffer_Params);
      this.createSharedBuffer(params.message).then(function(response) {
        var responseParams =
            new TestService_CreateSharedBuffer_ResponseParams();
        responseParams.buffer = response.buffer;
        var builder = new codec.MessageV1Builder(
            kTestService_CreateSharedBuffer_Name,
            codec.align(TestService_CreateSharedBuffer_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TestService_CreateSharedBuffer_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateTestServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTestService_DoSomething_Name:
        if (message.expectsResponse())
          paramsClass = TestService_DoSomething_Params;
      break;
      case kTestService_DoTerminateProcess_Name:
        if (message.expectsResponse())
          paramsClass = TestService_DoTerminateProcess_Params;
      break;
      case kTestService_DoCrashImmediately_Name:
        if (message.expectsResponse())
          paramsClass = TestService_DoCrashImmediately_Params;
      break;
      case kTestService_CreateFolder_Name:
        if (message.expectsResponse())
          paramsClass = TestService_CreateFolder_Params;
      break;
      case kTestService_GetRequestorName_Name:
        if (message.expectsResponse())
          paramsClass = TestService_GetRequestorName_Params;
      break;
      case kTestService_CreateSharedBuffer_Name:
        if (message.expectsResponse())
          paramsClass = TestService_CreateSharedBuffer_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTestServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kTestService_DoSomething_Name:
        if (message.isResponse())
          paramsClass = TestService_DoSomething_ResponseParams;
        break;
      case kTestService_DoTerminateProcess_Name:
        if (message.isResponse())
          paramsClass = TestService_DoTerminateProcess_ResponseParams;
        break;
      case kTestService_DoCrashImmediately_Name:
        if (message.isResponse())
          paramsClass = TestService_DoCrashImmediately_ResponseParams;
        break;
      case kTestService_CreateFolder_Name:
        if (message.isResponse())
          paramsClass = TestService_CreateFolder_ResponseParams;
        break;
      case kTestService_GetRequestorName_Name:
        if (message.isResponse())
          paramsClass = TestService_GetRequestorName_ResponseParams;
        break;
      case kTestService_CreateSharedBuffer_Name:
        if (message.isResponse())
          paramsClass = TestService_CreateSharedBuffer_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var TestService = {
    name: 'content.mojom.TestService',
    kVersion: 0,
    ptrClass: TestServicePtr,
    proxyClass: TestServiceProxy,
    stubClass: TestServiceStub,
    validateRequest: validateTestServiceRequest,
    validateResponse: validateTestServiceResponse,
  };
  TestServiceStub.prototype.validator = validateTestServiceRequest;
  TestServiceProxy.prototype.validator = validateTestServiceResponse;
  exports.TestService = TestService;
  exports.TestServicePtr = TestServicePtr;
  exports.TestServiceAssociatedPtr = TestServiceAssociatedPtr;
})();