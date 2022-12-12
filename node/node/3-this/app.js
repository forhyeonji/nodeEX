function hello(){
    console.log(this);
    console.log(this === global);
    // 함수 안에서 this 는 global이다
}

hello();

class A {
    constructor(num){
        this.num = num;
    }

    memberFunction(){
        console.log('------- class -------');
        console.log(this);
        console.log(this === global);
    }

    // 클래스 안에서 this 는 글로벌이 아니다
}

const a = new A(1);
a.memberFunction();


console.log('------- global scope -------');
console.log(this);
console.log(this === module.exports);
    // 함수, 클래스 밖에서 this 는 module.exports 이다