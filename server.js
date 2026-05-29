import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = resolve(__dirname, 'dist');
const port = Number(process.env.PORT) || 4173;

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

function sendFile(res, filePath) {
  res.writeHead(200, {
    'Content-Type': contentTypes[extname(filePath).toLowerCase()] || 'application/octet-stream',
  });
  createReadStream(filePath).pipe(res);
}

createServer((req, res) => {
  const requestPath = decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname);
  const normalizedPath = normalize(requestPath).replace(/^(\.\.[/\\])+/, '');
  const filePath = join(distDir, normalizedPath);

  if (filePath.startsWith(distDir) && existsSync(filePath) && statSync(filePath).isFile()) {
    sendFile(res, filePath);
    return;
  }

  const indexPath = join(distDir, 'index.html');
  if (existsSync(indexPath)) {
    sendFile(res, indexPath);
    return;
  }

  res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Build output not found. Run npm run build before starting the server.');
}).listen(port, '0.0.0.0', () => {
  console.log(`MADES web server listening on port ${port}`);
});
