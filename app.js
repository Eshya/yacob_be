const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send({message:"Hello Get !"});
});
app.get('/user', (req, res) => {
    res.send({message:"Hello user !"});
});
app.get('/data', (req, res) => {
    res.send({message:"Hello data !"});
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))