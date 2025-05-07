const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

let PORT = process.env.PORT || 8080;
const publicDir = path.join(__dirname);

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  let filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(publicDir, 'index.html'), (err2, indexContent) => {
        if (err2) {
          res.writeHead(500);
          res.end('Erreur serveur');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(indexContent, 'utf-8');
        }
      });
    } else {
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

function startServer(port) {
  server.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`Serveur démarré sur ${url}`);
    // Ouvre le navigateur par défaut
    switch (process.platform) {
      case 'darwin': exec(`open ${url}`); break;       // macOS
      case 'win32': exec(`start ${url}`); break;       // Windows
      default: exec(`xdg-open ${url}`); break;         // Linux
    }
  });
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.warn(`Le port ${PORT} est déjà utilisé. Tentative avec le port ${PORT + 1}...`);
    PORT++;
    startServer(PORT);
  } else {
    console.error('Erreur serveur :', err);
  }
});

startServer(PORT);
