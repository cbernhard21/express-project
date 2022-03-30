const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send({
        id: 1,
        name: 'Chris'
    })
})

app.get('/messages', (req, res) => {
    res.send('<h1>hello messages</h1>')
})

app.post('/messages', (req, res) => {
    console.log('updating messages....')
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})