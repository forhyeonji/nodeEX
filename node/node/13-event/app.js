const EventEmitter = require('events');
const emitter = new EventEmitter();



const callback1 = (args) => {
    console.log('first callback -', args);
};          // 2 ๐ ์ฝ๋ฐฑ ํจ์๋ฅผ ์ค๊ฐ์ ์ ๊ฑฐํ๋ ค๋ฉด ๋ณ์์ ํ ๋นํด์ผ ํจ

emitter.on('hyeonji', callback1);

emitter.on('hyeonji', (args) => {
    console.log('second callback-', args);
});

// emit์ผ๋ก hyeonji๋ผ๋ ํจ์๋ฅผ ๋ฐ์!
// ์ธ์๋ { message:1 } ์ด ๋ถ๋ถ์ด ์ธ์์ด๋ค.
emitter.emit('hyeonji', { message: 1 });
emitter.emit('hyeonji', { message: 2 });
emitter.removeListener('hyeonji', callback1);       // 2 ๐ ์ฝ๋ฐฑํจ์ 1๊ฐ ์ ๊ฑฐ
emitter.emit('hyeonji', { message: 3 });            // 2 ๐ ์ฌ๊ธฐ์๋ ์ด์  1๋ฒ์งธ ์ฝ๋ฐฑ ์คํ ์ ํจ