const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Lady is the cutest cat <3'
    });
});

app.post('/mews', (req, res) => {
    console.log(req.body);
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000')
});