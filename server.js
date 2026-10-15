const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  // Mock Vercel Telemetry endpoints to avoid 404s in local development
  if (req.url.startsWith('/_vercel/')) {
    if (req.url.endsWith('.js')) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end('/* Vercel telemetry mocked for localhost */');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
    return;
  }

  // Handle API Endpoints for OTP verification & records
  if (req.url.startsWith('/api/')) {
    const apiPath = req.url.split('?')[0];

    const sendJson = (status, obj) => {
      res.writeHead(status, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      res.end(JSON.stringify(obj));
    };

    if (req.method === 'OPTIONS') {
      res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      return res.end();
    }

    let bodyData = '';
    req.on('data', chunk => { bodyData += chunk; });
    req.on('end', async () => {
      let body = {};
      try { body = bodyData ? JSON.parse(bodyData) : {}; } catch (e) {}

      const mockReq = {
        method: req.method,
        body,
        headers: req.headers,
        socket: req.socket
      };
      const mockRes = {
        setHeader: (k, v) => res.setHeader(k, v),
        status: (s) => ({
          json: (d) => sendJson(s, d),
          end: () => res.end()
        })
      };

      try {
        if (apiPath === '/api/send-otp') {
          const handler = require('./api/send-otp');
          return await handler(mockReq, mockRes);
        } else if (apiPath === '/api/verify-otp') {
          const handler = require('./api/verify-otp');
          return await handler(mockReq, mockRes);
        } else if (apiPath === '/api/otp-records') {
          const handler = require('./api/otp-records');
          return await handler(mockReq, mockRes);
        } else {
          return sendJson(404, { error: 'API endpoint not found' });
        }
      } catch (err) {
        console.error('Server API error:', err);
        return sendJson(500, { error: 'Internal server error' });
      }
    });
    return;
  }

  // Parse URL pathname
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';

  let filePath = path.join(ROOT, reqPath);

  // Clean URLs support: if requesting /about, check if /about.html exists
  if (!fs.existsSync(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`<h1>404 Not Found</h1><p>The requested file <code>${reqPath}</code> was not found.</p>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Local development server running at:`);
  console.log(`> http://localhost:${PORT}`);
});
