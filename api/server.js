
const http = require("http");
const url = require("url");


const recieveRequest = (req, res) => {
    console.log("Recieved Request");

    const urlw = url.parse(req.url);
    const path = urlw.pathname;
    console.dir(urlw.query);

    if(path == "/login" && req.method == "POST"){
        res.writeHead(200, {
            'Content-Type': "text/plain"
        });
        res.write("login");
        res.end();
        return;
    }

    res.writeHead(404, {
        'Content-Type': "text/plain"
    });
    res.write("Not Found: " + req.url);
    res.end();
};

const server = http.createServer(recieveRequest);
server.listen(3001);

console.log("server listening on port 3000");