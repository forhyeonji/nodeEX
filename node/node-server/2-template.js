const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
// const http2 = require('http2'); // https 배포할 때 바꾸기

const name = 'HyeonJi';
const courses = [{name:'HTML'},{name:'CSS'},{name:'JS'},{name:'Node'} ];
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const url = req.url;
    if(url === '/'){
        ejs
            .renderFile('./template/index.ejs', { name })
            .then(data => res.end(data));

    } else if (url === '/courses') {
        ejs
            .renderFile('./template/courses.ejs', { courses })
            .then(data => res.end(data));

    } else {
        ejs
            .renderFile('./template/not-found.ejs', { name })
            .then(data => res.end(data));

    }

    // res.end();    // pipe 가 있을때는 res.end 를 해주면 연결이 안된다.
    
});

server.listen(8080);