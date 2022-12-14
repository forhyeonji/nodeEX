// import express from 'express';
// import fs from 'fs';
// import fsAsync from 'fs/promises';

// const app = express();

// app.use(express.json());

// app.get('/file1', (req, res) => {
//     // 동기적인 로직은 try catch문으로 error 처리 해주기!

//     // try{
//     //     const data = fs.readFileSync('/file.txt');
//     // } catch (error) {
//     //     res.status(404).send('File not found');
//     // }
    

//     // 비동기적, 요것은 error가 외부로 던져져서 맨 밑에서 잡을 수 있는게 아니라
//     // 콜백 함수로 error가 전달되어서 내부에서 error가 발생
//     // 오류가 안생기고 로딩스피너만 도는 것, 콜백함수안에서 error를 처리해주어야함. try-catch 소용 x
//     fs.readFile('/file1.txt', (err, data) => {
//         if(err){
//             res.status(404).send('File not found');
//         }
//     });
// });



// // 비동기적, error가 내부적으로 발생하기 때문에 try-catch문이 아닌 promise로 then-catch 로 error 핸들링
// // case 1) 아래는 catch로 잡은 error를 next로 다음 미들웨어로 전달되고 전달되어서 맨 밑에 있는 error 핸들링으로 전달됨.
// // case 2) 자체적으로 내부에서 error를 처리함
// app.get('/file2', (req, res, next) => {
//     // case 1)
//     // fsAsync.readFile('/file.txt')
//     //         .catch(next);

//     // case 2)
//     fsAsync.readFile('/file.txt')
//             .catch((error)=>res.status(404).send('File not found'));

// });


// // 함수 자체는 async 표시를 해서 비동기 이지만 await에 의해 안에 로직은 동기적으로 작동한다!
// // 이는 error가 바깥으로 던져진게 아니다. 내부적으로 발생했지만 로직은 동기적이므로 try-catch로 처리를 해야한다.
// app.get('/file3', async (req, res) => {
//     try{
//         const data = await fsAsync.readFile('/file.txt');
//     } catch (err) {
//         res.status(404).send('File not found');
//     }
// });

// app.use((error, req, res, next) => {
//     console.error(error);
//     res.status(500).json({ message : 'Something went wrong' });
// });

// app.listen(8080);