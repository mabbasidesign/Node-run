const express = require('express')
const app = express();
const Joi = require('joi');

app.use(express.json());

const genres = [
  {id: 1, name: 'Action'},
  {id: 2, name: 'Romance'},
  {id: 3, name: 'Wetern'}
]

//get
app.get('/api/genres', (req, res) => {
  return res.send(genres);
})


//get:id
app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === req.body.id);
  if (!genre) return res.status(400).send('the genre with given id is not existing');
  res.send(genre);
})


//post



//put



//post


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}...`));