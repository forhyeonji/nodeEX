const jwt = require('jsonwebtoken');


const secret = 'F%7^Nu8rtK8ZpPwduEZF&A5%6L#x1cUF';


// sign 으로 토큰 생성
const token = jwt.sign(
    {
        id: 'userId',
        isAdmin: true,
    },

// secret 키
// https://www.lastpass.com/features/password-generator
// 권고되는 길이는 32
    secret,

// 유효한 토큰 생성을 위한 option 추가
    { expiresIn : 2 }
);

console.log(token);


// 🔑해독하기
// jwt.io 페이지 접속 -> 스크롤링 하면 console.log(token) 을 기입하면 해독이 됨
// 만약 토큰의 내용을 임의 변경하면 토큰 키가 변경 됨.
// 아래는 토큰이 유효한지 확인하는 방법

const edited = 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzE3ODcxNDd9.au6xYMtPRaWgOBGJQPD4QleE5dw2zQlQtX2cYx9H420';
const notEdited =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTc4NzkwNH0.rOMZ23Qsqa4CapGf_EeH78RI9ASn8fbQybVw1gyaGy4';


// 토큰 비교하기
jwt.verify(notEdited, secret, (error, decoded) => {
    console.log('------------ 🔷 토큰비교하기 🔷 -------------');
    console.log(`🩸에러!!!!!🩸 : ${error},  💊해독!!!!💊 : ${decoded}`);
    console.log(decoded);

});


// 유효기간이 있는 토큰

setTimeout(()=> {
    jwt.verify(token, secret, (error, decoded) => {
        console.log('------------ 🕑 유효기간토큰 🕑 -------------');
        console.log(`🩸에러!!!!!🩸 : ${error},  💊해독!!!!💊 : ${decoded}`)
        console.log(decoded)
    })
}, 3000);