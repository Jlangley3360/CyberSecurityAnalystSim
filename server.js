import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('.', import.meta.url));
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json' };
const allowed = new Set(['/index.html', '/styles.css', '/src/app.js', '/src/cases.js', '/src/engine.js', '/src/training-pack.js', '/src/persistence.js']);
http.createServer(async (req, res) => {
  try {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    const file = pathname === '/' ? '/index.html' : pathname;
    if (!allowed.has(file)) { res.writeHead(404); res.end('Not found'); return; }
    const body = await readFile(path.join(root, file));
    res.writeHead(200, { 'Content-Type': `${types[path.extname(file)]}; charset=utf-8`, 'X-Content-Type-Options': 'nosniff' });
    res.end(body);
  } catch { res.writeHead(500); res.end('Unable to load application'); }
}).listen(Number(process.env.PORT || 3000), '127.0.0.1', () => console.log(`Analyst Lab listening on port ${process.env.PORT || 3000}`));
