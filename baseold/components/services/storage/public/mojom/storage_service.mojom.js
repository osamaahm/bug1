// components/services/storage/public/mojom/storage_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/services/storage/public/mojom/storage_service.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('storage.mojom');
  var partition$ =
      mojo.internal.exposeNamespace('storage.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/services/storage/public/mojom/partition.mojom', 'partition.mojom.js');
  }
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../../mojo/public/mojom/base/file_path.mojom.js');
  }



  function StorageService_BindPartition_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StorageService_BindPartition_Params.prototype.initDefaults_ = function() {
    this.path = null;
    this.receiver = new bindings.InterfaceRequest();
  };
  StorageService_BindPartition_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StorageService_BindPartition_Params.validate = function(messageValidator, offset) {
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


    // validate StorageService_BindPartition_Params.path
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_path$.FilePath, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StorageService_BindPartition_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StorageService_BindPartition_Params.encodedSize = codec.kStructHeaderSize + 16;

  StorageService_BindPartition_Params.decode = function(decoder) {
    var packed;
    var val = new StorageService_BindPartition_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.path = decoder.decodeStructPointer(file_path$.FilePath);
    val.receiver = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  StorageService_BindPartition_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StorageService_BindPartition_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_path$.FilePath, val.path);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kStorageService_BindPartition_Name = 0;

  function StorageServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(StorageService,
                                                   handleOrPtrInfo);
  }

  function StorageServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        StorageService, associatedInterfacePtrInfo);
  }

  StorageServiceAssociatedPtr.prototype =
      Object.create(StorageServicePtr.prototype);
  StorageServiceAssociatedPtr.prototype.constructor =
      StorageServiceAssociatedPtr;

  function StorageServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  StorageServicePtr.prototype.bindPartition = function() {
    return StorageServiceProxy.prototype.bindPartition
        .apply(this.ptr.getProxy(), arguments);
  };

  StorageServiceProxy.prototype.bindPartition = function(path, receiver) {
    var params_ = new StorageService_BindPartition_Params();
    params_.path = path;
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kStorageService_BindPartition_Name,
        codec.align(StorageService_BindPartition_Params.encodedSize));
    builder.encodeStruct(StorageService_BindPartition_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function StorageServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  StorageServiceStub.prototype.bindPartition = function(path, receiver) {
    return this.delegate_ && this.delegate_.bindPartition && this.delegate_.bindPartition(path, receiver);
  }

  StorageServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kStorageService_BindPartition_Name:
      var params = reader.decodeStruct(StorageService_BindPartition_Params);
      this.bindPartition(params.path, params.receiver);
      return true;
    default:
      return false;
    }
  };

  StorageServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateStorageServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kStorageService_BindPartition_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = StorageService_BindPartition_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateStorageServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var StorageService = {
    name: 'storage.mojom.StorageService',
    kVersion: 0,
    ptrClass: StorageServicePtr,
    proxyClass: StorageServiceProxy,
    stubClass: StorageServiceStub,
    validateRequest: validateStorageServiceRequest,
    validateResponse: null,
  };
  StorageServiceStub.prototype.validator = validateStorageServiceRequest;
  StorageServiceProxy.prototype.validator = null;
  exports.StorageService = StorageService;
  exports.StorageServicePtr = StorageServicePtr;
  exports.StorageServiceAssociatedPtr = StorageServiceAssociatedPtr;
})();