const fs = require('fs');

// api는 3가지 형태로 제공 됨
// rename(...., callback(error, data)) -> 비동기
// try {  renameSync(....)  } catch(e) { } -> Blocking / 따로 콜백 함수를 전달 x
// promises.rename().then().catch(0)


try{    // renameSync 은 추천 안 함!
    fs.renameSync('./text.txt','./text-new.txt'); // (옛 이름, 새로운 이름)
} catch(error) {
    console.error(error);
}

fs.rename('./text-new.txt', './text.txt', (error)=>{
    console.log(error);
});


fs.promises
  .rename('./text2.txt','./text-new2.txt') //
  .then(() => console.log('Done!')) //
  .catch(console.error); //

console.log('hello!');
