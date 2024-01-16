const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {
        res.writeHead(200, { "Content-Type": "text/html" });
        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'template', 'index.html'), 'utf-8', (err, conten) => {
                if (err) throw err;
                res.end(conten);
            })
        }
        else if (req.url === '/about') {
            fs.readFile(path.join(__dirname, 'template', 'about.html'), 'utf-8', (err, conten) => {
                if (err) throw err;
                res.end(conten);
            })
        }
        else if (req.url === '/contact') {
            fs.readFile(path.join(__dirname, 'template', 'contact.html'), 'utf-8', (err, conten) => {
                if (err) throw err;
                res.end(conten);
            })
        }
        else if (req.url === '/api/admin') {
            res.writeHead(200, { "Content-Type": "text/json" });

            const admin = { name: "Javohir", surename: "To'lqinov", job: "Backend developer" }

            res.end(JSON.stringify(admin));

        }
    }

    else if (req.method === 'POST') {
    const body = [];

    req.on('data', data => {
        body.push(Buffer.from(data));
    })

    req.on('end', () => {
        const message = body.toString().split("=")[1];

        res.end(`Name successfully added : ${message}`)
    })

}

})

server.listen(8000, () => {
    console.log("Server has been started on port: 8000");
})