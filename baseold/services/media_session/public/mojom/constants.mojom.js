// services/media_session/public/mojom/constants.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/media_session/public/mojom/constants.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mediaSession.mojom');


  var SERVICE_NAME = "media_session";
  var DEFAULT_SEEK_TIME_SECONDS = 5;

  exports.SERVICE_NAME = SERVICE_NAME;
  exports.DEFAULT_SEEK_TIME_SECONDS = DEFAULT_SEEK_TIME_SECONDS;
})();