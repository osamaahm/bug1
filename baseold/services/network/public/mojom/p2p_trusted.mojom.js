// services/network/public/mojom/p2p_trusted.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/p2p_trusted.mojom';
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
  var p2p$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/p2p.mojom', 'p2p.mojom.js');
  }



  function P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params.prototype.initDefaults_ = function() {
  };
  P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params.validate = function(messageValidator, offset) {
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

  P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params.encodedSize = codec.kStructHeaderSize + 0;

  P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params.decode = function(decoder) {
    var packed;
    var val = new P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function P2PTrustedSocketManagerClient_DumpPacket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PTrustedSocketManagerClient_DumpPacket_Params.prototype.initDefaults_ = function() {
    this.packetHeader = null;
    this.packetLength = 0;
    this.incoming = false;
  };
  P2PTrustedSocketManagerClient_DumpPacket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PTrustedSocketManagerClient_DumpPacket_Params.validate = function(messageValidator, offset) {
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


    // validate P2PTrustedSocketManagerClient_DumpPacket_Params.packetHeader
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  P2PTrustedSocketManagerClient_DumpPacket_Params.encodedSize = codec.kStructHeaderSize + 24;

  P2PTrustedSocketManagerClient_DumpPacket_Params.decode = function(decoder) {
    var packed;
    var val = new P2PTrustedSocketManagerClient_DumpPacket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.packetHeader = decoder.decodeArrayPointer(codec.Uint8);
    val.packetLength = decoder.decodeStruct(codec.Uint64);
    packed = decoder.readUint8();
    val.incoming = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  P2PTrustedSocketManagerClient_DumpPacket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PTrustedSocketManagerClient_DumpPacket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.packetHeader);
    encoder.encodeStruct(codec.Uint64, val.packetLength);
    packed = 0;
    packed |= (val.incoming & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function P2PTrustedSocketManager_StartRtpDump_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PTrustedSocketManager_StartRtpDump_Params.prototype.initDefaults_ = function() {
    this.incoming = false;
    this.outgoing = false;
  };
  P2PTrustedSocketManager_StartRtpDump_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PTrustedSocketManager_StartRtpDump_Params.validate = function(messageValidator, offset) {
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

  P2PTrustedSocketManager_StartRtpDump_Params.encodedSize = codec.kStructHeaderSize + 8;

  P2PTrustedSocketManager_StartRtpDump_Params.decode = function(decoder) {
    var packed;
    var val = new P2PTrustedSocketManager_StartRtpDump_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.incoming = (packed >> 0) & 1 ? true : false;
    val.outgoing = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  P2PTrustedSocketManager_StartRtpDump_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PTrustedSocketManager_StartRtpDump_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.incoming & 1) << 0
    packed |= (val.outgoing & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function P2PTrustedSocketManager_StopRtpDump_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  P2PTrustedSocketManager_StopRtpDump_Params.prototype.initDefaults_ = function() {
    this.incoming = false;
    this.outgoing = false;
  };
  P2PTrustedSocketManager_StopRtpDump_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  P2PTrustedSocketManager_StopRtpDump_Params.validate = function(messageValidator, offset) {
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

  P2PTrustedSocketManager_StopRtpDump_Params.encodedSize = codec.kStructHeaderSize + 8;

  P2PTrustedSocketManager_StopRtpDump_Params.decode = function(decoder) {
    var packed;
    var val = new P2PTrustedSocketManager_StopRtpDump_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.incoming = (packed >> 0) & 1 ? true : false;
    val.outgoing = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  P2PTrustedSocketManager_StopRtpDump_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(P2PTrustedSocketManager_StopRtpDump_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.incoming & 1) << 0
    packed |= (val.outgoing & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kP2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Name = 0;
  var kP2PTrustedSocketManagerClient_DumpPacket_Name = 1;

  function P2PTrustedSocketManagerClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(P2PTrustedSocketManagerClient,
                                                   handleOrPtrInfo);
  }

  function P2PTrustedSocketManagerClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        P2PTrustedSocketManagerClient, associatedInterfacePtrInfo);
  }

  P2PTrustedSocketManagerClientAssociatedPtr.prototype =
      Object.create(P2PTrustedSocketManagerClientPtr.prototype);
  P2PTrustedSocketManagerClientAssociatedPtr.prototype.constructor =
      P2PTrustedSocketManagerClientAssociatedPtr;

  function P2PTrustedSocketManagerClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  P2PTrustedSocketManagerClientPtr.prototype.invalidSocketPortRangeRequested = function() {
    return P2PTrustedSocketManagerClientProxy.prototype.invalidSocketPortRangeRequested
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PTrustedSocketManagerClientProxy.prototype.invalidSocketPortRangeRequested = function() {
    var params_ = new P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params();
    var builder = new codec.MessageV0Builder(
        kP2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Name,
        codec.align(P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params.encodedSize));
    builder.encodeStruct(P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  P2PTrustedSocketManagerClientPtr.prototype.dumpPacket = function() {
    return P2PTrustedSocketManagerClientProxy.prototype.dumpPacket
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PTrustedSocketManagerClientProxy.prototype.dumpPacket = function(packetHeader, packetLength, incoming) {
    var params_ = new P2PTrustedSocketManagerClient_DumpPacket_Params();
    params_.packetHeader = packetHeader;
    params_.packetLength = packetLength;
    params_.incoming = incoming;
    var builder = new codec.MessageV0Builder(
        kP2PTrustedSocketManagerClient_DumpPacket_Name,
        codec.align(P2PTrustedSocketManagerClient_DumpPacket_Params.encodedSize));
    builder.encodeStruct(P2PTrustedSocketManagerClient_DumpPacket_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function P2PTrustedSocketManagerClientStub(delegate) {
    this.delegate_ = delegate;
  }
  P2PTrustedSocketManagerClientStub.prototype.invalidSocketPortRangeRequested = function() {
    return this.delegate_ && this.delegate_.invalidSocketPortRangeRequested && this.delegate_.invalidSocketPortRangeRequested();
  }
  P2PTrustedSocketManagerClientStub.prototype.dumpPacket = function(packetHeader, packetLength, incoming) {
    return this.delegate_ && this.delegate_.dumpPacket && this.delegate_.dumpPacket(packetHeader, packetLength, incoming);
  }

  P2PTrustedSocketManagerClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kP2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Name:
      var params = reader.decodeStruct(P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params);
      this.invalidSocketPortRangeRequested();
      return true;
    case kP2PTrustedSocketManagerClient_DumpPacket_Name:
      var params = reader.decodeStruct(P2PTrustedSocketManagerClient_DumpPacket_Params);
      this.dumpPacket(params.packetHeader, params.packetLength, params.incoming);
      return true;
    default:
      return false;
    }
  };

  P2PTrustedSocketManagerClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateP2PTrustedSocketManagerClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kP2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PTrustedSocketManagerClient_InvalidSocketPortRangeRequested_Params;
      break;
      case kP2PTrustedSocketManagerClient_DumpPacket_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PTrustedSocketManagerClient_DumpPacket_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateP2PTrustedSocketManagerClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var P2PTrustedSocketManagerClient = {
    name: 'network.mojom.P2PTrustedSocketManagerClient',
    kVersion: 0,
    ptrClass: P2PTrustedSocketManagerClientPtr,
    proxyClass: P2PTrustedSocketManagerClientProxy,
    stubClass: P2PTrustedSocketManagerClientStub,
    validateRequest: validateP2PTrustedSocketManagerClientRequest,
    validateResponse: null,
  };
  P2PTrustedSocketManagerClientStub.prototype.validator = validateP2PTrustedSocketManagerClientRequest;
  P2PTrustedSocketManagerClientProxy.prototype.validator = null;
  var kP2PTrustedSocketManager_StartRtpDump_Name = 0;
  var kP2PTrustedSocketManager_StopRtpDump_Name = 1;

  function P2PTrustedSocketManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(P2PTrustedSocketManager,
                                                   handleOrPtrInfo);
  }

  function P2PTrustedSocketManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        P2PTrustedSocketManager, associatedInterfacePtrInfo);
  }

  P2PTrustedSocketManagerAssociatedPtr.prototype =
      Object.create(P2PTrustedSocketManagerPtr.prototype);
  P2PTrustedSocketManagerAssociatedPtr.prototype.constructor =
      P2PTrustedSocketManagerAssociatedPtr;

  function P2PTrustedSocketManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  P2PTrustedSocketManagerPtr.prototype.startRtpDump = function() {
    return P2PTrustedSocketManagerProxy.prototype.startRtpDump
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PTrustedSocketManagerProxy.prototype.startRtpDump = function(incoming, outgoing) {
    var params_ = new P2PTrustedSocketManager_StartRtpDump_Params();
    params_.incoming = incoming;
    params_.outgoing = outgoing;
    var builder = new codec.MessageV0Builder(
        kP2PTrustedSocketManager_StartRtpDump_Name,
        codec.align(P2PTrustedSocketManager_StartRtpDump_Params.encodedSize));
    builder.encodeStruct(P2PTrustedSocketManager_StartRtpDump_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  P2PTrustedSocketManagerPtr.prototype.stopRtpDump = function() {
    return P2PTrustedSocketManagerProxy.prototype.stopRtpDump
        .apply(this.ptr.getProxy(), arguments);
  };

  P2PTrustedSocketManagerProxy.prototype.stopRtpDump = function(incoming, outgoing) {
    var params_ = new P2PTrustedSocketManager_StopRtpDump_Params();
    params_.incoming = incoming;
    params_.outgoing = outgoing;
    var builder = new codec.MessageV0Builder(
        kP2PTrustedSocketManager_StopRtpDump_Name,
        codec.align(P2PTrustedSocketManager_StopRtpDump_Params.encodedSize));
    builder.encodeStruct(P2PTrustedSocketManager_StopRtpDump_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function P2PTrustedSocketManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  P2PTrustedSocketManagerStub.prototype.startRtpDump = function(incoming, outgoing) {
    return this.delegate_ && this.delegate_.startRtpDump && this.delegate_.startRtpDump(incoming, outgoing);
  }
  P2PTrustedSocketManagerStub.prototype.stopRtpDump = function(incoming, outgoing) {
    return this.delegate_ && this.delegate_.stopRtpDump && this.delegate_.stopRtpDump(incoming, outgoing);
  }

  P2PTrustedSocketManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kP2PTrustedSocketManager_StartRtpDump_Name:
      var params = reader.decodeStruct(P2PTrustedSocketManager_StartRtpDump_Params);
      this.startRtpDump(params.incoming, params.outgoing);
      return true;
    case kP2PTrustedSocketManager_StopRtpDump_Name:
      var params = reader.decodeStruct(P2PTrustedSocketManager_StopRtpDump_Params);
      this.stopRtpDump(params.incoming, params.outgoing);
      return true;
    default:
      return false;
    }
  };

  P2PTrustedSocketManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateP2PTrustedSocketManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kP2PTrustedSocketManager_StartRtpDump_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PTrustedSocketManager_StartRtpDump_Params;
      break;
      case kP2PTrustedSocketManager_StopRtpDump_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = P2PTrustedSocketManager_StopRtpDump_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateP2PTrustedSocketManagerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var P2PTrustedSocketManager = {
    name: 'network.mojom.P2PTrustedSocketManager',
    kVersion: 0,
    ptrClass: P2PTrustedSocketManagerPtr,
    proxyClass: P2PTrustedSocketManagerProxy,
    stubClass: P2PTrustedSocketManagerStub,
    validateRequest: validateP2PTrustedSocketManagerRequest,
    validateResponse: null,
  };
  P2PTrustedSocketManagerStub.prototype.validator = validateP2PTrustedSocketManagerRequest;
  P2PTrustedSocketManagerProxy.prototype.validator = null;
  exports.P2PTrustedSocketManagerClient = P2PTrustedSocketManagerClient;
  exports.P2PTrustedSocketManagerClientPtr = P2PTrustedSocketManagerClientPtr;
  exports.P2PTrustedSocketManagerClientAssociatedPtr = P2PTrustedSocketManagerClientAssociatedPtr;
  exports.P2PTrustedSocketManager = P2PTrustedSocketManager;
  exports.P2PTrustedSocketManagerPtr = P2PTrustedSocketManagerPtr;
  exports.P2PTrustedSocketManagerAssociatedPtr = P2PTrustedSocketManagerAssociatedPtr;
})();