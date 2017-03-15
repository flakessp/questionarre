const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Digital Ocean!')
})

app.listen(port, () => {
  console.log('Magic is happening on port 3000!')
});