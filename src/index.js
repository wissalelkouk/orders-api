const http = require('node:http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/health') {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: 'ok' }));
  }
  res.writeHead(200);
  res.end(JSON.stringify({ service: 'orders-api', message: 'Service créé depuis la plateforme interne' }));
});

if (require.main === module) {
  server.listen(PORT, () => console.log(`orders-api écoute sur le port ${PORT}`));
}
module.exports = server;
