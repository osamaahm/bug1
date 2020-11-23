// chrome/browser/media/media_engagement_score_details.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/media/media_engagement_score_details.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../url/mojom/origin.mojom.js');
  }



  function MediaEngagementScoreDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaEngagementScoreDetails.prototype.initDefaults_ = function() {
    this.origin = null;
    this.totalScore = 0;
    this.visits = 0;
    this.mediaPlaybacks = 0;
    this.lastMediaPlaybackTime = 0;
    this.isHigh = false;
  };
  MediaEngagementScoreDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaEngagementScoreDetails.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaEngagementScoreDetails.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;






    return validator.validationError.NONE;
  };

  MediaEngagementScoreDetails.encodedSize = codec.kStructHeaderSize + 40;

  MediaEngagementScoreDetails.decode = function(decoder) {
    var packed;
    var val = new MediaEngagementScoreDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin = decoder.decodeStructPointer(origin$.Origin);
    val.totalScore = decoder.decodeStruct(codec.Double);
    val.visits = decoder.decodeStruct(codec.Int32);
    val.mediaPlaybacks = decoder.decodeStruct(codec.Int32);
    val.lastMediaPlaybackTime = decoder.decodeStruct(codec.Double);
    packed = decoder.readUint8();
    val.isHigh = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaEngagementScoreDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaEngagementScoreDetails.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    encoder.encodeStruct(codec.Double, val.totalScore);
    encoder.encodeStruct(codec.Int32, val.visits);
    encoder.encodeStruct(codec.Int32, val.mediaPlaybacks);
    encoder.encodeStruct(codec.Double, val.lastMediaPlaybackTime);
    packed = 0;
    packed |= (val.isHigh & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaEngagementConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaEngagementConfig.prototype.initDefaults_ = function() {
    this.scoreMinVisits = 0;
    this.featureRecordData = false;
    this.featureBypassAutoplay = false;
    this.featurePreloadData = false;
    this.featureHttpsOnly = false;
    this.featureAutoplayDisableSettings = false;
    this.featureAutoplayWhitelistSettings = false;
    this.prefDisableUnifiedAutoplay = false;
    this.hasCustomAutoplayPolicy = false;
    this.highScoreLowerThreshold = 0;
    this.highScoreUpperThreshold = 0;
    this.autoplayPolicy = null;
    this.preloadVersion = null;
  };
  MediaEngagementConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaEngagementConfig.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;













    // validate MediaEngagementConfig.autoplayPolicy
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MediaEngagementConfig.preloadVersion
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaEngagementConfig.encodedSize = codec.kStructHeaderSize + 40;

  MediaEngagementConfig.decode = function(decoder) {
    var packed;
    var val = new MediaEngagementConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scoreMinVisits = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.featureRecordData = (packed >> 0) & 1 ? true : false;
    val.featureBypassAutoplay = (packed >> 1) & 1 ? true : false;
    val.featurePreloadData = (packed >> 2) & 1 ? true : false;
    val.featureHttpsOnly = (packed >> 3) & 1 ? true : false;
    val.featureAutoplayDisableSettings = (packed >> 4) & 1 ? true : false;
    val.featureAutoplayWhitelistSettings = (packed >> 5) & 1 ? true : false;
    val.prefDisableUnifiedAutoplay = (packed >> 6) & 1 ? true : false;
    val.hasCustomAutoplayPolicy = (packed >> 7) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.highScoreLowerThreshold = decoder.decodeStruct(codec.Double);
    val.highScoreUpperThreshold = decoder.decodeStruct(codec.Double);
    val.autoplayPolicy = decoder.decodeStruct(codec.String);
    val.preloadVersion = decoder.decodeStruct(codec.String);
    return val;
  };

  MediaEngagementConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaEngagementConfig.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.scoreMinVisits);
    packed = 0;
    packed |= (val.featureRecordData & 1) << 0
    packed |= (val.featureBypassAutoplay & 1) << 1
    packed |= (val.featurePreloadData & 1) << 2
    packed |= (val.featureHttpsOnly & 1) << 3
    packed |= (val.featureAutoplayDisableSettings & 1) << 4
    packed |= (val.featureAutoplayWhitelistSettings & 1) << 5
    packed |= (val.prefDisableUnifiedAutoplay & 1) << 6
    packed |= (val.hasCustomAutoplayPolicy & 1) << 7
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Double, val.highScoreLowerThreshold);
    encoder.encodeStruct(codec.Double, val.highScoreUpperThreshold);
    encoder.encodeStruct(codec.String, val.autoplayPolicy);
    encoder.encodeStruct(codec.String, val.preloadVersion);
  };
  function MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params.prototype.initDefaults_ = function() {
  };
  MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params.validate = function(messageValidator, offset) {
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

  MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params.decode = function(decoder) {
    var packed;
    var val = new MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams.prototype.initDefaults_ = function() {
    this.info = null;
  };
  MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams.info
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(MediaEngagementScoreDetails), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.info = decoder.decodeArrayPointer(new codec.PointerTo(MediaEngagementScoreDetails));
    return val;
  };

  MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(MediaEngagementScoreDetails), val.info);
  };
  function MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params.prototype.initDefaults_ = function() {
  };
  MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params.validate = function(messageValidator, offset) {
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

  MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params.decode = function(decoder) {
    var packed;
    var val = new MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams.prototype.initDefaults_ = function() {
    this.config = null;
  };
  MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, MediaEngagementConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.config = decoder.decodeStructPointer(MediaEngagementConfig);
    return val;
  };

  MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(MediaEngagementConfig, val.config);
  };
  var kMediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Name = 0;
  var kMediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Name = 1;

  function MediaEngagementScoreDetailsProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaEngagementScoreDetailsProvider,
                                                   handleOrPtrInfo);
  }

  function MediaEngagementScoreDetailsProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaEngagementScoreDetailsProvider, associatedInterfacePtrInfo);
  }

  MediaEngagementScoreDetailsProviderAssociatedPtr.prototype =
      Object.create(MediaEngagementScoreDetailsProviderPtr.prototype);
  MediaEngagementScoreDetailsProviderAssociatedPtr.prototype.constructor =
      MediaEngagementScoreDetailsProviderAssociatedPtr;

  function MediaEngagementScoreDetailsProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaEngagementScoreDetailsProviderPtr.prototype.getMediaEngagementScoreDetails = function() {
    return MediaEngagementScoreDetailsProviderProxy.prototype.getMediaEngagementScoreDetails
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaEngagementScoreDetailsProviderProxy.prototype.getMediaEngagementScoreDetails = function() {
    var params_ = new MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Name,
          codec.align(MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MediaEngagementScoreDetailsProviderPtr.prototype.getMediaEngagementConfig = function() {
    return MediaEngagementScoreDetailsProviderProxy.prototype.getMediaEngagementConfig
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaEngagementScoreDetailsProviderProxy.prototype.getMediaEngagementConfig = function() {
    var params_ = new MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Name,
          codec.align(MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function MediaEngagementScoreDetailsProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaEngagementScoreDetailsProviderStub.prototype.getMediaEngagementScoreDetails = function() {
    return this.delegate_ && this.delegate_.getMediaEngagementScoreDetails && this.delegate_.getMediaEngagementScoreDetails();
  }
  MediaEngagementScoreDetailsProviderStub.prototype.getMediaEngagementConfig = function() {
    return this.delegate_ && this.delegate_.getMediaEngagementConfig && this.delegate_.getMediaEngagementConfig();
  }

  MediaEngagementScoreDetailsProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  MediaEngagementScoreDetailsProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Name:
      var params = reader.decodeStruct(MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params);
      this.getMediaEngagementScoreDetails().then(function(response) {
        var responseParams =
            new MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams();
        responseParams.info = response.info;
        var builder = new codec.MessageV1Builder(
            kMediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Name,
            codec.align(MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kMediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Name:
      var params = reader.decodeStruct(MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params);
      this.getMediaEngagementConfig().then(function(response) {
        var responseParams =
            new MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams();
        responseParams.config = response.config;
        var builder = new codec.MessageV1Builder(
            kMediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Name,
            codec.align(MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateMediaEngagementScoreDetailsProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Name:
        if (message.expectsResponse())
          paramsClass = MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Params;
      break;
      case kMediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Name:
        if (message.expectsResponse())
          paramsClass = MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaEngagementScoreDetailsProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kMediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_Name:
        if (message.isResponse())
          paramsClass = MediaEngagementScoreDetailsProvider_GetMediaEngagementScoreDetails_ResponseParams;
        break;
      case kMediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_Name:
        if (message.isResponse())
          paramsClass = MediaEngagementScoreDetailsProvider_GetMediaEngagementConfig_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var MediaEngagementScoreDetailsProvider = {
    name: 'media.mojom.MediaEngagementScoreDetailsProvider',
    kVersion: 0,
    ptrClass: MediaEngagementScoreDetailsProviderPtr,
    proxyClass: MediaEngagementScoreDetailsProviderProxy,
    stubClass: MediaEngagementScoreDetailsProviderStub,
    validateRequest: validateMediaEngagementScoreDetailsProviderRequest,
    validateResponse: validateMediaEngagementScoreDetailsProviderResponse,
  };
  MediaEngagementScoreDetailsProviderStub.prototype.validator = validateMediaEngagementScoreDetailsProviderRequest;
  MediaEngagementScoreDetailsProviderProxy.prototype.validator = validateMediaEngagementScoreDetailsProviderResponse;
  exports.MediaEngagementScoreDetails = MediaEngagementScoreDetails;
  exports.MediaEngagementConfig = MediaEngagementConfig;
  exports.MediaEngagementScoreDetailsProvider = MediaEngagementScoreDetailsProvider;
  exports.MediaEngagementScoreDetailsProviderPtr = MediaEngagementScoreDetailsProviderPtr;
  exports.MediaEngagementScoreDetailsProviderAssociatedPtr = MediaEngagementScoreDetailsProviderAssociatedPtr;
})();