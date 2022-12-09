const express = require('express');
const routesRoupas = require('./route/cliente');

const app = express();

app.use(express.json());

app.use('/', routesRoupas);
console.log('teste de github');

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO - EM http://localhost:3000 ');
});

