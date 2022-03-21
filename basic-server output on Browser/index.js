const http = require('http');
http.createServer((req,res)=>{
    res.write("<p>Node first server</p>");
    res.end();
}).listen(4020);