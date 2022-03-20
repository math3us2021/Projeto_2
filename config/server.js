const express = require('express')
const consign = require('consign') // importando uma biblioteca
const path = require ('path');
const { parse } = require('path');
// const body = require ('body-parse')

app = express();   


app.set('url', 'http://localhost:') // variavel do express
app.set('porta', 3001)

//diretorio estatico
app.set('views', path.join(__dirname,'../api/views'))
app.set('views engine', 'ejs')

//diretorio estatico - public
app.use('/static', express.static(__dirname + '/public'))
app.use(express.static('public'))
app.use(express.static('estilos'))
app.use(express.static('imagens'))

consign({cwd: 'api'}) // na pasta api, vai trazer esses tr6es diretórios (comando cwd)
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;

module.exports = app