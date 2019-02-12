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
app.post('/api/genres', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required()
  };
  const result = Joi.validate(req.body, schema);

  if (result.error){
    return res.status(400).send(result.error.details[0].message)
  }

  const genre = {
    id: genres.length + 1,
    name: req.body.name
  }
  genres.push(genre);
  res.send(genre)
})


//put



//post


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}...`));