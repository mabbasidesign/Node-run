var express = require('express')
var app = express()

app.get('/',  (req, res) => {
  res.send('Heloo World')
})

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}...`));