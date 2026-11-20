import fs from 'fs';
import http from 'http';
import chokidar from 'chokidar';

const PORT = 9000;
const watcher = chokidar.watch('.', { 
    persistent: true,
    ignoreInitial: true, 
});

watcher.on('add', (path) => {
    console.log(`File ${path} telah ditambahkan`);
})
.on('addDir', (path) => {
    console.log(`Folder ${path} telah ditambahkan`)
})
.on('change', (path) => {
  console.log(`File diubah/disimpan: ${path}`);
  // Broadcast perubahan isi file
})
.on('unlink', (path) => {
  console.log(`File dihapus: ${path}`);
})
.on('unlinkDir', (path) => {
  console.log(`Folder dihapus: ${path}`);
});

function createFile(nodes) {
    try{

        if(!Array.isArray(nodes)) {
            console.log("Format data nodes bukan array:", nodes);
            return;
        }
        nodes.forEach(node => {
            const cmpContent = `function ${node.data.label} () {}`;

            if(!fs.existsSync(`src/test/${node.data.label}.jsx`)) {
                fs.writeFileSync(`src/test/${node.data.label}.jsx`, cmpContent, 'utf8');
                console.log(`File ${node.data.label}.jsx berhasil dibuat`);
            } else {
                console.log(`File ${node.data.label}.jsx sudah ada, tidak dibuat ulang`);
            }
        })
    } catch {
        console.log("gagal membuat file node")
        return null
    }
}


const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="id">
            <head>
                <meta charset="UTF-8">
                <title>React Flow Bridge Server</title>
                <style>
                    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                    .card { background: #1e293b; padding: 2rem; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); text-align: center; max-width: 400px; border: 1px solid #334155; }
                    h2 { color: #38bdf8; margin-top: 0; }
                    .status { display: inline-block; width: 10px; height: 10px; background: #22c55e; border-radius: 50%; margin-right: 6px; box-shadow: 0 0 8px #22c55e; }
                .badge { font-size: 0.85rem; background: #334155; padding: 4px 8px; border-radius: 4px; color: #cbd5e1; }
                </style>
            </head>
            <body>
                <div class="card">
                    <h2>React Flow Bridge API</h2>
                    <p><span class="status"></span> Server Status: <strong>Aktif</strong></p>
                    <p class="badge">Port: ${PORT}</p>
                    <p style="font-size: 0.9rem; color: #94a3b8; margin-top: 1.5rem;">Jembatan sinkronisasi otomatis node ke file .jsx lokal siap digunakan.</p>
                </div>
            </body>
            </html>
        `);
        return;
    }

    if(req.method === 'POST' && req.url === '/api/sync-nodes') {
        let body = '';
        
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try{
                const data = JSON.parse(body);
                const nodes = data.nodes || [];

                createFile(nodes);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Files created successfully' }));
            } catch {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(JSON.stringify({ message: 'Error processing request' }));
            }
        });
        return;
    }
    console.log(`[WARNING] Endpoint tidak ditemukan untuk: ${req.method} ${req.url}`);
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Endpoint not found' }));
})  

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
