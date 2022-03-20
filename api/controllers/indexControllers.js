module.exports = {
    index 
}

function index (req,res) {
    res.render('index.ejs',
        {title: 'Rotas',
            mensagem: 'Iniciando com NodeJS e Express',
            titulo: 'Aula do Neto é as segundas',
            conteudo: 'Corpo da página - vh x vw',
            autor: '2° DSM - Web II'


    })
}