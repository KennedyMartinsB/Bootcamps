import express from 'express'

const app = express()
// Primeiro parametro do get pega o que quero que seja listado
app.get('/ads', (request, response) => {
    // Como na estrutura de projeto o back end trará um json como response
    // Devemos trocar o .send por .json e retornar um array
    return response.json([
        {id:1, name:'anuncio 1'},
        {id:2, name:'anuncio 2'},
        {id:3, name:'anuncio 3'}
    ])
})

// Listen faz com que a aplicação fique recebendo novas requisições
// E só pare quando o usuário pedir 
app.listen(3333)