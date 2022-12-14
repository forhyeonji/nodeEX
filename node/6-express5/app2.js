import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

// app2.js 는 비동기 에러를 처리할때 catch 하기 비효율적이므로
// npm i express-async-errors
// 라이브러리를 통해 비동기에서 catch를 하지 않아도 맨 밑의 에러핸들링에서 에러를 잡을 수 있게 해 줌!

// 그치만 최근에는 express5 베타 버전에 저런 라이브러리 없이 비동기도 catch 없이 맨 밑의 에러핸들링이 가능함
// 이 파일은 라이브러리 없이 아래를 설치 한 것임
// npm i express@5.0.0-alpha.8


const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
    });


    // promise 를 사용할때는 return 꼭 해주기
app.get('/file2', (req, res, next) => {
    return fsAsync.readFile('/file.txt');
});


app.get('/file3', async (req, res) => {
        const data = await fsAsync.readFile('/file.txt');
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message : 'Something went wrong' });
});

app.listen(8080);