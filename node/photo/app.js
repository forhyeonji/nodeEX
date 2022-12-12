const { homedir } = require('os');
const path = require('path');
const os = require('os');
const fs = require('fs');

// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다.

const folder = process.argv[2]; // nodemon app test 라고 따로 인자를 전달하면 test 라는 인자를 받을 수 있다
const workingDir = path.join(os.homedir(),'Desktop', 'Pictures', folder);

if(!folder || !fs.existsSync(workingDir)){
    console.log('Please enter folder name in Pictures');
    return;
};

// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더안에 있는 파일들을 다 돌면서  해당하는 mp4|mov, png|aae, IMG_1234 (IMG_E1234)
fs.promises
.readdir(workingDir)
.then(processFiles)
.catch(console.error);


function processFiles (files){
    files.forEach(file => {
        if (isVideoFile(file)){
            move(file, videoDir);
        } else if (isCapturedFile(file)){
            move(file, capturedDir);
        } else if (isDuplicatedFile(files, file)){
            move(file, duplicatedDir);
        }
    });
}


function isVideoFile(file){
    const regExp = /(mp4|mov)$/gm;
    const match = file.match(regExp);
    return !!match;
};

function isCapturedFile(file){
    const regExp = /(png|aae)$/gm;
    const match = file.match(regExp);
    return !!match;
};

function isDuplicatedFile(files, file){
    // IMG_XXXX -> IMG_EXXXX
    if(!file.startsWith('IMG_') || file.startsWith('IMG_E')){
        return false;
    }
    console.log('잘라보자!!', file.split('_')[1]);
    const edited = `IMG_E${file.split('_')[1]}`;
    console.log('에디트!!!', edited)
    const found = files.find( (f) => f.includes(edited));
    console.log('듀플리 found!!!!!', found);
    return !!found;
};


function move (file, targetDir){
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(targetDir, file);
    fs.promises //
      .rename(oldPath, newPath)
      .catch(console.error);
}