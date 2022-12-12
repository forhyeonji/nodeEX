const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip(); // 압축하기
const writeStream = fs.createWriteStream('./file4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream); // 글을 읽어오고, 압축하고, 새로 쓰고
piping.on('finish', () => {
    console.log('done!!');
});


const http = require('http');
const server = http.createServer((req, res) => {
    // 한번에 다 읽는 법
    // fs.readFile('file.txt', (err, data) => {
    //     res.end(data);
    // });

    const stream = fs.createReadStream('./file.txt');
    stream.pipe(res);
});

server.listen(3000);