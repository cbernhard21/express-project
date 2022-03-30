const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Colin"
    },
    {
        id: 1,
        name: "William"
    },
    {
        id: 2,
        name: "Eli"
    }
];

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`method: ${req.method}, url: ${req.url} ${delta}ms`)
});


app.get('/friends', (req, res) => {
    res.json(friends)
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId]
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
})

app.get('/messages', (req, res) => {
    res.send('<h1>hello messages</h1>')
});

app.post('/messages', (req, res) => {
    console.log('updating messages....')
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})