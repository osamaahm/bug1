// third_party/blink/public/mojom/service_worker/service_worker_object.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/service_worker/service_worker_object.mojom';
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
  var transferable_message$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/messaging/transferable_message.mojom', '../messaging/transferable_message.mojom.js');
  }
  var service_worker_state$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/service_worker/service_worker_state.mojom', 'service_worker_state.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var INVALID_SERVICE_WORKER_VERSION_ID = -1;

  function ServiceWorkerObjectInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceWorkerObjectInfo.prototype.initDefaults_ = function() {
    this.versionId = INVALID_SERVICE_WORKER_VERSION_ID;
    this.state = service_worker_state$.ServiceWorkerState.kParsed;
    this.receiver = new associatedBindings.AssociatedInterfaceRequest();
    this.url = null;
    this.hostRemote = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  ServiceWorkerObjectInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceWorkerObjectInfo.validate = function(messageValidator, offset) {
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



    // validate ServiceWorkerObjectInfo.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, service_worker_state$.ServiceWorkerState);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerObjectInfo.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerObjectInfo.hostRemote
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 24, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerObjectInfo.receiver
    err = messageValidator.validateAssociatedInterfaceRequest(offset + codec.kStructHeaderSize + 12, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceWorkerObjectInfo.encodedSize = codec.kStructHeaderSize + 32;

  ServiceWorkerObjectInfo.decode = function(decoder) {
    var packed;
    var val = new ServiceWorkerObjectInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.versionId = decoder.decodeStruct(codec.Int64);
    val.state = decoder.decodeStruct(codec.Int32);
    val.receiver = decoder.decodeStruct(codec.AssociatedInterfaceRequest);
    val.url = decoder.decodeStructPointer(url$.Url);
    val.hostRemote = decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  ServiceWorkerObjectInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceWorkerObjectInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.versionId);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.encodeStruct(codec.AssociatedInterfaceRequest, val.receiver);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.hostRemote);
  };
  function ServiceWorkerObjectHost_PostMessageToServiceWorker_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceWorkerObjectHost_PostMessageToServiceWorker_Params.prototype.initDefaults_ = function() {
    this.message = null;
  };
  ServiceWorkerObjectHost_PostMessageToServiceWorker_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceWorkerObjectHost_PostMessageToServiceWorker_Params.validate = function(messageValidator, offset) {
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


    // validate ServiceWorkerObjectHost_PostMessageToServiceWorker_Params.message
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, transferable_message$.TransferableMessage, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceWorkerObjectHost_PostMessageToServiceWorker_Params.encodedSize = codec.kStructHeaderSize + 8;

  ServiceWorkerObjectHost_PostMessageToServiceWorker_Params.decode = function(decoder) {
    var packed;
    var val = new ServiceWorkerObjectHost_PostMessageToServiceWorker_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message = decoder.decodeStructPointer(transferable_message$.TransferableMessage);
    return val;
  };

  ServiceWorkerObjectHost_PostMessageToServiceWorker_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceWorkerObjectHost_PostMessageToServiceWorker_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(transferable_message$.TransferableMessage, val.message);
  };
  function ServiceWorkerObjectHost_TerminateForTesting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceWorkerObjectHost_TerminateForTesting_Params.prototype.initDefaults_ = function() {
  };
  ServiceWorkerObjectHost_TerminateForTesting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceWorkerObjectHost_TerminateForTesting_Params.validate = function(messageValidator, offset) {
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

  ServiceWorkerObjectHost_TerminateForTesting_Params.encodedSize = codec.kStructHeaderSize + 0;

  ServiceWorkerObjectHost_TerminateForTesting_Params.decode = function(decoder) {
    var packed;
    var val = new ServiceWorkerObjectHost_TerminateForTesting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ServiceWorkerObjectHost_TerminateForTesting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceWorkerObjectHost_TerminateForTesting_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ServiceWorkerObjectHost_TerminateForTesting_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceWorkerObjectHost_TerminateForTesting_ResponseParams.prototype.initDefaults_ = function() {
  };
  ServiceWorkerObjectHost_TerminateForTesting_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceWorkerObjectHost_TerminateForTesting_ResponseParams.validate = function(messageValidator, offset) {
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

  ServiceWorkerObjectHost_TerminateForTesting_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  ServiceWorkerObjectHost_TerminateForTesting_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ServiceWorkerObjectHost_TerminateForTesting_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ServiceWorkerObjectHost_TerminateForTesting_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceWorkerObjectHost_TerminateForTesting_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function ServiceWorkerObject_StateChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceWorkerObject_StateChanged_Params.prototype.initDefaults_ = function() {
    this.state = 0;
  };
  ServiceWorkerObject_StateChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceWorkerObject_StateChanged_Params.validate = function(messageValidator, offset) {
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


    // validate ServiceWorkerObject_StateChanged_Params.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, service_worker_state$.ServiceWorkerState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceWorkerObject_StateChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  ServiceWorkerObject_StateChanged_Params.decode = function(decoder) {
    var packed;
    var val = new ServiceWorkerObject_StateChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ServiceWorkerObject_StateChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceWorkerObject_StateChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kServiceWorkerObjectHost_PostMessageToServiceWorker_Name = 0;
  var kServiceWorkerObjectHost_TerminateForTesting_Name = 1;

  function ServiceWorkerObjectHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ServiceWorkerObjectHost,
                                                   handleOrPtrInfo);
  }

  function ServiceWorkerObjectHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ServiceWorkerObjectHost, associatedInterfacePtrInfo);
  }

  ServiceWorkerObjectHostAssociatedPtr.prototype =
      Object.create(ServiceWorkerObjectHostPtr.prototype);
  ServiceWorkerObjectHostAssociatedPtr.prototype.constructor =
      ServiceWorkerObjectHostAssociatedPtr;

  function ServiceWorkerObjectHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  ServiceWorkerObjectHostPtr.prototype.postMessageToServiceWorker = function() {
    return ServiceWorkerObjectHostProxy.prototype.postMessageToServiceWorker
        .apply(this.ptr.getProxy(), arguments);
  };

  ServiceWorkerObjectHostProxy.prototype.postMessageToServiceWorker = function(message) {
    var params_ = new ServiceWorkerObjectHost_PostMessageToServiceWorker_Params();
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kServiceWorkerObjectHost_PostMessageToServiceWorker_Name,
        codec.align(ServiceWorkerObjectHost_PostMessageToServiceWorker_Params.encodedSize));
    builder.encodeStruct(ServiceWorkerObjectHost_PostMessageToServiceWorker_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ServiceWorkerObjectHostPtr.prototype.terminateForTesting = function() {
    return ServiceWorkerObjectHostProxy.prototype.terminateForTesting
        .apply(this.ptr.getProxy(), arguments);
  };

  ServiceWorkerObjectHostProxy.prototype.terminateForTesting = function() {
    var params_ = new ServiceWorkerObjectHost_TerminateForTesting_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kServiceWorkerObjectHost_TerminateForTesting_Name,
          codec.align(ServiceWorkerObjectHost_TerminateForTesting_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ServiceWorkerObjectHost_TerminateForTesting_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ServiceWorkerObjectHost_TerminateForTesting_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ServiceWorkerObjectHostStub(delegate) {
    this.delegate_ = delegate;
  }
  ServiceWorkerObjectHostStub.prototype.postMessageToServiceWorker = function(message) {
    return this.delegate_ && this.delegate_.postMessageToServiceWorker && this.delegate_.postMessageToServiceWorker(message);
  }
  ServiceWorkerObjectHostStub.prototype.terminateForTesting = function() {
    return this.delegate_ && this.delegate_.terminateForTesting && this.delegate_.terminateForTesting();
  }

  ServiceWorkerObjectHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kServiceWorkerObjectHost_PostMessageToServiceWorker_Name:
      var params = reader.decodeStruct(ServiceWorkerObjectHost_PostMessageToServiceWorker_Params);
      this.postMessageToServiceWorker(params.message);
      return true;
    default:
      return false;
    }
  };

  ServiceWorkerObjectHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kServiceWorkerObjectHost_TerminateForTesting_Name:
      var params = reader.decodeStruct(ServiceWorkerObjectHost_TerminateForTesting_Params);
      this.terminateForTesting().then(function(response) {
        var responseParams =
            new ServiceWorkerObjectHost_TerminateForTesting_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kServiceWorkerObjectHost_TerminateForTesting_Name,
            codec.align(ServiceWorkerObjectHost_TerminateForTesting_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ServiceWorkerObjectHost_TerminateForTesting_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateServiceWorkerObjectHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kServiceWorkerObjectHost_PostMessageToServiceWorker_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ServiceWorkerObjectHost_PostMessageToServiceWorker_Params;
      break;
      case kServiceWorkerObjectHost_TerminateForTesting_Name:
        if (message.expectsResponse())
          paramsClass = ServiceWorkerObjectHost_TerminateForTesting_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateServiceWorkerObjectHostResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kServiceWorkerObjectHost_TerminateForTesting_Name:
        if (message.isResponse())
          paramsClass = ServiceWorkerObjectHost_TerminateForTesting_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ServiceWorkerObjectHost = {
    name: 'blink.mojom.ServiceWorkerObjectHost',
    kVersion: 0,
    ptrClass: ServiceWorkerObjectHostPtr,
    proxyClass: ServiceWorkerObjectHostProxy,
    stubClass: ServiceWorkerObjectHostStub,
    validateRequest: validateServiceWorkerObjectHostRequest,
    validateResponse: validateServiceWorkerObjectHostResponse,
  };
  ServiceWorkerObjectHostStub.prototype.validator = validateServiceWorkerObjectHostRequest;
  ServiceWorkerObjectHostProxy.prototype.validator = validateServiceWorkerObjectHostResponse;
  var kServiceWorkerObject_StateChanged_Name = 0;

  function ServiceWorkerObjectPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ServiceWorkerObject,
                                                   handleOrPtrInfo);
  }

  function ServiceWorkerObjectAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ServiceWorkerObject, associatedInterfacePtrInfo);
  }

  ServiceWorkerObjectAssociatedPtr.prototype =
      Object.create(ServiceWorkerObjectPtr.prototype);
  ServiceWorkerObjectAssociatedPtr.prototype.constructor =
      ServiceWorkerObjectAssociatedPtr;

  function ServiceWorkerObjectProxy(receiver) {
    this.receiver_ = receiver;
  }
  ServiceWorkerObjectPtr.prototype.stateChanged = function() {
    return ServiceWorkerObjectProxy.prototype.stateChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  ServiceWorkerObjectProxy.prototype.stateChanged = function(state) {
    var params_ = new ServiceWorkerObject_StateChanged_Params();
    params_.state = state;
    var builder = new codec.MessageV0Builder(
        kServiceWorkerObject_StateChanged_Name,
        codec.align(ServiceWorkerObject_StateChanged_Params.encodedSize));
    builder.encodeStruct(ServiceWorkerObject_StateChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ServiceWorkerObjectStub(delegate) {
    this.delegate_ = delegate;
  }
  ServiceWorkerObjectStub.prototype.stateChanged = function(state) {
    return this.delegate_ && this.delegate_.stateChanged && this.delegate_.stateChanged(state);
  }

  ServiceWorkerObjectStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kServiceWorkerObject_StateChanged_Name:
      var params = reader.decodeStruct(ServiceWorkerObject_StateChanged_Params);
      this.stateChanged(params.state);
      return true;
    default:
      return false;
    }
  };

  ServiceWorkerObjectStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateServiceWorkerObjectRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kServiceWorkerObject_StateChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ServiceWorkerObject_StateChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateServiceWorkerObjectResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ServiceWorkerObject = {
    name: 'blink.mojom.ServiceWorkerObject',
    kVersion: 0,
    ptrClass: ServiceWorkerObjectPtr,
    proxyClass: ServiceWorkerObjectProxy,
    stubClass: ServiceWorkerObjectStub,
    validateRequest: validateServiceWorkerObjectRequest,
    validateResponse: null,
  };
  ServiceWorkerObjectStub.prototype.validator = validateServiceWorkerObjectRequest;
  ServiceWorkerObjectProxy.prototype.validator = null;
  exports.INVALID_SERVICE_WORKER_VERSION_ID = INVALID_SERVICE_WORKER_VERSION_ID;
  exports.ServiceWorkerObjectInfo = ServiceWorkerObjectInfo;
  exports.ServiceWorkerObjectHost = ServiceWorkerObjectHost;
  exports.ServiceWorkerObjectHostPtr = ServiceWorkerObjectHostPtr;
  exports.ServiceWorkerObjectHostAssociatedPtr = ServiceWorkerObjectHostAssociatedPtr;
  exports.ServiceWorkerObject = ServiceWorkerObject;
  exports.ServiceWorkerObjectPtr = ServiceWorkerObjectPtr;
  exports.ServiceWorkerObjectAssociatedPtr = ServiceWorkerObjectAssociatedPtr;
})();