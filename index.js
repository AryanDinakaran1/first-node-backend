const express = require('express')

const app = express()
app.use(express.json())

var users = {
    1 : 'Aryan',
    2 : 'Elon',
    3 : 'Steve',
    4 : 'Bill'
}

app.get('/user/:id', (req, res) => {

    const { id } = req.params;


    res.status(200).send({
        id : users[id]
    });

})

app.post('/create-user', (req, res) => {

    const { id, name } = req.body;

    users[id] = name;

    res.status(200).send({
        id : users[id]
    });

})

app.listen(8000, () => {
    console.log('/backend Running on http://localhost:8000')
})