import express from 'express'

const app = express()


// Primeiro parametro do get pega o que quero que seja listado
app.get('/ads', () => {
    console.log("Acessou Ads");
})


// Listen faz com que a aplicação fique recebendo novas requisições
// E só pare quando o usuário pedir 

app.listen(3333)