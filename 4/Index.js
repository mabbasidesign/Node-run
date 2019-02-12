var express = require('express')
var app = express()

// app.get('/',  (req, res) => {
//   res.send('Heloo World')
// })

// app.get('/api/courses', (req, res) => {
//   res.send([1, 2, 3]);
// })

// app.get('/api/courses/:id', (req, res) => {
//   res.send(req.params.id);
// })

// app.get('/api/courses/:year/:month', (req, res) => {
//   res.send(req.params);
// })

const courses = [
  {id: 1, name: 'name1'},
  {id: 2, name: 'name2'},
  {id: 3, name: 'name3'}
]


app.get('/api/courses', (req, res) => {
  res.send(courses);
})


app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course)
    res.status(404).send('The course with the given Id was not found');
  res.send(course)
})


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}...`));