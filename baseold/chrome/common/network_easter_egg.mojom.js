// chrome/common/network_easter_egg.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/common/network_easter_egg.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('chrome.mojom');



  function NetworkEasterEgg_GetHighScore_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkEasterEgg_GetHighScore_Params.prototype.initDefaults_ = function() {
  };
  NetworkEasterEgg_GetHighScore_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkEasterEgg_GetHighScore_Params.validate = function(messageValidator, offset) {
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

  NetworkEasterEgg_GetHighScore_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkEasterEgg_GetHighScore_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkEasterEgg_GetHighScore_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkEasterEgg_GetHighScore_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkEasterEgg_GetHighScore_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function NetworkEasterEgg_GetHighScore_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkEasterEgg_GetHighScore_ResponseParams.prototype.initDefaults_ = function() {
    this.highScore = 0;
  };
  NetworkEasterEgg_GetHighScore_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkEasterEgg_GetHighScore_ResponseParams.validate = function(messageValidator, offset) {
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

  NetworkEasterEgg_GetHighScore_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  NetworkEasterEgg_GetHighScore_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new NetworkEasterEgg_GetHighScore_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.highScore = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkEasterEgg_GetHighScore_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkEasterEgg_GetHighScore_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.highScore);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkEasterEgg_UpdateHighScore_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkEasterEgg_UpdateHighScore_Params.prototype.initDefaults_ = function() {
    this.highScore = 0;
  };
  NetworkEasterEgg_UpdateHighScore_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkEasterEgg_UpdateHighScore_Params.validate = function(messageValidator, offset) {
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

  NetworkEasterEgg_UpdateHighScore_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkEasterEgg_UpdateHighScore_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkEasterEgg_UpdateHighScore_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.highScore = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkEasterEgg_UpdateHighScore_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkEasterEgg_UpdateHighScore_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.highScore);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkEasterEgg_ResetHighScore_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkEasterEgg_ResetHighScore_Params.prototype.initDefaults_ = function() {
  };
  NetworkEasterEgg_ResetHighScore_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkEasterEgg_ResetHighScore_Params.validate = function(messageValidator, offset) {
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

  NetworkEasterEgg_ResetHighScore_Params.encodedSize = codec.kStructHeaderSize + 0;

  NetworkEasterEgg_ResetHighScore_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkEasterEgg_ResetHighScore_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NetworkEasterEgg_ResetHighScore_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkEasterEgg_ResetHighScore_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kNetworkEasterEgg_GetHighScore_Name = 0;
  var kNetworkEasterEgg_UpdateHighScore_Name = 1;
  var kNetworkEasterEgg_ResetHighScore_Name = 2;

  function NetworkEasterEggPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NetworkEasterEgg,
                                                   handleOrPtrInfo);
  }

  function NetworkEasterEggAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NetworkEasterEgg, associatedInterfacePtrInfo);
  }

  NetworkEasterEggAssociatedPtr.prototype =
      Object.create(NetworkEasterEggPtr.prototype);
  NetworkEasterEggAssociatedPtr.prototype.constructor =
      NetworkEasterEggAssociatedPtr;

  function NetworkEasterEggProxy(receiver) {
    this.receiver_ = receiver;
  }
  NetworkEasterEggPtr.prototype.getHighScore = function() {
    return NetworkEasterEggProxy.prototype.getHighScore
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkEasterEggProxy.prototype.getHighScore = function() {
    var params_ = new NetworkEasterEgg_GetHighScore_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kNetworkEasterEgg_GetHighScore_Name,
          codec.align(NetworkEasterEgg_GetHighScore_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(NetworkEasterEgg_GetHighScore_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(NetworkEasterEgg_GetHighScore_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  NetworkEasterEggPtr.prototype.updateHighScore = function() {
    return NetworkEasterEggProxy.prototype.updateHighScore
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkEasterEggProxy.prototype.updateHighScore = function(highScore) {
    var params_ = new NetworkEasterEgg_UpdateHighScore_Params();
    params_.highScore = highScore;
    var builder = new codec.MessageV0Builder(
        kNetworkEasterEgg_UpdateHighScore_Name,
        codec.align(NetworkEasterEgg_UpdateHighScore_Params.encodedSize));
    builder.encodeStruct(NetworkEasterEgg_UpdateHighScore_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkEasterEggPtr.prototype.resetHighScore = function() {
    return NetworkEasterEggProxy.prototype.resetHighScore
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkEasterEggProxy.prototype.resetHighScore = function() {
    var params_ = new NetworkEasterEgg_ResetHighScore_Params();
    var builder = new codec.MessageV0Builder(
        kNetworkEasterEgg_ResetHighScore_Name,
        codec.align(NetworkEasterEgg_ResetHighScore_Params.encodedSize));
    builder.encodeStruct(NetworkEasterEgg_ResetHighScore_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NetworkEasterEggStub(delegate) {
    this.delegate_ = delegate;
  }
  NetworkEasterEggStub.prototype.getHighScore = function() {
    return this.delegate_ && this.delegate_.getHighScore && this.delegate_.getHighScore();
  }
  NetworkEasterEggStub.prototype.updateHighScore = function(highScore) {
    return this.delegate_ && this.delegate_.updateHighScore && this.delegate_.updateHighScore(highScore);
  }
  NetworkEasterEggStub.prototype.resetHighScore = function() {
    return this.delegate_ && this.delegate_.resetHighScore && this.delegate_.resetHighScore();
  }

  NetworkEasterEggStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkEasterEgg_UpdateHighScore_Name:
      var params = reader.decodeStruct(NetworkEasterEgg_UpdateHighScore_Params);
      this.updateHighScore(params.highScore);
      return true;
    case kNetworkEasterEgg_ResetHighScore_Name:
      var params = reader.decodeStruct(NetworkEasterEgg_ResetHighScore_Params);
      this.resetHighScore();
      return true;
    default:
      return false;
    }
  };

  NetworkEasterEggStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkEasterEgg_GetHighScore_Name:
      var params = reader.decodeStruct(NetworkEasterEgg_GetHighScore_Params);
      this.getHighScore().then(function(response) {
        var responseParams =
            new NetworkEasterEgg_GetHighScore_ResponseParams();
        responseParams.highScore = response.highScore;
        var builder = new codec.MessageV1Builder(
            kNetworkEasterEgg_GetHighScore_Name,
            codec.align(NetworkEasterEgg_GetHighScore_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(NetworkEasterEgg_GetHighScore_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateNetworkEasterEggRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkEasterEgg_GetHighScore_Name:
        if (message.expectsResponse())
          paramsClass = NetworkEasterEgg_GetHighScore_Params;
      break;
      case kNetworkEasterEgg_UpdateHighScore_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkEasterEgg_UpdateHighScore_Params;
      break;
      case kNetworkEasterEgg_ResetHighScore_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkEasterEgg_ResetHighScore_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkEasterEggResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kNetworkEasterEgg_GetHighScore_Name:
        if (message.isResponse())
          paramsClass = NetworkEasterEgg_GetHighScore_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var NetworkEasterEgg = {
    name: 'chrome.mojom.NetworkEasterEgg',
    kVersion: 0,
    ptrClass: NetworkEasterEggPtr,
    proxyClass: NetworkEasterEggProxy,
    stubClass: NetworkEasterEggStub,
    validateRequest: validateNetworkEasterEggRequest,
    validateResponse: validateNetworkEasterEggResponse,
  };
  NetworkEasterEggStub.prototype.validator = validateNetworkEasterEggRequest;
  NetworkEasterEggProxy.prototype.validator = validateNetworkEasterEggResponse;
  exports.NetworkEasterEgg = NetworkEasterEgg;
  exports.NetworkEasterEggPtr = NetworkEasterEggPtr;
  exports.NetworkEasterEggAssociatedPtr = NetworkEasterEggAssociatedPtr;
})();