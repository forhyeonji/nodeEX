const { fa2, fa3 } = require('@fortawesome/free-solid-svg-icons');

console.log('logging....');
console.clear();

// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경고
console.error('error'); // 에러, 사용자 에러


// assert : 참이 아닐때만 출력
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');


// print object
const student = { name : 'hyeonji', age: 20, company:{ name: 'AC' } }; // 오브젝트 안의 오브젝트
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth:0 }); // depth는 오브젝트를 어느 깊이까지 보여줄건지


// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++){
    i++;
}
console.timeEnd('for loop');


// counting
function a() {
    console.count('a function');
}
a();
console.countReset('a function'); // count 리셋할 때, 안에 글은 똑같아야 된다
a();


// trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace();
}

f1();