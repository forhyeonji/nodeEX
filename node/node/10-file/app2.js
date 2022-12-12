const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf-8') //
 .then((data)=>console.log(data))
 .catch(console.error);

// writing a file (없던 파일이면 새로 생김)
fs.writeFile('./file.txt','Hello, Dream Coders! :)') // 새로운 file.txt 이 생김
 .catch(console.error);

// writing a file2 (있던 파일이면 덮어씌기)
fs.writeFile('./file.txt','Yo!!, Dream Coders! :)') // 기존에 있으면 덮어씌워 짐 
 .catch(console.error);

 // writing a file3 (있던 파일이면 기존 내용에 더하기)
fs.appendFile('./file.txt','So Coooool!!!!') // 기존에 있으면 덮어씌워 짐 
 .then(()=>{

    // copy -> 비동기적이기 때문에 여기에 합치면 내용까지 복사 됨
    fs.copyFile('./file.txt', './file2.txt') //
        .catch(console.error); //

 })
 .catch(console.error);


// // copy -> 비동기적이기 때문에 위에 코드에 합치면 됨
// fs.copyFile('./file.txt', './file2.txt') //
//  .catch(console.error);

// folder
fs.mkdir('sub-folder') //
 .catch(console.error);

// readdir -> 경로에 있는 모든 파일을 읽어온다.
fs.readdir('./') //
 .then(console.log)
 .catch(console.error);

