// ui/base/mojom/ui_base_types.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/base/mojom/ui_base_types.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ui.mojom');


  var DialogButton = {};
  DialogButton.NONE = 0;
  DialogButton.OK = DialogButton.NONE + 1;
  DialogButton.CANCEL = DialogButton.OK + 1;
  DialogButton.MIN_VALUE = 0,
  DialogButton.MAX_VALUE = 2,

  DialogButton.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  DialogButton.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ModalType = {};
  ModalType.NONE = 0;
  ModalType.WINDOW = ModalType.NONE + 1;
  ModalType.CHILD = ModalType.WINDOW + 1;
  ModalType.SYSTEM = ModalType.CHILD + 1;
  ModalType.MIN_VALUE = 0,
  ModalType.MAX_VALUE = 3,

  ModalType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ModalType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.DialogButton = DialogButton;
  exports.ModalType = ModalType;
})();