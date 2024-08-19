'use strict';

const mediaStreamContrains = {
    video : { width: 1280, height: 720, frameRate:15, },
    audio : false
};

const videoplay = document.querySelector('video#player');

function gotLocalMediaStream(mediaStream){
    videoplay.srcObject = mediaStream;
}

function handleLocalMediaStreamError(error){
    console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(mediaStreamContrains).then(
    gotLocalMediaStream
).catch(
    handleLocalMediaStreamError
);

var picture = document.querySelector('canvas#picture');
picture.width = 640;
picture.height = 480;

let filterSelect = document.querySelector('select#filter');

document.querySelector('#TakePhoto').onclick = function() {
    
    
    picture.className = filterSelect.value;
    picture.getContext('2d').drawImage(videoplay, 0, 0, picture.width, picture.height);
}

function downLoad(url){
    var oA = document.createElement("a");
    oA.download = 'photo';// 设置下载的文件名，默认是'下载'
    oA.href = url;
    document.body.appendChild(oA);
    oA.click();
    oA.remove(); // 下载之后把创建的元素删除
}


document.querySelector("button#save").onclick = function (){
    downLoad(picture.toDataURL("image/jpeg"));
}
