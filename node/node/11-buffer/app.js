// Fixed-size chuck of memory
// array of integers, byte of data
const fs = require('fs');

const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());


// create
const buf2 = Buffer.alloc(2); // 길이가 2인 버퍼를 반환한다. 덩어리가 2인 메모리를 찾아서 초기화한다.
const buf3 = Buffer.allocUnsafe(2) // 초기화 안하는 것도 있음. fast

buf2[0] = 72;
buf2[1] = 105;

console.log(buf2.toString()); // Hi 출력

buf2.copy(buf3); // buf2 를 복사해서 buf3 에 옮긴다.

console.log(buf3.toString());


// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());