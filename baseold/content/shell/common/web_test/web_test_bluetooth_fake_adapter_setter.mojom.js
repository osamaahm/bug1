// content/shell/common/web_test/web_test_bluetooth_fake_adapter_setter.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'content/shell/common/web_test/web_test_bluetooth_fake_adapter_setter.mojom';
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



  function WebTestBluetoothFakeAdapterSetter_Set_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTestBluetoothFakeAdapterSetter_Set_Params.prototype.initDefaults_ = function() {
    this.adapterName = null;
  };
  WebTestBluetoothFakeAdapterSetter_Set_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTestBluetoothFakeAdapterSetter_Set_Params.validate = function(messageValidator, offset) {
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


    // validate WebTestBluetoothFakeAdapterSetter_Set_Params.adapterName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebTestBluetoothFakeAdapterSetter_Set_Params.encodedSize = codec.kStructHeaderSize + 8;

  WebTestBluetoothFakeAdapterSetter_Set_Params.decode = function(decoder) {
    var packed;
    var val = new WebTestBluetoothFakeAdapterSetter_Set_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.adapterName = decoder.decodeStruct(codec.String);
    return val;
  };

  WebTestBluetoothFakeAdapterSetter_Set_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTestBluetoothFakeAdapterSetter_Set_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.adapterName);
  };
  function WebTestBluetoothFakeAdapterSetter_Set_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTestBluetoothFakeAdapterSetter_Set_ResponseParams.prototype.initDefaults_ = function() {
  };
  WebTestBluetoothFakeAdapterSetter_Set_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTestBluetoothFakeAdapterSetter_Set_ResponseParams.validate = function(messageValidator, offset) {
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

  WebTestBluetoothFakeAdapterSetter_Set_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  WebTestBluetoothFakeAdapterSetter_Set_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebTestBluetoothFakeAdapterSetter_Set_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebTestBluetoothFakeAdapterSetter_Set_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTestBluetoothFakeAdapterSetter_Set_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  var kWebTestBluetoothFakeAdapterSetter_Set_Name = 0;

  function WebTestBluetoothFakeAdapterSetterPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WebTestBluetoothFakeAdapterSetter,
                                                   handleOrPtrInfo);
  }

  function WebTestBluetoothFakeAdapterSetterAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WebTestBluetoothFakeAdapterSetter, associatedInterfacePtrInfo);
  }

  WebTestBluetoothFakeAdapterSetterAssociatedPtr.prototype =
      Object.create(WebTestBluetoothFakeAdapterSetterPtr.prototype);
  WebTestBluetoothFakeAdapterSetterAssociatedPtr.prototype.constructor =
      WebTestBluetoothFakeAdapterSetterAssociatedPtr;

  function WebTestBluetoothFakeAdapterSetterProxy(receiver) {
    this.receiver_ = receiver;
  }
  WebTestBluetoothFakeAdapterSetterPtr.prototype.set = function() {
    return WebTestBluetoothFakeAdapterSetterProxy.prototype.set
        .apply(this.ptr.getProxy(), arguments);
  };

  WebTestBluetoothFakeAdapterSetterProxy.prototype.set = function(adapterName) {
    var params_ = new WebTestBluetoothFakeAdapterSetter_Set_Params();
    params_.adapterName = adapterName;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebTestBluetoothFakeAdapterSetter_Set_Name,
          codec.align(WebTestBluetoothFakeAdapterSetter_Set_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebTestBluetoothFakeAdapterSetter_Set_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebTestBluetoothFakeAdapterSetter_Set_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function WebTestBluetoothFakeAdapterSetterStub(delegate) {
    this.delegate_ = delegate;
  }
  WebTestBluetoothFakeAdapterSetterStub.prototype.set = function(adapterName) {
    return this.delegate_ && this.delegate_.set && this.delegate_.set(adapterName);
  }

  WebTestBluetoothFakeAdapterSetterStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  WebTestBluetoothFakeAdapterSetterStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebTestBluetoothFakeAdapterSetter_Set_Name:
      var params = reader.decodeStruct(WebTestBluetoothFakeAdapterSetter_Set_Params);
      this.set(params.adapterName).then(function(response) {
        var responseParams =
            new WebTestBluetoothFakeAdapterSetter_Set_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kWebTestBluetoothFakeAdapterSetter_Set_Name,
            codec.align(WebTestBluetoothFakeAdapterSetter_Set_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebTestBluetoothFakeAdapterSetter_Set_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateWebTestBluetoothFakeAdapterSetterRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWebTestBluetoothFakeAdapterSetter_Set_Name:
        if (message.expectsResponse())
          paramsClass = WebTestBluetoothFakeAdapterSetter_Set_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWebTestBluetoothFakeAdapterSetterResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kWebTestBluetoothFakeAdapterSetter_Set_Name:
        if (message.isResponse())
          paramsClass = WebTestBluetoothFakeAdapterSetter_Set_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var WebTestBluetoothFakeAdapterSetter = {
    name: 'content.mojom.WebTestBluetoothFakeAdapterSetter',
    kVersion: 0,
    ptrClass: WebTestBluetoothFakeAdapterSetterPtr,
    proxyClass: WebTestBluetoothFakeAdapterSetterProxy,
    stubClass: WebTestBluetoothFakeAdapterSetterStub,
    validateRequest: validateWebTestBluetoothFakeAdapterSetterRequest,
    validateResponse: validateWebTestBluetoothFakeAdapterSetterResponse,
  };
  WebTestBluetoothFakeAdapterSetterStub.prototype.validator = validateWebTestBluetoothFakeAdapterSetterRequest;
  WebTestBluetoothFakeAdapterSetterProxy.prototype.validator = validateWebTestBluetoothFakeAdapterSetterResponse;
  exports.WebTestBluetoothFakeAdapterSetter = WebTestBluetoothFakeAdapterSetter;
  exports.WebTestBluetoothFakeAdapterSetterPtr = WebTestBluetoothFakeAdapterSetterPtr;
  exports.WebTestBluetoothFakeAdapterSetterAssociatedPtr = WebTestBluetoothFakeAdapterSetterAssociatedPtr;
})();