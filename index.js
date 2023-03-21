//Modulos nesesarios
const http = requiere('http')
const fs =requiere('fs')

//constante del puerto
const PORT = 3000

//creacion del servidor
const servidor = http.createServer(responder)
servidor.listen(PORT)


function responder(solicitud, respuesta){
    respuesta.writeHead(200,{'Content-Type':'text/html'})
    const texto=fs.readFileSync('index.html','utf8')
    respuesta.write(texto)
    respuesta.end()
}