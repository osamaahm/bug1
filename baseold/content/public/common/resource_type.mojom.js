// content/public/common/resource_type.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'content/public/common/resource_type.mojom';
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


  var ResourceType = {};
  ResourceType.kMainFrame = 0;
  ResourceType.kSubFrame = 1;
  ResourceType.kStylesheet = 2;
  ResourceType.kScript = 3;
  ResourceType.kImage = 4;
  ResourceType.kFontResource = 5;
  ResourceType.kSubResource = 6;
  ResourceType.kObject = 7;
  ResourceType.kMedia = 8;
  ResourceType.kWorker = 9;
  ResourceType.kSharedWorker = 10;
  ResourceType.kPrefetch = 11;
  ResourceType.kFavicon = 12;
  ResourceType.kXhr = 13;
  ResourceType.kPing = 14;
  ResourceType.kServiceWorker = 15;
  ResourceType.kCspReport = 16;
  ResourceType.kPluginResource = 17;
  ResourceType.kNavigationPreloadMainFrame = 19;
  ResourceType.kNavigationPreloadSubFrame = 20;
  ResourceType.MIN_VALUE = 0,
  ResourceType.MAX_VALUE = 20,

  ResourceType.isKnownEnumValue = function(value) {
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
    case 19:
    case 20:
      return true;
    }
    return false;
  };

  ResourceType.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ResourceType = ResourceType;
})();