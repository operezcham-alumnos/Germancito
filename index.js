const http = require("http");
const PORT = 3000;
const fs = require("fs");
const mensajes = [
  {
    id:1,
    usuario: "servidor",
    texto: "saludos, envie su mensaje",
    fecha: "2021-08-4",
  },
];

const server = http.createServer((rep,res)=>{
  if(req.metod==='GET'&&req.url=='/listademensajes'){
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end(JSON.stringify(mensajes));
  }else if (req.method === "GET" && req.url === "/") {

    const paginaHtmlPath = "./index.html";
    const paginaHtml = fs.readFileSync(paginaHtmlPath, "utf8");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    res.end(paginaHtml);
  }else if (req.method === "POST" && req.url === "/actualizarmen") {

    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();

    });
  }

});






const server = http.createServer((req, res) => {
});
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});