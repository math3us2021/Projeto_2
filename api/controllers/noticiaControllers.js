module.exports = {
    menu 
}

function menu (req,res) {
    res.render('noticias/frm_noticiasMenu.ejs',
        {title: 'Rotas',
            mensagem: 'Iniciando com NodeJS e Express',
            titulo: 'Aula do Neto é as segundas',
            conteudo: 'Corpo da página - vh x vw',
            autor: '2° DSM - Web II'


    })
}