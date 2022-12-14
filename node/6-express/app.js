import express from 'express';
const app = express();

// app.get('/sky/:id', (req, res, next)=>{
//     // console.log(req.path);
//     // console.log(req.headers);
//     console.log(req.params);
//     console.log(req.params.id);
//     console.log(req.query);
//     console.log(req.query.keyworld);

//     res.setHeader('hello','value');
//     res.status(201).send('hi!!!');
// })


// -----------------------------------


// all과 use 차이
// app.all('/api', (req, res, next) => {
//     // 오직 api 이 경로에만 콜백함수를 실행!
//     console.log('all!!!');
// });

// app.use('/sky', (req, res, next) => {
//     // sky 경로 밑으로 모두 콜백함수를 실행!
//     console.log('use!!!');
// });


// app.get(
//     '/',
//     (req, res, next) => {
//         console.log('first');
//         // next('route');  // 뒤의 first2는 무시하고 second로 가라
        
//         if(false){
//             return res.send('리턴이 필요해!');
//         }

//         res.send('조건에 해당 안 돼!');

//     }, (req, res, next) => {
//         console.log('first2');
//         res.send('수고했다!');
//     })

//     app.get('/', (req, res, next) => {
//         console.log('second');
//     })


// app.use((req, res, next) => {
//     res.status(404).send('Not Foundㅠ_ㅠ');
// })
// app.use((error, req, res, next) => {
//     console.error(error);
//     res.status(500).send('Sorry, try later!');
// })


// -----------------------------------


app.use(express.json());

app.post('/', (req, res, next) => {
    console.log(req.body);
})


app.listen(8080);