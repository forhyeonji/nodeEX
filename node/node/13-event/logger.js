const EventEmitter = require('events');
const fs = require('fs');


class Logger extends EventEmitter {
    // 클래스 자체를 emitter 되게 만들어서 수출해도 같은 오브젝트를 쓰게 해주기!

    log (callback) {
        this.emit('log', 'started...');
        console.log('로거 111');
        callback();
        console.log('로거 222');
        this.emit('log', 'ended!');
    };

}

module.exports.Logger = Logger;