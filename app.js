const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hola mundo');
});

app.get('/mensaje', (req, res) => {
  res.send('este es mi servidor usando express');
});

module.exports = app;