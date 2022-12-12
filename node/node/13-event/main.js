const logger = require('./logger.js');
const emitter = new logger.Logger();

emitter.on('log', (event) => {
    console.log('111');
    console.log(event);
    console.log('222');
})

emitter.log(() => {
    console.log('.... doing something!');
});