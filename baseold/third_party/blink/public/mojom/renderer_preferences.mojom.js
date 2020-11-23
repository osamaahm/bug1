// third_party/blink/public/mojom/renderer_preferences.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/renderer_preferences.mojom';
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
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var font_render_params$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/font_render_params.mojom', '../../../../ui/gfx/mojom/font_render_params.mojom.js');
  }


  var DEFAULT_CARET_BLINK_INTERVAL_IN_MILLISECONDS = 500;

  function RendererPreferences(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererPreferences.prototype.initDefaults_ = function() {
    this.canAcceptLoadDrops = true;
    this.shouldAntialiasText = true;
    this.useAutohinter = false;
    this.useBitmaps = false;
    this.useSubpixelPositioning = false;
    this.browserHandlesAllTopLevelRequests = false;
    this.useCustomColors = true;
    this.enableReferrers = true;
    this.allowCrossOriginAuthPrompt = false;
    this.enableDoNotTrack = false;
    this.enableEncryptedMedia = true;
    this.disableClientBlockedErrorPage = false;
    this.pluginFullscreenAllowed = true;
    this.webrtcUdpMinPort = 0;
    this.hinting = font_render_params$.Hinting.kMedium;
    this.subpixelRendering = font_render_params$.SubpixelRendering.kNone;
    this.focusRingColor = 0xFFE59700;
    this.activeSelectionBgColor = 0xFF1E90FF;
    this.activeSelectionFgColor = 0xFFFFFFFF;
    this.inactiveSelectionBgColor = 0xFFC8C8C8;
    this.inactiveSelectionFgColor = 0xFF323232;
    this.caretBlinkInterval = null;
    this.webrtcIpHandlingPolicy = null;
    this.webrtcUdpMaxPort = 0;
    this.userAgentOverride = null;
    this.acceptLanguages = null;
    this.networkContryIso = null;
  };
  RendererPreferences.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererPreferences.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 88}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;




    // validate RendererPreferences.hinting
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, font_render_params$.Hinting);
    if (err !== validator.validationError.NONE)
        return err;




    // validate RendererPreferences.subpixelRendering
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, font_render_params$.SubpixelRendering);
    if (err !== validator.validationError.NONE)
        return err;









    // validate RendererPreferences.caretBlinkInterval
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, time$.TimeDelta, true);
    if (err !== validator.validationError.NONE)
        return err;







    // validate RendererPreferences.webrtcIpHandlingPolicy
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;




    // validate RendererPreferences.userAgentOverride
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererPreferences.acceptLanguages
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 64, false)
    if (err !== validator.validationError.NONE)
        return err;




    // validate RendererPreferences.networkContryIso
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 72, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererPreferences.encodedSize = codec.kStructHeaderSize + 80;

  RendererPreferences.decode = function(decoder) {
    var packed;
    var val = new RendererPreferences();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.canAcceptLoadDrops = (packed >> 0) & 1 ? true : false;
    val.shouldAntialiasText = (packed >> 1) & 1 ? true : false;
    val.useAutohinter = (packed >> 2) & 1 ? true : false;
    val.useBitmaps = (packed >> 3) & 1 ? true : false;
    val.useSubpixelPositioning = (packed >> 4) & 1 ? true : false;
    val.browserHandlesAllTopLevelRequests = (packed >> 5) & 1 ? true : false;
    val.useCustomColors = (packed >> 6) & 1 ? true : false;
    val.enableReferrers = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.allowCrossOriginAuthPrompt = (packed >> 0) & 1 ? true : false;
    val.enableDoNotTrack = (packed >> 1) & 1 ? true : false;
    val.enableEncryptedMedia = (packed >> 2) & 1 ? true : false;
    val.disableClientBlockedErrorPage = (packed >> 3) & 1 ? true : false;
    val.pluginFullscreenAllowed = (packed >> 4) & 1 ? true : false;
    val.webrtcUdpMinPort = decoder.decodeStruct(codec.Uint16);
    val.hinting = decoder.decodeStruct(codec.Int32);
    val.subpixelRendering = decoder.decodeStruct(codec.Int32);
    val.focusRingColor = decoder.decodeStruct(codec.Uint32);
    val.activeSelectionBgColor = decoder.decodeStruct(codec.Uint32);
    val.activeSelectionFgColor = decoder.decodeStruct(codec.Uint32);
    val.inactiveSelectionBgColor = decoder.decodeStruct(codec.Uint32);
    val.inactiveSelectionFgColor = decoder.decodeStruct(codec.Uint32);
    val.caretBlinkInterval = decoder.decodeStructPointer(time$.TimeDelta);
    val.webrtcIpHandlingPolicy = decoder.decodeStruct(codec.String);
    val.webrtcUdpMaxPort = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.userAgentOverride = decoder.decodeStruct(codec.String);
    val.acceptLanguages = decoder.decodeStruct(codec.String);
    val.networkContryIso = decoder.decodeStruct(codec.String);
    return val;
  };

  RendererPreferences.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererPreferences.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.canAcceptLoadDrops & 1) << 0
    packed |= (val.shouldAntialiasText & 1) << 1
    packed |= (val.useAutohinter & 1) << 2
    packed |= (val.useBitmaps & 1) << 3
    packed |= (val.useSubpixelPositioning & 1) << 4
    packed |= (val.browserHandlesAllTopLevelRequests & 1) << 5
    packed |= (val.useCustomColors & 1) << 6
    packed |= (val.enableReferrers & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.allowCrossOriginAuthPrompt & 1) << 0
    packed |= (val.enableDoNotTrack & 1) << 1
    packed |= (val.enableEncryptedMedia & 1) << 2
    packed |= (val.disableClientBlockedErrorPage & 1) << 3
    packed |= (val.pluginFullscreenAllowed & 1) << 4
    encoder.writeUint8(packed);
    encoder.encodeStruct(codec.Uint16, val.webrtcUdpMinPort);
    encoder.encodeStruct(codec.Int32, val.hinting);
    encoder.encodeStruct(codec.Int32, val.subpixelRendering);
    encoder.encodeStruct(codec.Uint32, val.focusRingColor);
    encoder.encodeStruct(codec.Uint32, val.activeSelectionBgColor);
    encoder.encodeStruct(codec.Uint32, val.activeSelectionFgColor);
    encoder.encodeStruct(codec.Uint32, val.inactiveSelectionBgColor);
    encoder.encodeStruct(codec.Uint32, val.inactiveSelectionFgColor);
    encoder.encodeStructPointer(time$.TimeDelta, val.caretBlinkInterval);
    encoder.encodeStruct(codec.String, val.webrtcIpHandlingPolicy);
    encoder.encodeStruct(codec.Uint16, val.webrtcUdpMaxPort);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.userAgentOverride);
    encoder.encodeStruct(codec.String, val.acceptLanguages);
    encoder.encodeStruct(codec.String, val.networkContryIso);
  };
  exports.DEFAULT_CARET_BLINK_INTERVAL_IN_MILLISECONDS = DEFAULT_CARET_BLINK_INTERVAL_IN_MILLISECONDS;
  exports.RendererPreferences = RendererPreferences;
})();