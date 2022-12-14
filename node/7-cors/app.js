import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

// cors 라이브러리 설치 전 cors를 위한 설정!
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//     res.setHeader(
//         'Access-Control-Allow-Methods',
//         'OPTIONS, GET, POST, PUT, DELETE'
//     );
//     next();
// });

const corsOptions = {
        origin: ['http://127.0.0.1:5500'],  // origin 옵션은 서버에 요 주소에 한해서만 서버의 데이터를 보여줘도 돼!
        optionsSuccessStatus : 200,
        credentials : true, // 사용자의 정보를 더 담는다. // Access-Control-Allow-Credentials: true
    };


// 유용한 미들웨어 5가지
app.use(express.json()); // req.body를 보려면 express.json을 등록해줘야한다.
app.use(cookieParser()); // req.cookies를 보려면 cookieParser을 npm i cookieParser, import, 호출 해줘야한다.
app.use(morgan('tiny')); // 서버에 대한 정보, 요청, 날짜 등등 정보를 console에 보여줌
app.use(cors(corsOptions));
app.use(helmet());  // header에 공통적으로 필요한 보안을 설정해줌. network의 header 보면 x- 로 시작하는 것



app.get('/', (req, res) => {
    console.log(req.body);
    console.log(req.cookies); // postman 으로 쿠키 보냄
    console.log('그래서 쿠키는??',req.cookies.yummy_cookie);
    res.send('Welcome!');
});

app.listen(8080);