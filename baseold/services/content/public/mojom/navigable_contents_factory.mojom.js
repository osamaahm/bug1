// services/content/public/mojom/navigable_contents_factory.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/content/public/mojom/navigable_contents_factory.mojom';
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
  var navigable_contents$ =
      mojo.internal.exposeNamespace('content.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/content/public/mojom/navigable_contents.mojom', 'navigable_contents.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }



  function NavigableContentsParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NavigableContentsParams.prototype.initDefaults_ = function() {
    this.enableViewAutoResize = false;
    this.suppressNavigations = false;
    this.overrideBackgroundColor = false;
    this.backgroundColor = 0xFFFFFFFF;
    this.autoResizeMinSize = null;
    this.autoResizeMaxSize = null;
  };
  NavigableContentsParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NavigableContentsParams.validate = function(messageValidator, offset) {
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



    // validate NavigableContentsParams.autoResizeMinSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NavigableContentsParams.autoResizeMaxSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Size, true);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  NavigableContentsParams.encodedSize = codec.kStructHeaderSize + 24;

  NavigableContentsParams.decode = function(decoder) {
    var packed;
    var val = new NavigableContentsParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.enableViewAutoResize = (packed >> 0) & 1 ? true : false;
    val.suppressNavigations = (packed >> 1) & 1 ? true : false;
    val.overrideBackgroundColor = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.backgroundColor = decoder.decodeStruct(codec.Uint32);
    val.autoResizeMinSize = decoder.decodeStructPointer(geometry$.Size);
    val.autoResizeMaxSize = decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  NavigableContentsParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NavigableContentsParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.enableViewAutoResize & 1) << 0
    packed |= (val.suppressNavigations & 1) << 1
    packed |= (val.overrideBackgroundColor & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.backgroundColor);
    encoder.encodeStructPointer(geometry$.Size, val.autoResizeMinSize);
    encoder.encodeStructPointer(geometry$.Size, val.autoResizeMaxSize);
  };
  function NavigableContentsFactory_CreateContents_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NavigableContentsFactory_CreateContents_Params.prototype.initDefaults_ = function() {
    this.params = null;
    this.receiver = new bindings.InterfaceRequest();
    this.client = new navigable_contents$.NavigableContentsClientPtr();
  };
  NavigableContentsFactory_CreateContents_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NavigableContentsFactory_CreateContents_Params.validate = function(messageValidator, offset) {
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


    // validate NavigableContentsFactory_CreateContents_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NavigableContentsParams, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NavigableContentsFactory_CreateContents_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NavigableContentsFactory_CreateContents_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 12, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NavigableContentsFactory_CreateContents_Params.encodedSize = codec.kStructHeaderSize + 24;

  NavigableContentsFactory_CreateContents_Params.decode = function(decoder) {
    var packed;
    var val = new NavigableContentsFactory_CreateContents_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.params = decoder.decodeStructPointer(NavigableContentsParams);
    val.receiver = decoder.decodeStruct(codec.InterfaceRequest);
    val.client = decoder.decodeStruct(new codec.Interface(navigable_contents$.NavigableContentsClientPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NavigableContentsFactory_CreateContents_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NavigableContentsFactory_CreateContents_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NavigableContentsParams, val.params);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.encodeStruct(new codec.Interface(navigable_contents$.NavigableContentsClientPtr), val.client);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kNavigableContentsFactory_CreateContents_Name = 0;

  function NavigableContentsFactoryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NavigableContentsFactory,
                                                   handleOrPtrInfo);
  }

  function NavigableContentsFactoryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NavigableContentsFactory, associatedInterfacePtrInfo);
  }

  NavigableContentsFactoryAssociatedPtr.prototype =
      Object.create(NavigableContentsFactoryPtr.prototype);
  NavigableContentsFactoryAssociatedPtr.prototype.constructor =
      NavigableContentsFactoryAssociatedPtr;

  function NavigableContentsFactoryProxy(receiver) {
    this.receiver_ = receiver;
  }
  NavigableContentsFactoryPtr.prototype.createContents = function() {
    return NavigableContentsFactoryProxy.prototype.createContents
        .apply(this.ptr.getProxy(), arguments);
  };

  NavigableContentsFactoryProxy.prototype.createContents = function(params, receiver, client) {
    var params_ = new NavigableContentsFactory_CreateContents_Params();
    params_.params = params;
    params_.receiver = receiver;
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kNavigableContentsFactory_CreateContents_Name,
        codec.align(NavigableContentsFactory_CreateContents_Params.encodedSize));
    builder.encodeStruct(NavigableContentsFactory_CreateContents_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NavigableContentsFactoryStub(delegate) {
    this.delegate_ = delegate;
  }
  NavigableContentsFactoryStub.prototype.createContents = function(params, receiver, client) {
    return this.delegate_ && this.delegate_.createContents && this.delegate_.createContents(params, receiver, client);
  }

  NavigableContentsFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNavigableContentsFactory_CreateContents_Name:
      var params = reader.decodeStruct(NavigableContentsFactory_CreateContents_Params);
      this.createContents(params.params, params.receiver, params.client);
      return true;
    default:
      return false;
    }
  };

  NavigableContentsFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateNavigableContentsFactoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNavigableContentsFactory_CreateContents_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NavigableContentsFactory_CreateContents_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNavigableContentsFactoryResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var NavigableContentsFactory = {
    name: 'content.mojom.NavigableContentsFactory',
    kVersion: 0,
    ptrClass: NavigableContentsFactoryPtr,
    proxyClass: NavigableContentsFactoryProxy,
    stubClass: NavigableContentsFactoryStub,
    validateRequest: validateNavigableContentsFactoryRequest,
    validateResponse: null,
  };
  NavigableContentsFactoryStub.prototype.validator = validateNavigableContentsFactoryRequest;
  NavigableContentsFactoryProxy.prototype.validator = null;
  exports.NavigableContentsParams = NavigableContentsParams;
  exports.NavigableContentsFactory = NavigableContentsFactory;
  exports.NavigableContentsFactoryPtr = NavigableContentsFactoryPtr;
  exports.NavigableContentsFactoryAssociatedPtr = NavigableContentsFactoryAssociatedPtr;
})();