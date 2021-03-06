// third_party/blink/public/mojom/contacts/contacts_manager.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/contacts/contacts_manager.mojom';
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



  function ContactInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContactInfo.prototype.initDefaults_ = function() {
    this.name = null;
    this.email = null;
    this.tel = null;
  };
  ContactInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContactInfo.validate = function(messageValidator, offset) {
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


    // validate ContactInfo.name
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContactInfo.email
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ContactInfo.tel
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContactInfo.encodedSize = codec.kStructHeaderSize + 24;

  ContactInfo.decode = function(decoder) {
    var packed;
    var val = new ContactInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name = decoder.decodeArrayPointer(codec.String);
    val.email = decoder.decodeArrayPointer(codec.String);
    val.tel = decoder.decodeArrayPointer(codec.String);
    return val;
  };

  ContactInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContactInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.name);
    encoder.encodeArrayPointer(codec.String, val.email);
    encoder.encodeArrayPointer(codec.String, val.tel);
  };
  function ContactsManager_Select_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContactsManager_Select_Params.prototype.initDefaults_ = function() {
    this.multiple = false;
    this.includeNames = false;
    this.includeEmails = false;
    this.includeTel = false;
  };
  ContactsManager_Select_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContactsManager_Select_Params.validate = function(messageValidator, offset) {
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

  ContactsManager_Select_Params.encodedSize = codec.kStructHeaderSize + 8;

  ContactsManager_Select_Params.decode = function(decoder) {
    var packed;
    var val = new ContactsManager_Select_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.multiple = (packed >> 0) & 1 ? true : false;
    val.includeNames = (packed >> 1) & 1 ? true : false;
    val.includeEmails = (packed >> 2) & 1 ? true : false;
    val.includeTel = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ContactsManager_Select_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContactsManager_Select_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.multiple & 1) << 0
    packed |= (val.includeNames & 1) << 1
    packed |= (val.includeEmails & 1) << 2
    packed |= (val.includeTel & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ContactsManager_Select_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ContactsManager_Select_ResponseParams.prototype.initDefaults_ = function() {
    this.contacts = null;
  };
  ContactsManager_Select_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ContactsManager_Select_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ContactsManager_Select_ResponseParams.contacts
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(ContactInfo), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ContactsManager_Select_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ContactsManager_Select_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ContactsManager_Select_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.contacts = decoder.decodeArrayPointer(new codec.PointerTo(ContactInfo));
    return val;
  };

  ContactsManager_Select_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ContactsManager_Select_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(ContactInfo), val.contacts);
  };
  var kContactsManager_Select_Name = 0;

  function ContactsManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ContactsManager,
                                                   handleOrPtrInfo);
  }

  function ContactsManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ContactsManager, associatedInterfacePtrInfo);
  }

  ContactsManagerAssociatedPtr.prototype =
      Object.create(ContactsManagerPtr.prototype);
  ContactsManagerAssociatedPtr.prototype.constructor =
      ContactsManagerAssociatedPtr;

  function ContactsManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  ContactsManagerPtr.prototype.select = function() {
    return ContactsManagerProxy.prototype.select
        .apply(this.ptr.getProxy(), arguments);
  };

  ContactsManagerProxy.prototype.select = function(multiple, includeNames, includeEmails, includeTel) {
    var params_ = new ContactsManager_Select_Params();
    params_.multiple = multiple;
    params_.includeNames = includeNames;
    params_.includeEmails = includeEmails;
    params_.includeTel = includeTel;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kContactsManager_Select_Name,
          codec.align(ContactsManager_Select_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ContactsManager_Select_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ContactsManager_Select_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ContactsManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  ContactsManagerStub.prototype.select = function(multiple, includeNames, includeEmails, includeTel) {
    return this.delegate_ && this.delegate_.select && this.delegate_.select(multiple, includeNames, includeEmails, includeTel);
  }

  ContactsManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ContactsManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kContactsManager_Select_Name:
      var params = reader.decodeStruct(ContactsManager_Select_Params);
      this.select(params.multiple, params.includeNames, params.includeEmails, params.includeTel).then(function(response) {
        var responseParams =
            new ContactsManager_Select_ResponseParams();
        responseParams.contacts = response.contacts;
        var builder = new codec.MessageV1Builder(
            kContactsManager_Select_Name,
            codec.align(ContactsManager_Select_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ContactsManager_Select_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateContactsManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kContactsManager_Select_Name:
        if (message.expectsResponse())
          paramsClass = ContactsManager_Select_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateContactsManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kContactsManager_Select_Name:
        if (message.isResponse())
          paramsClass = ContactsManager_Select_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ContactsManager = {
    name: 'blink.mojom.ContactsManager',
    kVersion: 0,
    ptrClass: ContactsManagerPtr,
    proxyClass: ContactsManagerProxy,
    stubClass: ContactsManagerStub,
    validateRequest: validateContactsManagerRequest,
    validateResponse: validateContactsManagerResponse,
  };
  ContactsManagerStub.prototype.validator = validateContactsManagerRequest;
  ContactsManagerProxy.prototype.validator = validateContactsManagerResponse;
  exports.ContactInfo = ContactInfo;
  exports.ContactsManager = ContactsManager;
  exports.ContactsManagerPtr = ContactsManagerPtr;
  exports.ContactsManagerAssociatedPtr = ContactsManagerAssociatedPtr;
})();