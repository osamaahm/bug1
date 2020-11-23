// services/tracing/public/mojom/traced_process.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/tracing/public/mojom/traced_process.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('tracing.mojom');
  var perfetto_service$ =
      mojo.internal.exposeNamespace('tracing.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/tracing/public/mojom/perfetto_service.mojom', 'perfetto_service.mojom.js');
  }
  var tracing$ =
      mojo.internal.exposeNamespace('tracing.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/tracing/public/mojom/tracing.mojom', 'tracing.mojom.js');
  }



  function ConnectToTracingRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConnectToTracingRequest.prototype.initDefaults_ = function() {
    this.perfettoService = new perfetto_service$.PerfettoServicePtr();
    this.agentRegistry = new tracing$.AgentRegistryPtr();
  };
  ConnectToTracingRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConnectToTracingRequest.validate = function(messageValidator, offset) {
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


    // validate ConnectToTracingRequest.perfettoService
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ConnectToTracingRequest.agentRegistry
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConnectToTracingRequest.encodedSize = codec.kStructHeaderSize + 16;

  ConnectToTracingRequest.decode = function(decoder) {
    var packed;
    var val = new ConnectToTracingRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.perfettoService = decoder.decodeStruct(new codec.Interface(perfetto_service$.PerfettoServicePtr));
    val.agentRegistry = decoder.decodeStruct(new codec.Interface(tracing$.AgentRegistryPtr));
    return val;
  };

  ConnectToTracingRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConnectToTracingRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(perfetto_service$.PerfettoServicePtr), val.perfettoService);
    encoder.encodeStruct(new codec.Interface(tracing$.AgentRegistryPtr), val.agentRegistry);
  };
  function TracedProcess_ConnectToTracingService_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TracedProcess_ConnectToTracingService_Params.prototype.initDefaults_ = function() {
    this.request = null;
  };
  TracedProcess_ConnectToTracingService_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TracedProcess_ConnectToTracingService_Params.validate = function(messageValidator, offset) {
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


    // validate TracedProcess_ConnectToTracingService_Params.request
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ConnectToTracingRequest, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TracedProcess_ConnectToTracingService_Params.encodedSize = codec.kStructHeaderSize + 8;

  TracedProcess_ConnectToTracingService_Params.decode = function(decoder) {
    var packed;
    var val = new TracedProcess_ConnectToTracingService_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStructPointer(ConnectToTracingRequest);
    return val;
  };

  TracedProcess_ConnectToTracingService_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TracedProcess_ConnectToTracingService_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ConnectToTracingRequest, val.request);
  };
  function TracedProcess_ConnectToTracingService_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TracedProcess_ConnectToTracingService_ResponseParams.prototype.initDefaults_ = function() {
  };
  TracedProcess_ConnectToTracingService_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TracedProcess_ConnectToTracingService_ResponseParams.validate = function(messageValidator, offset) {
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

  TracedProcess_ConnectToTracingService_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  TracedProcess_ConnectToTracingService_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TracedProcess_ConnectToTracingService_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TracedProcess_ConnectToTracingService_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TracedProcess_ConnectToTracingService_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  var kTracedProcess_ConnectToTracingService_Name = 0;

  function TracedProcessPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(TracedProcess,
                                                   handleOrPtrInfo);
  }

  function TracedProcessAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        TracedProcess, associatedInterfacePtrInfo);
  }

  TracedProcessAssociatedPtr.prototype =
      Object.create(TracedProcessPtr.prototype);
  TracedProcessAssociatedPtr.prototype.constructor =
      TracedProcessAssociatedPtr;

  function TracedProcessProxy(receiver) {
    this.receiver_ = receiver;
  }
  TracedProcessPtr.prototype.connectToTracingService = function() {
    return TracedProcessProxy.prototype.connectToTracingService
        .apply(this.ptr.getProxy(), arguments);
  };

  TracedProcessProxy.prototype.connectToTracingService = function(request) {
    var params_ = new TracedProcess_ConnectToTracingService_Params();
    params_.request = request;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTracedProcess_ConnectToTracingService_Name,
          codec.align(TracedProcess_ConnectToTracingService_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TracedProcess_ConnectToTracingService_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TracedProcess_ConnectToTracingService_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function TracedProcessStub(delegate) {
    this.delegate_ = delegate;
  }
  TracedProcessStub.prototype.connectToTracingService = function(request) {
    return this.delegate_ && this.delegate_.connectToTracingService && this.delegate_.connectToTracingService(request);
  }

  TracedProcessStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TracedProcessStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTracedProcess_ConnectToTracingService_Name:
      var params = reader.decodeStruct(TracedProcess_ConnectToTracingService_Params);
      this.connectToTracingService(params.request).then(function(response) {
        var responseParams =
            new TracedProcess_ConnectToTracingService_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kTracedProcess_ConnectToTracingService_Name,
            codec.align(TracedProcess_ConnectToTracingService_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TracedProcess_ConnectToTracingService_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateTracedProcessRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTracedProcess_ConnectToTracingService_Name:
        if (message.expectsResponse())
          paramsClass = TracedProcess_ConnectToTracingService_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTracedProcessResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kTracedProcess_ConnectToTracingService_Name:
        if (message.isResponse())
          paramsClass = TracedProcess_ConnectToTracingService_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var TracedProcess = {
    name: 'tracing.mojom.TracedProcess',
    kVersion: 0,
    ptrClass: TracedProcessPtr,
    proxyClass: TracedProcessProxy,
    stubClass: TracedProcessStub,
    validateRequest: validateTracedProcessRequest,
    validateResponse: validateTracedProcessResponse,
  };
  TracedProcessStub.prototype.validator = validateTracedProcessRequest;
  TracedProcessProxy.prototype.validator = validateTracedProcessResponse;
  exports.ConnectToTracingRequest = ConnectToTracingRequest;
  exports.TracedProcess = TracedProcess;
  exports.TracedProcessPtr = TracedProcessPtr;
  exports.TracedProcessAssociatedPtr = TracedProcessAssociatedPtr;
})();