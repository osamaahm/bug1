// services/identity/public/mojom/identity_accessor.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/identity/public/mojom/identity_accessor.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var core_account_id$ =
      mojo.internal.exposeNamespace('identity.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/identity/public/mojom/core_account_id.mojom', 'core_account_id.mojom.js');
  }
  var account_state$ =
      mojo.internal.exposeNamespace('identity.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/identity/public/mojom/account_state.mojom', 'account_state.mojom.js');
  }
  var google_service_auth_error$ =
      mojo.internal.exposeNamespace('identity.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/identity/public/mojom/google_service_auth_error.mojom', 'google_service_auth_error.mojom.js');
  }
  var scope_set$ =
      mojo.internal.exposeNamespace('identity.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/identity/public/mojom/scope_set.mojom', 'scope_set.mojom.js');
  }



  function IdentityAccessor_GetPrimaryAccountInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IdentityAccessor_GetPrimaryAccountInfo_Params.prototype.initDefaults_ = function() {
  };
  IdentityAccessor_GetPrimaryAccountInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IdentityAccessor_GetPrimaryAccountInfo_Params.validate = function(messageValidator, offset) {
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

  IdentityAccessor_GetPrimaryAccountInfo_Params.encodedSize = codec.kStructHeaderSize + 0;

  IdentityAccessor_GetPrimaryAccountInfo_Params.decode = function(decoder) {
    var packed;
    var val = new IdentityAccessor_GetPrimaryAccountInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  IdentityAccessor_GetPrimaryAccountInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IdentityAccessor_GetPrimaryAccountInfo_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function IdentityAccessor_GetPrimaryAccountInfo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IdentityAccessor_GetPrimaryAccountInfo_ResponseParams.prototype.initDefaults_ = function() {
    this.accountId = null;
    this.gaia = null;
    this.email = null;
    this.accountState = null;
  };
  IdentityAccessor_GetPrimaryAccountInfo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IdentityAccessor_GetPrimaryAccountInfo_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate IdentityAccessor_GetPrimaryAccountInfo_ResponseParams.accountId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, core_account_id$.CoreAccountId, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate IdentityAccessor_GetPrimaryAccountInfo_ResponseParams.gaia
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate IdentityAccessor_GetPrimaryAccountInfo_ResponseParams.email
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate IdentityAccessor_GetPrimaryAccountInfo_ResponseParams.accountState
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, account_state$.AccountState, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IdentityAccessor_GetPrimaryAccountInfo_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  IdentityAccessor_GetPrimaryAccountInfo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new IdentityAccessor_GetPrimaryAccountInfo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.accountId = decoder.decodeStructPointer(core_account_id$.CoreAccountId);
    val.gaia = decoder.decodeStruct(codec.NullableString);
    val.email = decoder.decodeStruct(codec.NullableString);
    val.accountState = decoder.decodeStructPointer(account_state$.AccountState);
    return val;
  };

  IdentityAccessor_GetPrimaryAccountInfo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IdentityAccessor_GetPrimaryAccountInfo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(core_account_id$.CoreAccountId, val.accountId);
    encoder.encodeStruct(codec.NullableString, val.gaia);
    encoder.encodeStruct(codec.NullableString, val.email);
    encoder.encodeStructPointer(account_state$.AccountState, val.accountState);
  };
  function IdentityAccessor_GetPrimaryAccountWhenAvailable_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IdentityAccessor_GetPrimaryAccountWhenAvailable_Params.prototype.initDefaults_ = function() {
  };
  IdentityAccessor_GetPrimaryAccountWhenAvailable_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IdentityAccessor_GetPrimaryAccountWhenAvailable_Params.validate = function(messageValidator, offset) {
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

  IdentityAccessor_GetPrimaryAccountWhenAvailable_Params.encodedSize = codec.kStructHeaderSize + 0;

  IdentityAccessor_GetPrimaryAccountWhenAvailable_Params.decode = function(decoder) {
    var packed;
    var val = new IdentityAccessor_GetPrimaryAccountWhenAvailable_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  IdentityAccessor_GetPrimaryAccountWhenAvailable_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IdentityAccessor_GetPrimaryAccountWhenAvailable_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams.prototype.initDefaults_ = function() {
    this.accountId = null;
    this.gaia = null;
    this.email = null;
    this.accountState = null;
  };
  IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams.accountId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, core_account_id$.CoreAccountId, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams.gaia
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams.email
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams.accountState
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, account_state$.AccountState, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams.encodedSize = codec.kStructHeaderSize + 32;

  IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.accountId = decoder.decodeStructPointer(core_account_id$.CoreAccountId);
    val.gaia = decoder.decodeStruct(codec.String);
    val.email = decoder.decodeStruct(codec.String);
    val.accountState = decoder.decodeStructPointer(account_state$.AccountState);
    return val;
  };

  IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(core_account_id$.CoreAccountId, val.accountId);
    encoder.encodeStruct(codec.String, val.gaia);
    encoder.encodeStruct(codec.String, val.email);
    encoder.encodeStructPointer(account_state$.AccountState, val.accountState);
  };
  function IdentityAccessor_GetAccessToken_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IdentityAccessor_GetAccessToken_Params.prototype.initDefaults_ = function() {
    this.accountId = null;
    this.scopes = null;
    this.consumerId = null;
  };
  IdentityAccessor_GetAccessToken_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IdentityAccessor_GetAccessToken_Params.validate = function(messageValidator, offset) {
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


    // validate IdentityAccessor_GetAccessToken_Params.accountId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, core_account_id$.CoreAccountId, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate IdentityAccessor_GetAccessToken_Params.scopes
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, scope_set$.ScopeSet, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate IdentityAccessor_GetAccessToken_Params.consumerId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IdentityAccessor_GetAccessToken_Params.encodedSize = codec.kStructHeaderSize + 24;

  IdentityAccessor_GetAccessToken_Params.decode = function(decoder) {
    var packed;
    var val = new IdentityAccessor_GetAccessToken_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.accountId = decoder.decodeStructPointer(core_account_id$.CoreAccountId);
    val.scopes = decoder.decodeStructPointer(scope_set$.ScopeSet);
    val.consumerId = decoder.decodeStruct(codec.String);
    return val;
  };

  IdentityAccessor_GetAccessToken_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IdentityAccessor_GetAccessToken_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(core_account_id$.CoreAccountId, val.accountId);
    encoder.encodeStructPointer(scope_set$.ScopeSet, val.scopes);
    encoder.encodeStruct(codec.String, val.consumerId);
  };
  function IdentityAccessor_GetAccessToken_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IdentityAccessor_GetAccessToken_ResponseParams.prototype.initDefaults_ = function() {
    this.token = null;
    this.expirationTime = null;
    this.error = null;
  };
  IdentityAccessor_GetAccessToken_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IdentityAccessor_GetAccessToken_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate IdentityAccessor_GetAccessToken_ResponseParams.token
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate IdentityAccessor_GetAccessToken_ResponseParams.expirationTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate IdentityAccessor_GetAccessToken_ResponseParams.error
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, google_service_auth_error$.GoogleServiceAuthError, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IdentityAccessor_GetAccessToken_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  IdentityAccessor_GetAccessToken_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new IdentityAccessor_GetAccessToken_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token = decoder.decodeStruct(codec.NullableString);
    val.expirationTime = decoder.decodeStructPointer(time$.Time);
    val.error = decoder.decodeStructPointer(google_service_auth_error$.GoogleServiceAuthError);
    return val;
  };

  IdentityAccessor_GetAccessToken_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IdentityAccessor_GetAccessToken_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.token);
    encoder.encodeStructPointer(time$.Time, val.expirationTime);
    encoder.encodeStructPointer(google_service_auth_error$.GoogleServiceAuthError, val.error);
  };
  var kIdentityAccessor_GetPrimaryAccountInfo_Name = 0;
  var kIdentityAccessor_GetPrimaryAccountWhenAvailable_Name = 1;
  var kIdentityAccessor_GetAccessToken_Name = 2;

  function IdentityAccessorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(IdentityAccessor,
                                                   handleOrPtrInfo);
  }

  function IdentityAccessorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        IdentityAccessor, associatedInterfacePtrInfo);
  }

  IdentityAccessorAssociatedPtr.prototype =
      Object.create(IdentityAccessorPtr.prototype);
  IdentityAccessorAssociatedPtr.prototype.constructor =
      IdentityAccessorAssociatedPtr;

  function IdentityAccessorProxy(receiver) {
    this.receiver_ = receiver;
  }
  IdentityAccessorPtr.prototype.getPrimaryAccountInfo = function() {
    return IdentityAccessorProxy.prototype.getPrimaryAccountInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  IdentityAccessorProxy.prototype.getPrimaryAccountInfo = function() {
    var params_ = new IdentityAccessor_GetPrimaryAccountInfo_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kIdentityAccessor_GetPrimaryAccountInfo_Name,
          codec.align(IdentityAccessor_GetPrimaryAccountInfo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(IdentityAccessor_GetPrimaryAccountInfo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(IdentityAccessor_GetPrimaryAccountInfo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  IdentityAccessorPtr.prototype.getPrimaryAccountWhenAvailable = function() {
    return IdentityAccessorProxy.prototype.getPrimaryAccountWhenAvailable
        .apply(this.ptr.getProxy(), arguments);
  };

  IdentityAccessorProxy.prototype.getPrimaryAccountWhenAvailable = function() {
    var params_ = new IdentityAccessor_GetPrimaryAccountWhenAvailable_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kIdentityAccessor_GetPrimaryAccountWhenAvailable_Name,
          codec.align(IdentityAccessor_GetPrimaryAccountWhenAvailable_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(IdentityAccessor_GetPrimaryAccountWhenAvailable_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  IdentityAccessorPtr.prototype.getAccessToken = function() {
    return IdentityAccessorProxy.prototype.getAccessToken
        .apply(this.ptr.getProxy(), arguments);
  };

  IdentityAccessorProxy.prototype.getAccessToken = function(accountId, scopes, consumerId) {
    var params_ = new IdentityAccessor_GetAccessToken_Params();
    params_.accountId = accountId;
    params_.scopes = scopes;
    params_.consumerId = consumerId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kIdentityAccessor_GetAccessToken_Name,
          codec.align(IdentityAccessor_GetAccessToken_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(IdentityAccessor_GetAccessToken_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(IdentityAccessor_GetAccessToken_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function IdentityAccessorStub(delegate) {
    this.delegate_ = delegate;
  }
  IdentityAccessorStub.prototype.getPrimaryAccountInfo = function() {
    return this.delegate_ && this.delegate_.getPrimaryAccountInfo && this.delegate_.getPrimaryAccountInfo();
  }
  IdentityAccessorStub.prototype.getPrimaryAccountWhenAvailable = function() {
    return this.delegate_ && this.delegate_.getPrimaryAccountWhenAvailable && this.delegate_.getPrimaryAccountWhenAvailable();
  }
  IdentityAccessorStub.prototype.getAccessToken = function(accountId, scopes, consumerId) {
    return this.delegate_ && this.delegate_.getAccessToken && this.delegate_.getAccessToken(accountId, scopes, consumerId);
  }

  IdentityAccessorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  IdentityAccessorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kIdentityAccessor_GetPrimaryAccountInfo_Name:
      var params = reader.decodeStruct(IdentityAccessor_GetPrimaryAccountInfo_Params);
      this.getPrimaryAccountInfo().then(function(response) {
        var responseParams =
            new IdentityAccessor_GetPrimaryAccountInfo_ResponseParams();
        responseParams.accountId = response.accountId;
        responseParams.gaia = response.gaia;
        responseParams.email = response.email;
        responseParams.accountState = response.accountState;
        var builder = new codec.MessageV1Builder(
            kIdentityAccessor_GetPrimaryAccountInfo_Name,
            codec.align(IdentityAccessor_GetPrimaryAccountInfo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(IdentityAccessor_GetPrimaryAccountInfo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kIdentityAccessor_GetPrimaryAccountWhenAvailable_Name:
      var params = reader.decodeStruct(IdentityAccessor_GetPrimaryAccountWhenAvailable_Params);
      this.getPrimaryAccountWhenAvailable().then(function(response) {
        var responseParams =
            new IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams();
        responseParams.accountId = response.accountId;
        responseParams.gaia = response.gaia;
        responseParams.email = response.email;
        responseParams.accountState = response.accountState;
        var builder = new codec.MessageV1Builder(
            kIdentityAccessor_GetPrimaryAccountWhenAvailable_Name,
            codec.align(IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kIdentityAccessor_GetAccessToken_Name:
      var params = reader.decodeStruct(IdentityAccessor_GetAccessToken_Params);
      this.getAccessToken(params.accountId, params.scopes, params.consumerId).then(function(response) {
        var responseParams =
            new IdentityAccessor_GetAccessToken_ResponseParams();
        responseParams.token = response.token;
        responseParams.expirationTime = response.expirationTime;
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kIdentityAccessor_GetAccessToken_Name,
            codec.align(IdentityAccessor_GetAccessToken_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(IdentityAccessor_GetAccessToken_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateIdentityAccessorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kIdentityAccessor_GetPrimaryAccountInfo_Name:
        if (message.expectsResponse())
          paramsClass = IdentityAccessor_GetPrimaryAccountInfo_Params;
      break;
      case kIdentityAccessor_GetPrimaryAccountWhenAvailable_Name:
        if (message.expectsResponse())
          paramsClass = IdentityAccessor_GetPrimaryAccountWhenAvailable_Params;
      break;
      case kIdentityAccessor_GetAccessToken_Name:
        if (message.expectsResponse())
          paramsClass = IdentityAccessor_GetAccessToken_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateIdentityAccessorResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kIdentityAccessor_GetPrimaryAccountInfo_Name:
        if (message.isResponse())
          paramsClass = IdentityAccessor_GetPrimaryAccountInfo_ResponseParams;
        break;
      case kIdentityAccessor_GetPrimaryAccountWhenAvailable_Name:
        if (message.isResponse())
          paramsClass = IdentityAccessor_GetPrimaryAccountWhenAvailable_ResponseParams;
        break;
      case kIdentityAccessor_GetAccessToken_Name:
        if (message.isResponse())
          paramsClass = IdentityAccessor_GetAccessToken_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var IdentityAccessor = {
    name: 'identity.mojom.IdentityAccessor',
    kVersion: 0,
    ptrClass: IdentityAccessorPtr,
    proxyClass: IdentityAccessorProxy,
    stubClass: IdentityAccessorStub,
    validateRequest: validateIdentityAccessorRequest,
    validateResponse: validateIdentityAccessorResponse,
  };
  IdentityAccessorStub.prototype.validator = validateIdentityAccessorRequest;
  IdentityAccessorProxy.prototype.validator = validateIdentityAccessorResponse;
  exports.IdentityAccessor = IdentityAccessor;
  exports.IdentityAccessorPtr = IdentityAccessorPtr;
  exports.IdentityAccessorAssociatedPtr = IdentityAccessorAssociatedPtr;
})();