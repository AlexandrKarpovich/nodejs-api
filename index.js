import express from 'express';

const port = 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Wellcome');
})

app.get('/hello', (req, res ) => {
    res.send('Hello');
})


app.listen(port, () => {
    console.log(`Server work on http://localhost:${port}`);
})



// http server ========
// import http from 'http';


// const host = '127.0.0.1';
// const port = 8000;

// const server = http.createServer((req, res) => {
//     switch(req.method) {
//         case 'GET':
//             switch (req.url) {
//                 case '/hello':
//                     res.statusCode = 200;
//                     res.setHeader('Content-Type', 'text/plain');
//                     res.end('Hello');
//             }
//             break;
//     }

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Wellcome');

   
// })

// server.listen(port, host, () => {
//     console.log(`Server work on ${host}:${port}`);
    
// })