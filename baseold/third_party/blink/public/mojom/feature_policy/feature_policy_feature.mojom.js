// third_party/blink/public/mojom/feature_policy/feature_policy_feature.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/feature_policy/feature_policy_feature.mojom';
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


  var FeaturePolicyFeature = {};
  FeaturePolicyFeature.kNotFound = 0;
  FeaturePolicyFeature.kAutoplay = 1;
  FeaturePolicyFeature.kCamera = 2;
  FeaturePolicyFeature.kEncryptedMedia = 3;
  FeaturePolicyFeature.kFullscreen = 4;
  FeaturePolicyFeature.kGeolocation = 5;
  FeaturePolicyFeature.kMicrophone = 6;
  FeaturePolicyFeature.kMidiFeature = 7;
  FeaturePolicyFeature.kPayment = 8;
  FeaturePolicyFeature.kDocumentCookie = 10;
  FeaturePolicyFeature.kDocumentDomain = 11;
  FeaturePolicyFeature.kSyncScript = 12;
  FeaturePolicyFeature.kSyncXHR = 13;
  FeaturePolicyFeature.kUsb = 14;
  FeaturePolicyFeature.kAccessibilityEvents = 15;
  FeaturePolicyFeature.kWebVr = 16;
  FeaturePolicyFeature.kAccelerometer = 17;
  FeaturePolicyFeature.kAmbientLightSensor = 18;
  FeaturePolicyFeature.kGyroscope = 19;
  FeaturePolicyFeature.kMagnetometer = 20;
  FeaturePolicyFeature.kUnsizedMedia = 21;
  FeaturePolicyFeature.kOversizedImages = 25;
  FeaturePolicyFeature.kPictureInPicture = 26;
  FeaturePolicyFeature.kVerticalScroll = 27;
  FeaturePolicyFeature.kDocumentWrite = 28;
  FeaturePolicyFeature.kLazyLoad = 29;
  FeaturePolicyFeature.kLayoutAnimations = 30;
  FeaturePolicyFeature.kWakeLock = 31;
  FeaturePolicyFeature.kFontDisplay = 32;
  FeaturePolicyFeature.kTopNavigation = 33;
  FeaturePolicyFeature.kFormSubmission = 34;
  FeaturePolicyFeature.kScript = 35;
  FeaturePolicyFeature.kPopups = 36;
  FeaturePolicyFeature.kPointerLock = 37;
  FeaturePolicyFeature.kModals = 38;
  FeaturePolicyFeature.kOrientationLock = 39;
  FeaturePolicyFeature.kPresentation = 40;
  FeaturePolicyFeature.kFrobulate = 41;
  FeaturePolicyFeature.kSerial = 42;
  FeaturePolicyFeature.kHid = 43;
  FeaturePolicyFeature.kIdleDetection = 44;
  FeaturePolicyFeature.kUnoptimizedLossyImages = 45;
  FeaturePolicyFeature.kUnoptimizedLosslessImages = 46;
  FeaturePolicyFeature.kUnoptimizedLosslessImagesStrict = 47;
  FeaturePolicyFeature.kLoadingFrameDefaultEager = 48;
  FeaturePolicyFeature.kDownloadsWithoutUserActivation = 49;
  FeaturePolicyFeature.kExecutionWhileOutOfViewport = 50;
  FeaturePolicyFeature.kExecutionWhileNotRendered = 51;
  FeaturePolicyFeature.kFocusWithoutUserActivation = 52;
  FeaturePolicyFeature.kClientHintDPR = 53;
  FeaturePolicyFeature.kClientHintDeviceMemory = 54;
  FeaturePolicyFeature.kClientHintDownlink = 55;
  FeaturePolicyFeature.kClientHintECT = 56;
  FeaturePolicyFeature.kClientHintLang = 57;
  FeaturePolicyFeature.kClientHintRTT = 58;
  FeaturePolicyFeature.kClientHintUA = 59;
  FeaturePolicyFeature.kClientHintUAArch = 60;
  FeaturePolicyFeature.kClientHintUAModel = 61;
  FeaturePolicyFeature.kClientHintUAPlatform = 62;
  FeaturePolicyFeature.kClientHintViewportWidth = 63;
  FeaturePolicyFeature.kClientHintWidth = 64;
  FeaturePolicyFeature.kDocumentAccess = 65;
  FeaturePolicyFeature.kWebXr = 66;
  FeaturePolicyFeature.MIN_VALUE = 0,
  FeaturePolicyFeature.MAX_VALUE = 66,

  FeaturePolicyFeature.isKnownEnumValue = function(value) {
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
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 66:
      return true;
    }
    return false;
  };

  FeaturePolicyFeature.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.FeaturePolicyFeature = FeaturePolicyFeature;
})();