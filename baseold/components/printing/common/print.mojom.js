// components/printing/common/print.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/printing/common/print.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('printing.mojom');



  function PrintRenderFrame_PrintForSystemDialog_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrintRenderFrame_PrintForSystemDialog_Params.prototype.initDefaults_ = function() {
  };
  PrintRenderFrame_PrintForSystemDialog_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrintRenderFrame_PrintForSystemDialog_Params.validate = function(messageValidator, offset) {
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

  PrintRenderFrame_PrintForSystemDialog_Params.encodedSize = codec.kStructHeaderSize + 0;

  PrintRenderFrame_PrintForSystemDialog_Params.decode = function(decoder) {
    var packed;
    var val = new PrintRenderFrame_PrintForSystemDialog_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PrintRenderFrame_PrintForSystemDialog_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrintRenderFrame_PrintForSystemDialog_Params.encodedSize);
    encoder.writeUint32(0);
  };

  function PrintRendererPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PrintRenderer,
                                                   handleOrPtrInfo);
  }

  function PrintRendererAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PrintRenderer, associatedInterfacePtrInfo);
  }

  PrintRendererAssociatedPtr.prototype =
      Object.create(PrintRendererPtr.prototype);
  PrintRendererAssociatedPtr.prototype.constructor =
      PrintRendererAssociatedPtr;

  function PrintRendererProxy(receiver) {
    this.receiver_ = receiver;
  }

  function PrintRendererStub(delegate) {
    this.delegate_ = delegate;
  }

  PrintRendererStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PrintRendererStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePrintRendererRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validatePrintRendererResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PrintRenderer = {
    name: 'printing.mojom.PrintRenderer',
    kVersion: 0,
    ptrClass: PrintRendererPtr,
    proxyClass: PrintRendererProxy,
    stubClass: PrintRendererStub,
    validateRequest: validatePrintRendererRequest,
    validateResponse: null,
  };
  PrintRendererStub.prototype.validator = validatePrintRendererRequest;
  PrintRendererProxy.prototype.validator = null;
  var kPrintRenderFrame_PrintForSystemDialog_Name = 0;

  function PrintRenderFramePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PrintRenderFrame,
                                                   handleOrPtrInfo);
  }

  function PrintRenderFrameAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PrintRenderFrame, associatedInterfacePtrInfo);
  }

  PrintRenderFrameAssociatedPtr.prototype =
      Object.create(PrintRenderFramePtr.prototype);
  PrintRenderFrameAssociatedPtr.prototype.constructor =
      PrintRenderFrameAssociatedPtr;

  function PrintRenderFrameProxy(receiver) {
    this.receiver_ = receiver;
  }
  PrintRenderFramePtr.prototype.printForSystemDialog = function() {
    return PrintRenderFrameProxy.prototype.printForSystemDialog
        .apply(this.ptr.getProxy(), arguments);
  };

  PrintRenderFrameProxy.prototype.printForSystemDialog = function() {
    var params_ = new PrintRenderFrame_PrintForSystemDialog_Params();
    var builder = new codec.MessageV0Builder(
        kPrintRenderFrame_PrintForSystemDialog_Name,
        codec.align(PrintRenderFrame_PrintForSystemDialog_Params.encodedSize));
    builder.encodeStruct(PrintRenderFrame_PrintForSystemDialog_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PrintRenderFrameStub(delegate) {
    this.delegate_ = delegate;
  }
  PrintRenderFrameStub.prototype.printForSystemDialog = function() {
    return this.delegate_ && this.delegate_.printForSystemDialog && this.delegate_.printForSystemDialog();
  }

  PrintRenderFrameStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPrintRenderFrame_PrintForSystemDialog_Name:
      var params = reader.decodeStruct(PrintRenderFrame_PrintForSystemDialog_Params);
      this.printForSystemDialog();
      return true;
    default:
      return false;
    }
  };

  PrintRenderFrameStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePrintRenderFrameRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPrintRenderFrame_PrintForSystemDialog_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PrintRenderFrame_PrintForSystemDialog_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePrintRenderFrameResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PrintRenderFrame = {
    name: 'printing.mojom.PrintRenderFrame',
    kVersion: 0,
    ptrClass: PrintRenderFramePtr,
    proxyClass: PrintRenderFrameProxy,
    stubClass: PrintRenderFrameStub,
    validateRequest: validatePrintRenderFrameRequest,
    validateResponse: null,
  };
  PrintRenderFrameStub.prototype.validator = validatePrintRenderFrameRequest;
  PrintRenderFrameProxy.prototype.validator = null;
  exports.PrintRenderer = PrintRenderer;
  exports.PrintRendererPtr = PrintRendererPtr;
  exports.PrintRendererAssociatedPtr = PrintRendererAssociatedPtr;
  exports.PrintRenderFrame = PrintRenderFrame;
  exports.PrintRenderFramePtr = PrintRenderFramePtr;
  exports.PrintRenderFrameAssociatedPtr = PrintRenderFrameAssociatedPtr;
})();