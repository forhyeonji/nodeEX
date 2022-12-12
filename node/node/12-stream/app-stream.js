const fs = require('fs');

// const readStream = fs.createReadStream('./file.txt', {
//     // highWaterMark: 6, // 기본 64kbytes
//     // encoding: 'utf-8',
// });

// const data=[];
// readStream.on('data', (chunk) => {
//     // console.log(chunk);
//     data.push(chunk);
//     console.count('data');
// });

// readStream.on('end', () => {
//     console.log(data.join(''));
// })

// readStream.on('error', (error) => {
//     console.log(error);
// });


// 체이닝 (변수에 할당하지 않고 체이닝으로 한번에 완성!)
const data=[];

fs.createReadStream('./file.txt', {
        // highWaterMark: 6, // 기본 64kbytes
        // encoding: 'utf-8',
    })
    .on('data', (chunk) => {
        // console.log(chunk);
        data.push(chunk);
        console.count('data');
    })
    .on('end', () => {
        console.log(data.join(''));
    })
    .on('error', (error) => {
        console.log(error);
    });