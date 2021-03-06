// services/network/public/mojom/fetch_api.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/fetch_api.mojom';
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


  var RequestMode = {};
  RequestMode.kSameOrigin = 0;
  RequestMode.kNoCors = RequestMode.kSameOrigin + 1;
  RequestMode.kCors = RequestMode.kNoCors + 1;
  RequestMode.kCorsWithForcedPreflight = RequestMode.kCors + 1;
  RequestMode.kNavigate = RequestMode.kCorsWithForcedPreflight + 1;
  RequestMode.kNavigateNestedFrame = RequestMode.kNavigate + 1;
  RequestMode.kNavigateNestedObject = RequestMode.kNavigateNestedFrame + 1;
  RequestMode.MIN_VALUE = 0,
  RequestMode.MAX_VALUE = 6,

  RequestMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return true;
    }
    return false;
  };

  RequestMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var RedirectMode = {};
  RedirectMode.kFollow = 0;
  RedirectMode.kError = RedirectMode.kFollow + 1;
  RedirectMode.kManual = RedirectMode.kError + 1;
  RedirectMode.MIN_VALUE = 0,
  RedirectMode.MAX_VALUE = 2,

  RedirectMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  RedirectMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CredentialsMode = {};
  CredentialsMode.kOmit = 0;
  CredentialsMode.kSameOrigin = CredentialsMode.kOmit + 1;
  CredentialsMode.kInclude = CredentialsMode.kSameOrigin + 1;
  CredentialsMode.MIN_VALUE = 0,
  CredentialsMode.MAX_VALUE = 2,

  CredentialsMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  CredentialsMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FetchResponseType = {};
  FetchResponseType.kBasic = 0;
  FetchResponseType.kCors = FetchResponseType.kBasic + 1;
  FetchResponseType.kDefault = FetchResponseType.kCors + 1;
  FetchResponseType.kError = FetchResponseType.kDefault + 1;
  FetchResponseType.kOpaque = FetchResponseType.kError + 1;
  FetchResponseType.kOpaqueRedirect = FetchResponseType.kOpaque + 1;
  FetchResponseType.MIN_VALUE = 0,
  FetchResponseType.MAX_VALUE = 5,

  FetchResponseType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  FetchResponseType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FetchResponseSource = {};
  FetchResponseSource.kUnspecified = 0;
  FetchResponseSource.kNetwork = FetchResponseSource.kUnspecified + 1;
  FetchResponseSource.kHttpCache = FetchResponseSource.kNetwork + 1;
  FetchResponseSource.kCacheStorage = FetchResponseSource.kHttpCache + 1;
  FetchResponseSource.MIN_VALUE = 0,
  FetchResponseSource.MAX_VALUE = 3,

  FetchResponseSource.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  FetchResponseSource.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.RequestMode = RequestMode;
  exports.RedirectMode = RedirectMode;
  exports.CredentialsMode = CredentialsMode;
  exports.FetchResponseType = FetchResponseType;
  exports.FetchResponseSource = FetchResponseSource;
})();