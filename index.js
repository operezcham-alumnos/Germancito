const http = require('http');

const PORT = 3000;
const fs = require('fs');
const mensajes = [
    { "Usuario": "Oscar", "Fecha": "2023-1-1", "texto": "Hola" },
    {"Usuario":"Juan","Fecha":"20203-1-02","texto":"Hola"},
    
]

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === 'mensajes.json') {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(mensajes));
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});