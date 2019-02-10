//simple http code
// const http = require('http');
// const server =http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.write('Hello world from nodejs');
//         res.end();
//     }else{
//         res.write('using some other domain');
//         res.end();
//     }
// })
// server.listen('3000');

//simple http file
const http = require('http');
const fs  = require('fs');
http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/index.html')
    res.writeHead(200,{'Content-type':'text/html'});//for json content type is application/json
    readStream.pipe(res);
})
