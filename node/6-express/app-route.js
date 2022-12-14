import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json());    // REST API -> Body
app.use(express.urlencoded({ extended : false }));  // HTML Form -> Body


const options = { // app.use(express.static()) 안에 들어가는 옵션임
    dotfiles : 'ignore', // 숨겨진 파일은 보이지 않게
    etag : false,
    index : false,
    maxAge : '1d', // 얼마나 캐시가 가능한지
    redirect : false,
    setHeaders : function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    },
};

app.use(express.static('public', options));  // http://localhost:8080/index.html 으로 public 폴더의 파일에 접근가능

// 왼쪽은 상위 baseurl
app.use('/posts', postRouter);
app.use('/users', userRouter);


app.listen(8080);