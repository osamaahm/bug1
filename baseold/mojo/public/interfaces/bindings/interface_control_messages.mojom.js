// mojo/public/interfaces/bindings/interface_control_messages.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'mojo/public/interfaces/bindings/interface_control_messages.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojo.interfaceControl');


  var RUN_MESSAGE_ID = 0xFFFFFFFF;
  var RUN_OR_CLOSE_PIPE_MESSAGE_ID = 0xFFFFFFFE;

  function RunMessageParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RunMessageParams.prototype.initDefaults_ = function() {
    this.input = null;
  };
  RunMessageParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RunMessageParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RunMessageParams.input
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, RunInput, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RunMessageParams.encodedSize = codec.kStructHeaderSize + 16;

  RunMessageParams.decode = function(decoder) {
    var packed;
    var val = new RunMessageParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.input = decoder.decodeStruct(RunInput);
    return val;
  };

  RunMessageParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RunMessageParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(RunInput, val.input);
  };
  function RunResponseMessageParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RunResponseMessageParams.prototype.initDefaults_ = function() {
    this.output = null;
  };
  RunResponseMessageParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RunResponseMessageParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RunResponseMessageParams.output
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, RunOutput, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RunResponseMessageParams.encodedSize = codec.kStructHeaderSize + 16;

  RunResponseMessageParams.decode = function(decoder) {
    var packed;
    var val = new RunResponseMessageParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.output = decoder.decodeStruct(RunOutput);
    return val;
  };

  RunResponseMessageParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RunResponseMessageParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(RunOutput, val.output);
  };
  function QueryVersion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QueryVersion.prototype.initDefaults_ = function() {
  };
  QueryVersion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QueryVersion.validate = function(messageValidator, offset) {
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

  QueryVersion.encodedSize = codec.kStructHeaderSize + 0;

  QueryVersion.decode = function(decoder) {
    var packed;
    var val = new QueryVersion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  QueryVersion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QueryVersion.encodedSize);
    encoder.writeUint32(0);
  };
  function QueryVersionResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QueryVersionResult.prototype.initDefaults_ = function() {
    this.version = 0;
  };
  QueryVersionResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QueryVersionResult.validate = function(messageValidator, offset) {
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

  QueryVersionResult.encodedSize = codec.kStructHeaderSize + 8;

  QueryVersionResult.decode = function(decoder) {
    var packed;
    var val = new QueryVersionResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.version = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  QueryVersionResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QueryVersionResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.version);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FlushForTesting(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FlushForTesting.prototype.initDefaults_ = function() {
  };
  FlushForTesting.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FlushForTesting.validate = function(messageValidator, offset) {
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

  FlushForTesting.encodedSize = codec.kStructHeaderSize + 0;

  FlushForTesting.decode = function(decoder) {
    var packed;
    var val = new FlushForTesting();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FlushForTesting.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FlushForTesting.encodedSize);
    encoder.writeUint32(0);
  };
  function RunOrClosePipeMessageParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RunOrClosePipeMessageParams.prototype.initDefaults_ = function() {
    this.input = null;
  };
  RunOrClosePipeMessageParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RunOrClosePipeMessageParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RunOrClosePipeMessageParams.input
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, RunOrClosePipeInput, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RunOrClosePipeMessageParams.encodedSize = codec.kStructHeaderSize + 16;

  RunOrClosePipeMessageParams.decode = function(decoder) {
    var packed;
    var val = new RunOrClosePipeMessageParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.input = decoder.decodeStruct(RunOrClosePipeInput);
    return val;
  };

  RunOrClosePipeMessageParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RunOrClosePipeMessageParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(RunOrClosePipeInput, val.input);
  };
  function RequireVersion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RequireVersion.prototype.initDefaults_ = function() {
    this.version = 0;
  };
  RequireVersion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RequireVersion.validate = function(messageValidator, offset) {
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

  RequireVersion.encodedSize = codec.kStructHeaderSize + 8;

  RequireVersion.decode = function(decoder) {
    var packed;
    var val = new RequireVersion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.version = decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RequireVersion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RequireVersion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.version);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function EnableIdleTracking(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EnableIdleTracking.prototype.initDefaults_ = function() {
    this.timeoutInMicroseconds = 0;
  };
  EnableIdleTracking.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EnableIdleTracking.validate = function(messageValidator, offset) {
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

  EnableIdleTracking.encodedSize = codec.kStructHeaderSize + 8;

  EnableIdleTracking.decode = function(decoder) {
    var packed;
    var val = new EnableIdleTracking();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.timeoutInMicroseconds = decoder.decodeStruct(codec.Int64);
    return val;
  };

  EnableIdleTracking.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EnableIdleTracking.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.timeoutInMicroseconds);
  };
  function MessageAck(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MessageAck.prototype.initDefaults_ = function() {
  };
  MessageAck.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MessageAck.validate = function(messageValidator, offset) {
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

  MessageAck.encodedSize = codec.kStructHeaderSize + 0;

  MessageAck.decode = function(decoder) {
    var packed;
    var val = new MessageAck();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MessageAck.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MessageAck.encodedSize);
    encoder.writeUint32(0);
  };
  function NotifyIdle(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NotifyIdle.prototype.initDefaults_ = function() {
  };
  NotifyIdle.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NotifyIdle.validate = function(messageValidator, offset) {
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

  NotifyIdle.encodedSize = codec.kStructHeaderSize + 0;

  NotifyIdle.decode = function(decoder) {
    var packed;
    var val = new NotifyIdle();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  NotifyIdle.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NotifyIdle.encodedSize);
    encoder.writeUint32(0);
  };

  function RunInput(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  RunInput.Tags = {
    queryVersion: 0,
    flushForTesting: 1,
  };

  RunInput.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  RunInput.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "queryVersion",
        "flushForTesting",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a RunInput member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(RunInput.prototype, "queryVersion", {
    get: function() {
      if (this.$tag != RunInput.Tags.queryVersion) {
        throw new ReferenceError(
            "RunInput.queryVersion is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RunInput.Tags.queryVersion;
      this.$data = value;
    }
  });
  Object.defineProperty(RunInput.prototype, "flushForTesting", {
    get: function() {
      if (this.$tag != RunInput.Tags.flushForTesting) {
        throw new ReferenceError(
            "RunInput.flushForTesting is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RunInput.Tags.flushForTesting;
      this.$data = value;
    }
  });


    RunInput.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case RunInput.Tags.queryVersion:
          encoder.encodeStructPointer(QueryVersion, val.queryVersion);
          break;
        case RunInput.Tags.flushForTesting:
          encoder.encodeStructPointer(FlushForTesting, val.flushForTesting);
          break;
      }
      encoder.align();
    };


    RunInput.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new RunInput();
      var tag = decoder.readUint32();
      switch (tag) {
        case RunInput.Tags.queryVersion:
          result.queryVersion = decoder.decodeStructPointer(QueryVersion);
          break;
        case RunInput.Tags.flushForTesting:
          result.flushForTesting = decoder.decodeStructPointer(FlushForTesting);
          break;
      }
      decoder.align();

      return result;
    };


    RunInput.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case RunInput.Tags.queryVersion:
          

    // validate RunInput.queryVersion
    err = messageValidator.validateStructPointer(data_offset, QueryVersion, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case RunInput.Tags.flushForTesting:
          

    // validate RunInput.flushForTesting
    err = messageValidator.validateStructPointer(data_offset, FlushForTesting, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  RunInput.encodedSize = 16;

  function RunOutput(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  RunOutput.Tags = {
    queryVersionResult: 0,
  };

  RunOutput.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  RunOutput.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "queryVersionResult",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a RunOutput member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(RunOutput.prototype, "queryVersionResult", {
    get: function() {
      if (this.$tag != RunOutput.Tags.queryVersionResult) {
        throw new ReferenceError(
            "RunOutput.queryVersionResult is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RunOutput.Tags.queryVersionResult;
      this.$data = value;
    }
  });


    RunOutput.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case RunOutput.Tags.queryVersionResult:
          encoder.encodeStructPointer(QueryVersionResult, val.queryVersionResult);
          break;
      }
      encoder.align();
    };


    RunOutput.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new RunOutput();
      var tag = decoder.readUint32();
      switch (tag) {
        case RunOutput.Tags.queryVersionResult:
          result.queryVersionResult = decoder.decodeStructPointer(QueryVersionResult);
          break;
      }
      decoder.align();

      return result;
    };


    RunOutput.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case RunOutput.Tags.queryVersionResult:
          

    // validate RunOutput.queryVersionResult
    err = messageValidator.validateStructPointer(data_offset, QueryVersionResult, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  RunOutput.encodedSize = 16;

  function RunOrClosePipeInput(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  RunOrClosePipeInput.Tags = {
    requireVersion: 0,
    enableIdleTracking: 1,
    messageAck: 2,
    notifyIdle: 3,
  };

  RunOrClosePipeInput.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  RunOrClosePipeInput.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "requireVersion",
        "enableIdleTracking",
        "messageAck",
        "notifyIdle",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a RunOrClosePipeInput member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(RunOrClosePipeInput.prototype, "requireVersion", {
    get: function() {
      if (this.$tag != RunOrClosePipeInput.Tags.requireVersion) {
        throw new ReferenceError(
            "RunOrClosePipeInput.requireVersion is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RunOrClosePipeInput.Tags.requireVersion;
      this.$data = value;
    }
  });
  Object.defineProperty(RunOrClosePipeInput.prototype, "enableIdleTracking", {
    get: function() {
      if (this.$tag != RunOrClosePipeInput.Tags.enableIdleTracking) {
        throw new ReferenceError(
            "RunOrClosePipeInput.enableIdleTracking is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RunOrClosePipeInput.Tags.enableIdleTracking;
      this.$data = value;
    }
  });
  Object.defineProperty(RunOrClosePipeInput.prototype, "messageAck", {
    get: function() {
      if (this.$tag != RunOrClosePipeInput.Tags.messageAck) {
        throw new ReferenceError(
            "RunOrClosePipeInput.messageAck is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RunOrClosePipeInput.Tags.messageAck;
      this.$data = value;
    }
  });
  Object.defineProperty(RunOrClosePipeInput.prototype, "notifyIdle", {
    get: function() {
      if (this.$tag != RunOrClosePipeInput.Tags.notifyIdle) {
        throw new ReferenceError(
            "RunOrClosePipeInput.notifyIdle is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = RunOrClosePipeInput.Tags.notifyIdle;
      this.$data = value;
    }
  });


    RunOrClosePipeInput.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case RunOrClosePipeInput.Tags.requireVersion:
          encoder.encodeStructPointer(RequireVersion, val.requireVersion);
          break;
        case RunOrClosePipeInput.Tags.enableIdleTracking:
          encoder.encodeStructPointer(EnableIdleTracking, val.enableIdleTracking);
          break;
        case RunOrClosePipeInput.Tags.messageAck:
          encoder.encodeStructPointer(MessageAck, val.messageAck);
          break;
        case RunOrClosePipeInput.Tags.notifyIdle:
          encoder.encodeStructPointer(NotifyIdle, val.notifyIdle);
          break;
      }
      encoder.align();
    };


    RunOrClosePipeInput.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new RunOrClosePipeInput();
      var tag = decoder.readUint32();
      switch (tag) {
        case RunOrClosePipeInput.Tags.requireVersion:
          result.requireVersion = decoder.decodeStructPointer(RequireVersion);
          break;
        case RunOrClosePipeInput.Tags.enableIdleTracking:
          result.enableIdleTracking = decoder.decodeStructPointer(EnableIdleTracking);
          break;
        case RunOrClosePipeInput.Tags.messageAck:
          result.messageAck = decoder.decodeStructPointer(MessageAck);
          break;
        case RunOrClosePipeInput.Tags.notifyIdle:
          result.notifyIdle = decoder.decodeStructPointer(NotifyIdle);
          break;
      }
      decoder.align();

      return result;
    };


    RunOrClosePipeInput.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case RunOrClosePipeInput.Tags.requireVersion:
          

    // validate RunOrClosePipeInput.requireVersion
    err = messageValidator.validateStructPointer(data_offset, RequireVersion, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case RunOrClosePipeInput.Tags.enableIdleTracking:
          

    // validate RunOrClosePipeInput.enableIdleTracking
    err = messageValidator.validateStructPointer(data_offset, EnableIdleTracking, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case RunOrClosePipeInput.Tags.messageAck:
          

    // validate RunOrClosePipeInput.messageAck
    err = messageValidator.validateStructPointer(data_offset, MessageAck, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case RunOrClosePipeInput.Tags.notifyIdle:
          

    // validate RunOrClosePipeInput.notifyIdle
    err = messageValidator.validateStructPointer(data_offset, NotifyIdle, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  RunOrClosePipeInput.encodedSize = 16;
  exports.RUN_MESSAGE_ID = RUN_MESSAGE_ID;
  exports.RUN_OR_CLOSE_PIPE_MESSAGE_ID = RUN_OR_CLOSE_PIPE_MESSAGE_ID;
  exports.RunMessageParams = RunMessageParams;
  exports.RunResponseMessageParams = RunResponseMessageParams;
  exports.QueryVersion = QueryVersion;
  exports.QueryVersionResult = QueryVersionResult;
  exports.FlushForTesting = FlushForTesting;
  exports.RunOrClosePipeMessageParams = RunOrClosePipeMessageParams;
  exports.RequireVersion = RequireVersion;
  exports.EnableIdleTracking = EnableIdleTracking;
  exports.MessageAck = MessageAck;
  exports.NotifyIdle = NotifyIdle;
  exports.RunInput = RunInput;
  exports.RunOutput = RunOutput;
  exports.RunOrClosePipeInput = RunOrClosePipeInput;
})();