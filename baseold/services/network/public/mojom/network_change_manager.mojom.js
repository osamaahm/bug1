// services/network/public/mojom/network_change_manager.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/network_change_manager.mojom';
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


  var ConnectionType = {};
  ConnectionType.CONNECTION_UNKNOWN = 0;
  ConnectionType.CONNECTION_ETHERNET = 1;
  ConnectionType.CONNECTION_WIFI = 2;
  ConnectionType.CONNECTION_2G = 3;
  ConnectionType.CONNECTION_3G = 4;
  ConnectionType.CONNECTION_4G = 5;
  ConnectionType.CONNECTION_NONE = 6;
  ConnectionType.CONNECTION_BLUETOOTH = 7;
  ConnectionType.CONNECTION_LAST = ConnectionType.CONNECTION_BLUETOOTH;
  ConnectionType.MIN_VALUE = 0,
  ConnectionType.MAX_VALUE = 7,

  ConnectionType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return true;
    }
    return false;
  };

  ConnectionType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ConnectionSubtype = {};
  ConnectionSubtype.SUBTYPE_UNKNOWN = 0;
  ConnectionSubtype.SUBTYPE_NONE = ConnectionSubtype.SUBTYPE_UNKNOWN + 1;
  ConnectionSubtype.SUBTYPE_OTHER = ConnectionSubtype.SUBTYPE_NONE + 1;
  ConnectionSubtype.SUBTYPE_GSM = ConnectionSubtype.SUBTYPE_OTHER + 1;
  ConnectionSubtype.SUBTYPE_IDEN = ConnectionSubtype.SUBTYPE_GSM + 1;
  ConnectionSubtype.SUBTYPE_CDMA = ConnectionSubtype.SUBTYPE_IDEN + 1;
  ConnectionSubtype.SUBTYPE_1XRTT = ConnectionSubtype.SUBTYPE_CDMA + 1;
  ConnectionSubtype.SUBTYPE_GPRS = ConnectionSubtype.SUBTYPE_1XRTT + 1;
  ConnectionSubtype.SUBTYPE_EDGE = ConnectionSubtype.SUBTYPE_GPRS + 1;
  ConnectionSubtype.SUBTYPE_UMTS = ConnectionSubtype.SUBTYPE_EDGE + 1;
  ConnectionSubtype.SUBTYPE_EVDO_REV_0 = ConnectionSubtype.SUBTYPE_UMTS + 1;
  ConnectionSubtype.SUBTYPE_EVDO_REV_A = ConnectionSubtype.SUBTYPE_EVDO_REV_0 + 1;
  ConnectionSubtype.SUBTYPE_HSPA = ConnectionSubtype.SUBTYPE_EVDO_REV_A + 1;
  ConnectionSubtype.SUBTYPE_EVDO_REV_B = ConnectionSubtype.SUBTYPE_HSPA + 1;
  ConnectionSubtype.SUBTYPE_HSDPA = ConnectionSubtype.SUBTYPE_EVDO_REV_B + 1;
  ConnectionSubtype.SUBTYPE_HSUPA = ConnectionSubtype.SUBTYPE_HSDPA + 1;
  ConnectionSubtype.SUBTYPE_EHRPD = ConnectionSubtype.SUBTYPE_HSUPA + 1;
  ConnectionSubtype.SUBTYPE_HSPAP = ConnectionSubtype.SUBTYPE_EHRPD + 1;
  ConnectionSubtype.SUBTYPE_LTE = ConnectionSubtype.SUBTYPE_HSPAP + 1;
  ConnectionSubtype.SUBTYPE_LTE_ADVANCED = ConnectionSubtype.SUBTYPE_LTE + 1;
  ConnectionSubtype.SUBTYPE_BLUETOOTH_1_2 = ConnectionSubtype.SUBTYPE_LTE_ADVANCED + 1;
  ConnectionSubtype.SUBTYPE_BLUETOOTH_2_1 = ConnectionSubtype.SUBTYPE_BLUETOOTH_1_2 + 1;
  ConnectionSubtype.SUBTYPE_BLUETOOTH_3_0 = ConnectionSubtype.SUBTYPE_BLUETOOTH_2_1 + 1;
  ConnectionSubtype.SUBTYPE_BLUETOOTH_4_0 = ConnectionSubtype.SUBTYPE_BLUETOOTH_3_0 + 1;
  ConnectionSubtype.SUBTYPE_ETHERNET = ConnectionSubtype.SUBTYPE_BLUETOOTH_4_0 + 1;
  ConnectionSubtype.SUBTYPE_FAST_ETHERNET = ConnectionSubtype.SUBTYPE_ETHERNET + 1;
  ConnectionSubtype.SUBTYPE_GIGABIT_ETHERNET = ConnectionSubtype.SUBTYPE_FAST_ETHERNET + 1;
  ConnectionSubtype.SUBTYPE_10_GIGABIT_ETHERNET = ConnectionSubtype.SUBTYPE_GIGABIT_ETHERNET + 1;
  ConnectionSubtype.SUBTYPE_WIFI_B = ConnectionSubtype.SUBTYPE_10_GIGABIT_ETHERNET + 1;
  ConnectionSubtype.SUBTYPE_WIFI_G = ConnectionSubtype.SUBTYPE_WIFI_B + 1;
  ConnectionSubtype.SUBTYPE_WIFI_N = ConnectionSubtype.SUBTYPE_WIFI_G + 1;
  ConnectionSubtype.SUBTYPE_WIFI_AC = ConnectionSubtype.SUBTYPE_WIFI_N + 1;
  ConnectionSubtype.SUBTYPE_WIFI_AD = ConnectionSubtype.SUBTYPE_WIFI_AC + 1;
  ConnectionSubtype.SUBTYPE_LAST = ConnectionSubtype.SUBTYPE_WIFI_AD;
  ConnectionSubtype.MIN_VALUE = 0,
  ConnectionSubtype.MAX_VALUE = 32,

  ConnectionSubtype.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
      return true;
    }
    return false;
  };

  ConnectionSubtype.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function NetworkChangeManagerClient_OnInitialConnectionType_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkChangeManagerClient_OnInitialConnectionType_Params.prototype.initDefaults_ = function() {
    this.type = 0;
  };
  NetworkChangeManagerClient_OnInitialConnectionType_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkChangeManagerClient_OnInitialConnectionType_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkChangeManagerClient_OnInitialConnectionType_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ConnectionType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkChangeManagerClient_OnInitialConnectionType_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkChangeManagerClient_OnInitialConnectionType_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkChangeManagerClient_OnInitialConnectionType_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkChangeManagerClient_OnInitialConnectionType_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkChangeManagerClient_OnInitialConnectionType_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkChangeManagerClient_OnNetworkChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkChangeManagerClient_OnNetworkChanged_Params.prototype.initDefaults_ = function() {
    this.type = 0;
  };
  NetworkChangeManagerClient_OnNetworkChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkChangeManagerClient_OnNetworkChanged_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkChangeManagerClient_OnNetworkChanged_Params.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ConnectionType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkChangeManagerClient_OnNetworkChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkChangeManagerClient_OnNetworkChanged_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkChangeManagerClient_OnNetworkChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkChangeManagerClient_OnNetworkChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkChangeManagerClient_OnNetworkChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function NetworkChangeManager_RequestNotifications_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkChangeManager_RequestNotifications_Params.prototype.initDefaults_ = function() {
    this.clientPtr = new NetworkChangeManagerClientPtr();
  };
  NetworkChangeManager_RequestNotifications_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkChangeManager_RequestNotifications_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkChangeManager_RequestNotifications_Params.clientPtr
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkChangeManager_RequestNotifications_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkChangeManager_RequestNotifications_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkChangeManager_RequestNotifications_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.clientPtr = decoder.decodeStruct(new codec.Interface(NetworkChangeManagerClientPtr));
    return val;
  };

  NetworkChangeManager_RequestNotifications_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkChangeManager_RequestNotifications_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(NetworkChangeManagerClientPtr), val.clientPtr);
  };
  function NetworkChangeManager_OnNetworkChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkChangeManager_OnNetworkChanged_Params.prototype.initDefaults_ = function() {
    this.dnsChanged = false;
    this.ipAddressChanged = false;
    this.connectionTypeChanged = false;
    this.connectionSubtypeChanged = false;
    this.newConnectionType = 0;
    this.newConnectionSubtype = 0;
  };
  NetworkChangeManager_OnNetworkChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkChangeManager_OnNetworkChanged_Params.validate = function(messageValidator, offset) {
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





    // validate NetworkChangeManager_OnNetworkChanged_Params.newConnectionType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, ConnectionType);
    if (err !== validator.validationError.NONE)
        return err;



    // validate NetworkChangeManager_OnNetworkChanged_Params.newConnectionSubtype
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, ConnectionSubtype);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkChangeManager_OnNetworkChanged_Params.encodedSize = codec.kStructHeaderSize + 16;

  NetworkChangeManager_OnNetworkChanged_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkChangeManager_OnNetworkChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.dnsChanged = (packed >> 0) & 1 ? true : false;
    val.ipAddressChanged = (packed >> 1) & 1 ? true : false;
    val.connectionTypeChanged = (packed >> 2) & 1 ? true : false;
    val.connectionSubtypeChanged = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.newConnectionType = decoder.decodeStruct(codec.Int32);
    val.newConnectionSubtype = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NetworkChangeManager_OnNetworkChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkChangeManager_OnNetworkChanged_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.dnsChanged & 1) << 0
    packed |= (val.ipAddressChanged & 1) << 1
    packed |= (val.connectionTypeChanged & 1) << 2
    packed |= (val.connectionSubtypeChanged & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.newConnectionType);
    encoder.encodeStruct(codec.Int32, val.newConnectionSubtype);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kNetworkChangeManagerClient_OnInitialConnectionType_Name = 0;
  var kNetworkChangeManagerClient_OnNetworkChanged_Name = 1;

  function NetworkChangeManagerClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NetworkChangeManagerClient,
                                                   handleOrPtrInfo);
  }

  function NetworkChangeManagerClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NetworkChangeManagerClient, associatedInterfacePtrInfo);
  }

  NetworkChangeManagerClientAssociatedPtr.prototype =
      Object.create(NetworkChangeManagerClientPtr.prototype);
  NetworkChangeManagerClientAssociatedPtr.prototype.constructor =
      NetworkChangeManagerClientAssociatedPtr;

  function NetworkChangeManagerClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  NetworkChangeManagerClientPtr.prototype.onInitialConnectionType = function() {
    return NetworkChangeManagerClientProxy.prototype.onInitialConnectionType
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkChangeManagerClientProxy.prototype.onInitialConnectionType = function(type) {
    var params_ = new NetworkChangeManagerClient_OnInitialConnectionType_Params();
    params_.type = type;
    var builder = new codec.MessageV0Builder(
        kNetworkChangeManagerClient_OnInitialConnectionType_Name,
        codec.align(NetworkChangeManagerClient_OnInitialConnectionType_Params.encodedSize));
    builder.encodeStruct(NetworkChangeManagerClient_OnInitialConnectionType_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkChangeManagerClientPtr.prototype.onNetworkChanged = function() {
    return NetworkChangeManagerClientProxy.prototype.onNetworkChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkChangeManagerClientProxy.prototype.onNetworkChanged = function(type) {
    var params_ = new NetworkChangeManagerClient_OnNetworkChanged_Params();
    params_.type = type;
    var builder = new codec.MessageV0Builder(
        kNetworkChangeManagerClient_OnNetworkChanged_Name,
        codec.align(NetworkChangeManagerClient_OnNetworkChanged_Params.encodedSize));
    builder.encodeStruct(NetworkChangeManagerClient_OnNetworkChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NetworkChangeManagerClientStub(delegate) {
    this.delegate_ = delegate;
  }
  NetworkChangeManagerClientStub.prototype.onInitialConnectionType = function(type) {
    return this.delegate_ && this.delegate_.onInitialConnectionType && this.delegate_.onInitialConnectionType(type);
  }
  NetworkChangeManagerClientStub.prototype.onNetworkChanged = function(type) {
    return this.delegate_ && this.delegate_.onNetworkChanged && this.delegate_.onNetworkChanged(type);
  }

  NetworkChangeManagerClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkChangeManagerClient_OnInitialConnectionType_Name:
      var params = reader.decodeStruct(NetworkChangeManagerClient_OnInitialConnectionType_Params);
      this.onInitialConnectionType(params.type);
      return true;
    case kNetworkChangeManagerClient_OnNetworkChanged_Name:
      var params = reader.decodeStruct(NetworkChangeManagerClient_OnNetworkChanged_Params);
      this.onNetworkChanged(params.type);
      return true;
    default:
      return false;
    }
  };

  NetworkChangeManagerClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateNetworkChangeManagerClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkChangeManagerClient_OnInitialConnectionType_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkChangeManagerClient_OnInitialConnectionType_Params;
      break;
      case kNetworkChangeManagerClient_OnNetworkChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkChangeManagerClient_OnNetworkChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkChangeManagerClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var NetworkChangeManagerClient = {
    name: 'network.mojom.NetworkChangeManagerClient',
    kVersion: 0,
    ptrClass: NetworkChangeManagerClientPtr,
    proxyClass: NetworkChangeManagerClientProxy,
    stubClass: NetworkChangeManagerClientStub,
    validateRequest: validateNetworkChangeManagerClientRequest,
    validateResponse: null,
  };
  NetworkChangeManagerClientStub.prototype.validator = validateNetworkChangeManagerClientRequest;
  NetworkChangeManagerClientProxy.prototype.validator = null;
  var kNetworkChangeManager_RequestNotifications_Name = 0;
  var kNetworkChangeManager_OnNetworkChanged_Name = 1;

  function NetworkChangeManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NetworkChangeManager,
                                                   handleOrPtrInfo);
  }

  function NetworkChangeManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NetworkChangeManager, associatedInterfacePtrInfo);
  }

  NetworkChangeManagerAssociatedPtr.prototype =
      Object.create(NetworkChangeManagerPtr.prototype);
  NetworkChangeManagerAssociatedPtr.prototype.constructor =
      NetworkChangeManagerAssociatedPtr;

  function NetworkChangeManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  NetworkChangeManagerPtr.prototype.requestNotifications = function() {
    return NetworkChangeManagerProxy.prototype.requestNotifications
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkChangeManagerProxy.prototype.requestNotifications = function(clientPtr) {
    var params_ = new NetworkChangeManager_RequestNotifications_Params();
    params_.clientPtr = clientPtr;
    var builder = new codec.MessageV0Builder(
        kNetworkChangeManager_RequestNotifications_Name,
        codec.align(NetworkChangeManager_RequestNotifications_Params.encodedSize));
    builder.encodeStruct(NetworkChangeManager_RequestNotifications_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  NetworkChangeManagerPtr.prototype.onNetworkChanged = function() {
    return NetworkChangeManagerProxy.prototype.onNetworkChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkChangeManagerProxy.prototype.onNetworkChanged = function(dnsChanged, ipAddressChanged, connectionTypeChanged, newConnectionType, connectionSubtypeChanged, newConnectionSubtype) {
    var params_ = new NetworkChangeManager_OnNetworkChanged_Params();
    params_.dnsChanged = dnsChanged;
    params_.ipAddressChanged = ipAddressChanged;
    params_.connectionTypeChanged = connectionTypeChanged;
    params_.newConnectionType = newConnectionType;
    params_.connectionSubtypeChanged = connectionSubtypeChanged;
    params_.newConnectionSubtype = newConnectionSubtype;
    var builder = new codec.MessageV0Builder(
        kNetworkChangeManager_OnNetworkChanged_Name,
        codec.align(NetworkChangeManager_OnNetworkChanged_Params.encodedSize));
    builder.encodeStruct(NetworkChangeManager_OnNetworkChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NetworkChangeManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  NetworkChangeManagerStub.prototype.requestNotifications = function(clientPtr) {
    return this.delegate_ && this.delegate_.requestNotifications && this.delegate_.requestNotifications(clientPtr);
  }
  NetworkChangeManagerStub.prototype.onNetworkChanged = function(dnsChanged, ipAddressChanged, connectionTypeChanged, newConnectionType, connectionSubtypeChanged, newConnectionSubtype) {
    return this.delegate_ && this.delegate_.onNetworkChanged && this.delegate_.onNetworkChanged(dnsChanged, ipAddressChanged, connectionTypeChanged, newConnectionType, connectionSubtypeChanged, newConnectionSubtype);
  }

  NetworkChangeManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkChangeManager_RequestNotifications_Name:
      var params = reader.decodeStruct(NetworkChangeManager_RequestNotifications_Params);
      this.requestNotifications(params.clientPtr);
      return true;
    case kNetworkChangeManager_OnNetworkChanged_Name:
      var params = reader.decodeStruct(NetworkChangeManager_OnNetworkChanged_Params);
      this.onNetworkChanged(params.dnsChanged, params.ipAddressChanged, params.connectionTypeChanged, params.newConnectionType, params.connectionSubtypeChanged, params.newConnectionSubtype);
      return true;
    default:
      return false;
    }
  };

  NetworkChangeManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateNetworkChangeManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkChangeManager_RequestNotifications_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkChangeManager_RequestNotifications_Params;
      break;
      case kNetworkChangeManager_OnNetworkChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkChangeManager_OnNetworkChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkChangeManagerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var NetworkChangeManager = {
    name: 'network.mojom.NetworkChangeManager',
    kVersion: 0,
    ptrClass: NetworkChangeManagerPtr,
    proxyClass: NetworkChangeManagerProxy,
    stubClass: NetworkChangeManagerStub,
    validateRequest: validateNetworkChangeManagerRequest,
    validateResponse: null,
  };
  NetworkChangeManagerStub.prototype.validator = validateNetworkChangeManagerRequest;
  NetworkChangeManagerProxy.prototype.validator = null;
  exports.ConnectionType = ConnectionType;
  exports.ConnectionSubtype = ConnectionSubtype;
  exports.NetworkChangeManagerClient = NetworkChangeManagerClient;
  exports.NetworkChangeManagerClientPtr = NetworkChangeManagerClientPtr;
  exports.NetworkChangeManagerClientAssociatedPtr = NetworkChangeManagerClientAssociatedPtr;
  exports.NetworkChangeManager = NetworkChangeManager;
  exports.NetworkChangeManagerPtr = NetworkChangeManagerPtr;
  exports.NetworkChangeManagerAssociatedPtr = NetworkChangeManagerAssociatedPtr;
})();