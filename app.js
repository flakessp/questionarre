const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile('dist/index.html' , { root : __dirname});
})