const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 8080;

http.createServer((req,res) => {
    const query = url.parse(req.url, true)
    let path = query.pathname;

    if (path === '/' || path === '/index' || path === '/index.html'){
        path = '/index.html';
    } else if (path === '/about' || path === '/about.html') {
        path = '/about.html';
    } else if (path === '/contact' || path === '/contact.html'){
        path = '/contact.html';
    } else {
        path = '/error.html';
    }

    const file = './view' + path;

    fs.readFile(file, (err,data) => {
        if(err){
            fs.readFile('./view/error.html', (err, data) => {
                res.writeHead(404, {'Content-Type':'text/html'});
                res.write(data);
                return res.end();
            });
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(port, () => {
    console.log("Server Running.");
})