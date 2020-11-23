// third_party/blink/public/mojom/websockets/websocket_connector.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/websockets/websocket_connector.mojom';
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
  var websocket$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/websocket.mojom', '../../../../../services/network/public/mojom/websocket.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function WebSocketConnector_Connect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebSocketConnector_Connect_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.requestedProtocols = null;
    this.siteForCookies = null;
    this.userAgent = null;
    this.handshakeClient = new websocket$.WebSocketHandshakeClientPtr();
  };
  WebSocketConnector_Connect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebSocketConnector_Connect_Params.validate = function(messageValidator, offset) {
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


    // validate WebSocketConnector_Connect_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebSocketConnector_Connect_Params.requestedProtocols
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebSocketConnector_Connect_Params.siteForCookies
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebSocketConnector_Connect_Params.userAgent
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebSocketConnector_Connect_Params.handshakeClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 32, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebSocketConnector_Connect_Params.encodedSize = codec.kStructHeaderSize + 40;

  WebSocketConnector_Connect_Params.decode = function(decoder) {
    var packed;
    var val = new WebSocketConnector_Connect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url = decoder.decodeStructPointer(url$.Url);
    val.requestedProtocols = decoder.decodeArrayPointer(codec.String);
    val.siteForCookies = decoder.decodeStructPointer(url$.Url);
    val.userAgent = decoder.decodeStruct(codec.NullableString);
    val.handshakeClient = decoder.decodeStruct(new codec.Interface(websocket$.WebSocketHandshakeClientPtr));
    return val;
  };

  WebSocketConnector_Connect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebSocketConnector_Connect_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeArrayPointer(codec.String, val.requestedProtocols);
    encoder.encodeStructPointer(url$.Url, val.siteForCookies);
    encoder.encodeStruct(codec.NullableString, val.userAgent);
    encoder.encodeStruct(new codec.Interface(websocket$.WebSocketHandshakeClientPtr), val.handshakeClient);
  };
  var kWebSocketConnector_Connect_Name = 0;

  function WebSocketConnectorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WebSocketConnector,
                                                   handleOrPtrInfo);
  }

  function WebSocketConnectorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WebSocketConnector, associatedInterfacePtrInfo);
  }

  WebSocketConnectorAssociatedPtr.prototype =
      Object.create(WebSocketConnectorPtr.prototype);
  WebSocketConnectorAssociatedPtr.prototype.constructor =
      WebSocketConnectorAssociatedPtr;

  function WebSocketConnectorProxy(receiver) {
    this.receiver_ = receiver;
  }
  WebSocketConnectorPtr.prototype.connect = function() {
    return WebSocketConnectorProxy.prototype.connect
        .apply(this.ptr.getProxy(), arguments);
  };

  WebSocketConnectorProxy.prototype.connect = function(url, requestedProtocols, siteForCookies, userAgent, handshakeClient) {
    var params_ = new WebSocketConnector_Connect_Params();
    params_.url = url;
    params_.requestedProtocols = requestedProtocols;
    params_.siteForCookies = siteForCookies;
    params_.userAgent = userAgent;
    params_.handshakeClient = handshakeClient;
    var builder = new codec.MessageV0Builder(
        kWebSocketConnector_Connect_Name,
        codec.align(WebSocketConnector_Connect_Params.encodedSize));
    builder.encodeStruct(WebSocketConnector_Connect_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function WebSocketConnectorStub(delegate) {
    this.delegate_ = delegate;
  }
  WebSocketConnectorStub.prototype.connect = function(url, requestedProtocols, siteForCookies, userAgent, handshakeClient) {
    return this.delegate_ && this.delegate_.connect && this.delegate_.connect(url, requestedProtocols, siteForCookies, userAgent, handshakeClient);
  }

  WebSocketConnectorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebSocketConnector_Connect_Name:
      var params = reader.decodeStruct(WebSocketConnector_Connect_Params);
      this.connect(params.url, params.requestedProtocols, params.siteForCookies, params.userAgent, params.handshakeClient);
      return true;
    default:
      return false;
    }
  };

  WebSocketConnectorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateWebSocketConnectorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWebSocketConnector_Connect_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebSocketConnector_Connect_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWebSocketConnectorResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var WebSocketConnector = {
    name: 'blink.mojom.WebSocketConnector',
    kVersion: 0,
    ptrClass: WebSocketConnectorPtr,
    proxyClass: WebSocketConnectorProxy,
    stubClass: WebSocketConnectorStub,
    validateRequest: validateWebSocketConnectorRequest,
    validateResponse: null,
  };
  WebSocketConnectorStub.prototype.validator = validateWebSocketConnectorRequest;
  WebSocketConnectorProxy.prototype.validator = null;
  exports.WebSocketConnector = WebSocketConnector;
  exports.WebSocketConnectorPtr = WebSocketConnectorPtr;
  exports.WebSocketConnectorAssociatedPtr = WebSocketConnectorAssociatedPtr;
})();