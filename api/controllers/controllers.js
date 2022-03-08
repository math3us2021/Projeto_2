const { response } = require('express')
const req = require('express/lib/request')
const models = require('../models/models.js')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const axios = require('axios')
const cors = require('cors')


module.exports = {
    rotaRaiz,
    cursoGetById,
    cepGetById,
    livrosGetById,
    frasesGetById,
    chuckGetById,
    githubGetById,
    sabespGetById


}


function rotaRaiz(req, res) { // função 
    console.log('Rota Raiz Encontrada')
    res.json({ Ola: 'Rota Raiz encontrada' })
}

function cursoGetById(req, res) {
    const curso = req.params.cursoid
    console.log("Parametro esperado: " + curso)
    res.json({ Message: 'Rota Consultar cursos encontrada!' })

    let leitura
    console.time(leitura) //console que captura o horário que ele capturou os dados

    models.getByIdCurso(curso)

    console.timeEnd(leitura) // no End, ele subtrai um pelo outro e te dá o tempo que isso levou
    console.log("== Curso =====================")
}

function cepGetById(req, res) {
    const cep = req.params.cepid
    console.log("Parametro esperado: " + cep);

    const url = `http://viacep.com.br/ws/` + cep + `/json/`
    console.log("Endereço " + url)

    axios.get(url)
        .then((response) => response.json())
        .then(data => {
            dados = data;
            res.json({ mensage: dados })
        })

        .then(response => console.log(dados))

        .catch(function (error) {
            console.log("Erro de requisição");
        })
        .finally
        (function () {
            console.log("Final consulta de CEP!")
        })
}
function livrosGetById(req, res) {
    const livro = req.params.livroid
    console.log("Parametro esperado: " + livro);
    res.json({ message: "Rota livros encontrada" })

    var leitura
    console.time(leitura)

    models.getByIdLivro(livro);

    console.timeEnd(leitura)
    console.log("===Livros=============")
}
function frasesGetById(req, res) {
    const frases = req.params.frasesid
    console.log("Parametro esperado: " + frases);

    const url = `https://api.kanye.rest`
    console.log("Frases Kanye " + url)

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            dados = data;
            res.json({ mensage: dados })
        })

        .then(response => console.log(dados))

        .catch(function (error) {
            console.log("Erro de requisição");
        })
        .finally
        (function () {
            console.log("Final consulta de Frases")
        })
}

function chuckGetById(req, res) {
    const chuck = req.params.chuckid
    console.log("Parametro esperado: " + chuck);

    const url = `https://api.chucknorris.io/jokes/random`
    console.log("=====Frases chucknorris =====" + url)

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            dados = data;
            res.json({ mensage: dados })
        })

        .then(response => console.log(dados))

        .catch(function (error) {
            console.log("Erro de requisição");
        })
        .finally
        (function () {
            console.log("Final consulta: Frases humoristicas de chuck")
        })
}

function githubGetById(req, res) {
    const git = req.params.perfilid
    console.log("Parametro esperado: " + git);
    console.log("Parametro esperado: " + git);



    const url = `https://api.github.com/user/` + git;
    console.log("=====Github =====" + url)

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            dados = data;
            res.json({ mensage: dados })
        })

        .then(response => console.log(dados))

        .catch(function (error) {
            console.log("Erro de requisição");
        })
        .finally
        (function () {
            console.log("Final consulta: Github")
        })
}

function sabespGetById(req, res) {
    const sabesp = req.params.dateid
    console.log("Parametro esperado: " + sabesp);
   



    const url = `https://sabesp-api.herokuapp.com/` + sabesp;
    console.log( url)

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            dados = data;
            res.json({ mensage: dados })
        })

        .then(response => console.log(dados))

        .catch(function (error) {
            console.log("Erro de requisição");
        })
        .finally
        (function () {
            console.log("Final consulta: Sabesp")
        })
}