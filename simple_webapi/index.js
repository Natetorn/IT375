const http = require('http');
//create server
const server = http.createServer((req ,res) =>{
    res.end('Response data from port 8000');
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to request on port 8000');
});