const http = require('http');
const fs = require('fs');
// const http2 = require('http2'); // https 배포할 때 바꾸기

const server = http.createServer((req, res) => {
    console.log('incomingg...');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);

    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./html/index.html').pipe(res);
    } else if (url === '/courses') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./html/courses.html').pipe(res);
    } else {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./html/not-found.html').pipe(res);
    }

    // res.end();    // pipe 가 있을때는 res.end 를 해주면 연결이 안된다.
    
});

server.listen(8080);