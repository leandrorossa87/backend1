const path = require('path')

const express = require('express')
const app = express();

require('dotenv').config()

app.get('/', function(solicitud, respuesta) {
    respuesta.sendFile(path.join(__dirname, 'views/index.html'))
})  

app.get('/contacto', function(solicitud, respuesta) {
    respuesta.sendFile(path.join(__dirname, 'views/contacto.html'))
}) 
   


app.listen(process.env.PUERTO,  function () {
    console.log('serivdor iniciado en: '+ process.env.PUERTO)
})

