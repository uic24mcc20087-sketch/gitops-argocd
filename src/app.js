const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello GitOps with Argo CD!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
