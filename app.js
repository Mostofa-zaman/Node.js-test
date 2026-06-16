const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home Page");
  } 
  else if (req.url === "/about" && req.method === "GET") {
    res.end("About Page");
  }
  else if (req.url === "/users" && req.method === "POST") {
    res.end("User Created");
  }
  else {
    res.writeHead(404);
    res.end("404 Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server is running...");
});