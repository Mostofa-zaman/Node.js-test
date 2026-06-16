const http = require("http");

const server = http.createServer((req, res) => {

  console.log(req.url);

 
  console.log(req.method);

  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  res.end("<h1>Hello</h1>");
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});