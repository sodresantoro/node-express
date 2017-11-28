var express = require('express');
var app = express();

var helmet = require('helmet');
app.use(helmet());

app.get('/', function (req, res) {
    res.send('Servidor funcionando! Tente a rota "/teste" e veja o resultado');
});

app.get('/teste', function (req, res) {
    res.send('Show!');
});

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000!');
});
