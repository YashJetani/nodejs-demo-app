const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('🚀 Hello from Node.js App with Docker + CI/CD!\n');
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
