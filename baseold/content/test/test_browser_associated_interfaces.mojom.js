// content/test/test_browser_associated_interfaces.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'content/test/test_browser_associated_interfaces.mojom';
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



  function BrowserAssociatedInterfaceTestDriver_ExpectString_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BrowserAssociatedInterfaceTestDriver_ExpectString_Params.prototype.initDefaults_ = function() {
    this.expected = null;
  };
  BrowserAssociatedInterfaceTestDriver_ExpectString_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BrowserAssociatedInterfaceTestDriver_ExpectString_Params.validate = function(messageValidator, offset) {
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


    // validate BrowserAssociatedInterfaceTestDriver_ExpectString_Params.expected
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BrowserAssociatedInterfaceTestDriver_ExpectString_Params.encodedSize = codec.kStructHeaderSize + 8;

  BrowserAssociatedInterfaceTestDriver_ExpectString_Params.decode = function(decoder) {
    var packed;
    var val = new BrowserAssociatedInterfaceTestDriver_ExpectString_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.expected = decoder.decodeStruct(codec.String);
    return val;
  };

  BrowserAssociatedInterfaceTestDriver_ExpectString_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BrowserAssociatedInterfaceTestDriver_ExpectString_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.expected);
  };
  function BrowserAssociatedInterfaceTestDriver_RequestQuit_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BrowserAssociatedInterfaceTestDriver_RequestQuit_Params.prototype.initDefaults_ = function() {
  };
  BrowserAssociatedInterfaceTestDriver_RequestQuit_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BrowserAssociatedInterfaceTestDriver_RequestQuit_Params.validate = function(messageValidator, offset) {
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

  BrowserAssociatedInterfaceTestDriver_RequestQuit_Params.encodedSize = codec.kStructHeaderSize + 0;

  BrowserAssociatedInterfaceTestDriver_RequestQuit_Params.decode = function(decoder) {
    var packed;
    var val = new BrowserAssociatedInterfaceTestDriver_RequestQuit_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BrowserAssociatedInterfaceTestDriver_RequestQuit_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BrowserAssociatedInterfaceTestDriver_RequestQuit_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams.prototype.initDefaults_ = function() {
  };
  BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams.validate = function(messageValidator, offset) {
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

  BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function WebContentsFrameBindingSetTest_Ping_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebContentsFrameBindingSetTest_Ping_Params.prototype.initDefaults_ = function() {
  };
  WebContentsFrameBindingSetTest_Ping_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebContentsFrameBindingSetTest_Ping_Params.validate = function(messageValidator, offset) {
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

  WebContentsFrameBindingSetTest_Ping_Params.encodedSize = codec.kStructHeaderSize + 0;

  WebContentsFrameBindingSetTest_Ping_Params.decode = function(decoder) {
    var packed;
    var val = new WebContentsFrameBindingSetTest_Ping_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebContentsFrameBindingSetTest_Ping_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebContentsFrameBindingSetTest_Ping_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WebContentsFrameBindingSetTest_Ping_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebContentsFrameBindingSetTest_Ping_ResponseParams.prototype.initDefaults_ = function() {
  };
  WebContentsFrameBindingSetTest_Ping_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebContentsFrameBindingSetTest_Ping_ResponseParams.validate = function(messageValidator, offset) {
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

  WebContentsFrameBindingSetTest_Ping_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  WebContentsFrameBindingSetTest_Ping_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebContentsFrameBindingSetTest_Ping_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebContentsFrameBindingSetTest_Ping_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebContentsFrameBindingSetTest_Ping_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  var kBrowserAssociatedInterfaceTestDriver_ExpectString_Name = 0;
  var kBrowserAssociatedInterfaceTestDriver_RequestQuit_Name = 1;

  function BrowserAssociatedInterfaceTestDriverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BrowserAssociatedInterfaceTestDriver,
                                                   handleOrPtrInfo);
  }

  function BrowserAssociatedInterfaceTestDriverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BrowserAssociatedInterfaceTestDriver, associatedInterfacePtrInfo);
  }

  BrowserAssociatedInterfaceTestDriverAssociatedPtr.prototype =
      Object.create(BrowserAssociatedInterfaceTestDriverPtr.prototype);
  BrowserAssociatedInterfaceTestDriverAssociatedPtr.prototype.constructor =
      BrowserAssociatedInterfaceTestDriverAssociatedPtr;

  function BrowserAssociatedInterfaceTestDriverProxy(receiver) {
    this.receiver_ = receiver;
  }
  BrowserAssociatedInterfaceTestDriverPtr.prototype.expectString = function() {
    return BrowserAssociatedInterfaceTestDriverProxy.prototype.expectString
        .apply(this.ptr.getProxy(), arguments);
  };

  BrowserAssociatedInterfaceTestDriverProxy.prototype.expectString = function(expected) {
    var params_ = new BrowserAssociatedInterfaceTestDriver_ExpectString_Params();
    params_.expected = expected;
    var builder = new codec.MessageV0Builder(
        kBrowserAssociatedInterfaceTestDriver_ExpectString_Name,
        codec.align(BrowserAssociatedInterfaceTestDriver_ExpectString_Params.encodedSize));
    builder.encodeStruct(BrowserAssociatedInterfaceTestDriver_ExpectString_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BrowserAssociatedInterfaceTestDriverPtr.prototype.requestQuit = function() {
    return BrowserAssociatedInterfaceTestDriverProxy.prototype.requestQuit
        .apply(this.ptr.getProxy(), arguments);
  };

  BrowserAssociatedInterfaceTestDriverProxy.prototype.requestQuit = function() {
    var params_ = new BrowserAssociatedInterfaceTestDriver_RequestQuit_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBrowserAssociatedInterfaceTestDriver_RequestQuit_Name,
          codec.align(BrowserAssociatedInterfaceTestDriver_RequestQuit_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BrowserAssociatedInterfaceTestDriver_RequestQuit_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function BrowserAssociatedInterfaceTestDriverStub(delegate) {
    this.delegate_ = delegate;
  }
  BrowserAssociatedInterfaceTestDriverStub.prototype.expectString = function(expected) {
    return this.delegate_ && this.delegate_.expectString && this.delegate_.expectString(expected);
  }
  BrowserAssociatedInterfaceTestDriverStub.prototype.requestQuit = function() {
    return this.delegate_ && this.delegate_.requestQuit && this.delegate_.requestQuit();
  }

  BrowserAssociatedInterfaceTestDriverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBrowserAssociatedInterfaceTestDriver_ExpectString_Name:
      var params = reader.decodeStruct(BrowserAssociatedInterfaceTestDriver_ExpectString_Params);
      this.expectString(params.expected);
      return true;
    default:
      return false;
    }
  };

  BrowserAssociatedInterfaceTestDriverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBrowserAssociatedInterfaceTestDriver_RequestQuit_Name:
      var params = reader.decodeStruct(BrowserAssociatedInterfaceTestDriver_RequestQuit_Params);
      this.requestQuit().then(function(response) {
        var responseParams =
            new BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kBrowserAssociatedInterfaceTestDriver_RequestQuit_Name,
            codec.align(BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateBrowserAssociatedInterfaceTestDriverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBrowserAssociatedInterfaceTestDriver_ExpectString_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BrowserAssociatedInterfaceTestDriver_ExpectString_Params;
      break;
      case kBrowserAssociatedInterfaceTestDriver_RequestQuit_Name:
        if (message.expectsResponse())
          paramsClass = BrowserAssociatedInterfaceTestDriver_RequestQuit_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBrowserAssociatedInterfaceTestDriverResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kBrowserAssociatedInterfaceTestDriver_RequestQuit_Name:
        if (message.isResponse())
          paramsClass = BrowserAssociatedInterfaceTestDriver_RequestQuit_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var BrowserAssociatedInterfaceTestDriver = {
    name: 'content.mojom.BrowserAssociatedInterfaceTestDriver',
    kVersion: 0,
    ptrClass: BrowserAssociatedInterfaceTestDriverPtr,
    proxyClass: BrowserAssociatedInterfaceTestDriverProxy,
    stubClass: BrowserAssociatedInterfaceTestDriverStub,
    validateRequest: validateBrowserAssociatedInterfaceTestDriverRequest,
    validateResponse: validateBrowserAssociatedInterfaceTestDriverResponse,
  };
  BrowserAssociatedInterfaceTestDriverStub.prototype.validator = validateBrowserAssociatedInterfaceTestDriverRequest;
  BrowserAssociatedInterfaceTestDriverProxy.prototype.validator = validateBrowserAssociatedInterfaceTestDriverResponse;
  var kWebContentsFrameBindingSetTest_Ping_Name = 0;

  function WebContentsFrameBindingSetTestPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WebContentsFrameBindingSetTest,
                                                   handleOrPtrInfo);
  }

  function WebContentsFrameBindingSetTestAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WebContentsFrameBindingSetTest, associatedInterfacePtrInfo);
  }

  WebContentsFrameBindingSetTestAssociatedPtr.prototype =
      Object.create(WebContentsFrameBindingSetTestPtr.prototype);
  WebContentsFrameBindingSetTestAssociatedPtr.prototype.constructor =
      WebContentsFrameBindingSetTestAssociatedPtr;

  function WebContentsFrameBindingSetTestProxy(receiver) {
    this.receiver_ = receiver;
  }
  WebContentsFrameBindingSetTestPtr.prototype.ping = function() {
    return WebContentsFrameBindingSetTestProxy.prototype.ping
        .apply(this.ptr.getProxy(), arguments);
  };

  WebContentsFrameBindingSetTestProxy.prototype.ping = function() {
    var params_ = new WebContentsFrameBindingSetTest_Ping_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebContentsFrameBindingSetTest_Ping_Name,
          codec.align(WebContentsFrameBindingSetTest_Ping_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebContentsFrameBindingSetTest_Ping_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebContentsFrameBindingSetTest_Ping_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function WebContentsFrameBindingSetTestStub(delegate) {
    this.delegate_ = delegate;
  }
  WebContentsFrameBindingSetTestStub.prototype.ping = function() {
    return this.delegate_ && this.delegate_.ping && this.delegate_.ping();
  }

  WebContentsFrameBindingSetTestStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  WebContentsFrameBindingSetTestStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebContentsFrameBindingSetTest_Ping_Name:
      var params = reader.decodeStruct(WebContentsFrameBindingSetTest_Ping_Params);
      this.ping().then(function(response) {
        var responseParams =
            new WebContentsFrameBindingSetTest_Ping_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kWebContentsFrameBindingSetTest_Ping_Name,
            codec.align(WebContentsFrameBindingSetTest_Ping_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebContentsFrameBindingSetTest_Ping_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateWebContentsFrameBindingSetTestRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWebContentsFrameBindingSetTest_Ping_Name:
        if (message.expectsResponse())
          paramsClass = WebContentsFrameBindingSetTest_Ping_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWebContentsFrameBindingSetTestResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kWebContentsFrameBindingSetTest_Ping_Name:
        if (message.isResponse())
          paramsClass = WebContentsFrameBindingSetTest_Ping_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var WebContentsFrameBindingSetTest = {
    name: 'content.mojom.WebContentsFrameBindingSetTest',
    kVersion: 0,
    ptrClass: WebContentsFrameBindingSetTestPtr,
    proxyClass: WebContentsFrameBindingSetTestProxy,
    stubClass: WebContentsFrameBindingSetTestStub,
    validateRequest: validateWebContentsFrameBindingSetTestRequest,
    validateResponse: validateWebContentsFrameBindingSetTestResponse,
  };
  WebContentsFrameBindingSetTestStub.prototype.validator = validateWebContentsFrameBindingSetTestRequest;
  WebContentsFrameBindingSetTestProxy.prototype.validator = validateWebContentsFrameBindingSetTestResponse;
  exports.BrowserAssociatedInterfaceTestDriver = BrowserAssociatedInterfaceTestDriver;
  exports.BrowserAssociatedInterfaceTestDriverPtr = BrowserAssociatedInterfaceTestDriverPtr;
  exports.BrowserAssociatedInterfaceTestDriverAssociatedPtr = BrowserAssociatedInterfaceTestDriverAssociatedPtr;
  exports.WebContentsFrameBindingSetTest = WebContentsFrameBindingSetTest;
  exports.WebContentsFrameBindingSetTestPtr = WebContentsFrameBindingSetTestPtr;
  exports.WebContentsFrameBindingSetTestAssociatedPtr = WebContentsFrameBindingSetTestAssociatedPtr;
})();