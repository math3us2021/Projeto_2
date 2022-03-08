module.exports = { //trazendo a função do controllers
    getByIdCurso,
    getByIdLivro
}

const cursosInfo = [ // declarou a variavel 
    { 'curso': 'Css', 'info': 'Curso introdutório de CSS' },
    { 'curso': 'JavaScript', 'info': 'Curso introdutório de JavaScript' },
    { 'curso': 'NodeJs', 'info': 'Curso de Nofdejs' },
    { 'curso': 'Excel', 'info': 'Curso introdutório de Excel' },
    { 'curso': 'React', 'info': 'Curso introdutório de React' },
]


function getByIdCurso(pcurso) {//P de parametro
    const cursoi = cursosInfo.find(i => i.curso == pcurso)
    if (!cursoi) {
        console.error("Curso não encontrado")
    } else {
        console.log({ cursoi })
    }
}

const livrosInfo = require('../../public/livros.json');

function getByIdLivro(plivro) {//P de parametro
    const livroI = livrosInfo.find(i => i.id == plivro)
    if (!livroI) {
        console.error("Livro não encontrado")
    } else {
        console.log({ livroI })
    }
}