const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    fs.readFile('html/form.html', 'utf-8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } else if (req.url === '/submit') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Data is Submitted</h1>');
        } 
        



    });
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
