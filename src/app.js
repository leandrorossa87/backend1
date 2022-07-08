const path= require('path')

require('dotenv').config()
const express = require('express');

const app = express();

app.get('/', function(solicitud, respuesta){
    respuesta.sendFile(path.join(__dirname, './views/index.html'))
})

app.listen(process.env.PUERTO , function (){
    console.log('Servidor Iniciado en puerto' + process.env.PUERTO)
})

