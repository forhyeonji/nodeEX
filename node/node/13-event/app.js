const EventEmitter = require('events');
const emitter = new EventEmitter();



const callback1 = (args) => {
    console.log('first callback -', args);
};          // 2 🏖 콜백 함수를 중간에 제거하려면 변수에 할당해야 함

emitter.on('hyeonji', callback1);

emitter.on('hyeonji', (args) => {
    console.log('second callback-', args);
});

// emit으로 hyeonji라는 함수를 발생!
// 인자는 { message:1 } 이 부분이 인자이다.
emitter.emit('hyeonji', { message: 1 });
emitter.emit('hyeonji', { message: 2 });
emitter.removeListener('hyeonji', callback1);       // 2 🏖 콜백함수 1개 제거
emitter.emit('hyeonji', { message: 3 });            // 2 🏖 여기서는 이제 1번째 콜백 실행 안 함