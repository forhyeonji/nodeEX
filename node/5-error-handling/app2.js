import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
// require('express-async-errors');  // CommonJS module
import {} from 'express-async-errors';

// app2.js 는 비동기 에러를 처리할때 catch 하기 비효율적이므로
// npm i express-async-errors
// 를 통해 비동기에서 catch를 하지 않아도 맨 밑의 에러핸들링에서 에러를 잡을 수 있게 해 줌!


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