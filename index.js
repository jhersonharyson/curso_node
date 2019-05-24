const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//config body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let usuarios = []

app.get('/', (req, res) => {
    res.send('olá cliente')
})

app.get('/user', (req, res) => {
    res.send(usuarios)
})

app.post('/user', (req, res) => {

    let user = {}
    user.nome = req.body.nome
    user.id = usuarios.length
    usuarios.push(user)
    res.status(201).send('Usuário cadastrado com sucesso')

})

app.put('/user', (req, res) => {

    try {
        const { id, nome } = req.body
        usuarios[id].nome = nome
    } catch (e) {
        console.log('error')
    }
    res.status(201).send('<h1>Usuário atualizado com sucesso</h1>')

})

app.delete('/user', (req, res) => {

    try {
        const { id } = req.body
        arr = []
        
        for (user of usuarios) {
            if (user.id != id)
                arr.push(user)
        }

        usuarios = arr

    } catch (e) {
        console.log('error')
    }
    res.status(201).send('Usuário deletado com sucesso')

})

const port = process.env.PORT || 3001;

app.listen(port, () => console.log('servidor no ar'))