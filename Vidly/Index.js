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



//post



//put



//post


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}...`));