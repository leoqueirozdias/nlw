const express = require('express')

const server = express()

//configurar pasta publica
server.use(express.static('public'))

//utilizando template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação
//pagina inicial

server.get('/', (req,res) =>{
    res.render('index.html')
})

server.get('/create-point', (req,res) =>{
    res.render('create-point.html')
})

server.get('/search', (req,res) =>{
    res.render('search-results.html')
})

//ligar o srvidor
server.listen(3000)