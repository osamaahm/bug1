// components/services/storage/public/mojom/origin_context.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/services/storage/public/mojom/origin_context.mojom';
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




  function OriginContextPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(OriginContext,
                                                   handleOrPtrInfo);
  }

  function OriginContextAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        OriginContext, associatedInterfacePtrInfo);
  }

  OriginContextAssociatedPtr.prototype =
      Object.create(OriginContextPtr.prototype);
  OriginContextAssociatedPtr.prototype.constructor =
      OriginContextAssociatedPtr;

  function OriginContextProxy(receiver) {
    this.receiver_ = receiver;
  }

  function OriginContextStub(delegate) {
    this.delegate_ = delegate;
  }

  OriginContextStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  OriginContextStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateOriginContextRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validateOriginContextResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var OriginContext = {
    name: 'storage.mojom.OriginContext',
    kVersion: 0,
    ptrClass: OriginContextPtr,
    proxyClass: OriginContextProxy,
    stubClass: OriginContextStub,
    validateRequest: validateOriginContextRequest,
    validateResponse: null,
  };
  OriginContextStub.prototype.validator = validateOriginContextRequest;
  OriginContextProxy.prototype.validator = null;
  exports.OriginContext = OriginContext;
  exports.OriginContextPtr = OriginContextPtr;
  exports.OriginContextAssociatedPtr = OriginContextAssociatedPtr;
})();