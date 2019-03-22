const http = require('http');

http.createServer((request, respuesta) => {

        respuesta.writeHead(200, { 'Content-Type': 'aplication/json' })

        let salida = {
            nombre: 'Manuel',
            edad: 21,
            url: request.url
        }
        respuesta.write(JSON.stringify(salida));

        respuesta.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');