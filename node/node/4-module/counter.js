
let count = 0;

function increase(){
    count++;
}

function getCount(){
    return count;
}

// node exports 문법
// count 는 숨겼음
module.exports.getCount = getCount;
module.exports.increase = increase;