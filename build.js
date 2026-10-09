const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist, { recursive: true });

const ignore = new Set(['dist', 'node_modules', '.git', '.vercel', 'build.js']);
const entries = fs.readdirSync(__dirname);

for (const entry of entries) {
  if (ignore.has(entry)) continue;
  const src = path.join(__dirname, entry);
  const dest = path.join(dist, entry);
  fs.cpSync(src, dest, { recursive: true });
}

console.log('Build successful: static assets compiled to dist/');
