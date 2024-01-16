const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url);

    res.write("<h2>Salom dunyo</h2>");
    res.end();
})

server.listen(8000, () => {
    console.log("Server has been started on port: 8000");
})