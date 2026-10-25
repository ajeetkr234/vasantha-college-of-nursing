import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jsx': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

// Check if dist folder exists (production build)
const distDir = path.join(__dirname, 'dist');
const useDist = fs.existsSync(distDir);
const baseDir = useDist ? distDir : __dirname;

function handleRequest(req, res) {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') reqUrl = '/index.html';

  let filePath = path.join(baseDir, reqUrl);

  // If path doesn't exist, check baseDir without dist or fallback to index.html for SPA routing
  if (!fs.existsSync(filePath)) {
    const fallbackRoot = path.join(__dirname, reqUrl);
    if (fs.existsSync(fallbackRoot)) {
      filePath = fallbackRoot;
    } else {
      // SPA Fallback: return index.html for client-side routing
      filePath = path.join(baseDir, 'index.html');
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(content);
    }
  });
}

function listenOnAvailablePort(startPort) {
  const server = http.createServer(handleRequest);

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`[Info] Port ${startPort} is already in use, trying port ${startPort + 1}...`);
      listenOnAvailablePort(startPort + 1);
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(startPort, () => {
    const url = `http://localhost:${startPort}/`;
    console.log(`\n=============================================================`);
    console.log(`  Smt. M. C. Vasantha College of Nursing Website is live!`);
    console.log(`  URL: ${url}`);
    console.log(`=============================================================\n`);

    exec(`start ${url}`, () => {});
  });
}

listenOnAvailablePort(3000);

