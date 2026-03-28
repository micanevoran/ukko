// update-clientes.js
// Escanea img/clientes/ y genera img/clientes/manifest.json
// Uso: node update-clientes.js

const fs   = require('fs');
const path = require('path');

const dir      = path.join(__dirname, 'img', 'clientes');
const manifest = path.join(dir, 'manifest.json');

const files = fs.readdirSync(dir)
  .filter(f => /\.(png|jpg|jpeg|webp|svg)$/i.test(f))
  .sort();

fs.writeFileSync(manifest, JSON.stringify(files, null, 2));

console.log(`✅ manifest.json actualizado — ${files.length} logos:`);
files.forEach(f => console.log(`   • ${f}`));
