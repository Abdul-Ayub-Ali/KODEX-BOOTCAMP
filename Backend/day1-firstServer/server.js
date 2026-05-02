const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('hey you are at your first server')
});
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is started at port no ${PORT} `)
})