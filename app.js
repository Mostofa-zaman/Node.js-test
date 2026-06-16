const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About Page</h1>");
  } else {
    res.writeHead(404);
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(5000);