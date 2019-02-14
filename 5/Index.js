const express = require('express');
const logger = require('./legger');
const app = express();
const Joi = require('joi');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


app.use(logger);

app.use(logger);

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
    return res.status(404).send('The course with the given Id was not found');
  res.send(course)
})


app.post('/api/courses', (req, res) => {

  // console.log(result);
  
  // if (!req.body.name || req.body.name < 3){
  //   res.status(400).send('name required and should be at least 3 characters')
  // }

  const schema = {
    name: Joi.string().min(3).required()
  };
  const result = Joi.validate(req.body, schema);

  if (result.error){
    return res.status(400).send(result.error.details[0].message)
    return
  }
  
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
})


app.put('/api/courses/:id', (req, res) => {
  //Look up the course
  //If not existing return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course)
    return res.status(404).send('The course with the given Id was not found');

  //Validate
  //If invalid return 400 - bad request
  const {error} = validateCourse(req.body);
  if (error){
    res.status(400).send(error.details[0].message)
    return
  }

  //Update the courses
  course.name = req.body.name;
  //Return the updated courses
  res.send(course);
})


app.delete('/api/courses/:id', (req, res) => {
  //Look up the course
  //If not existing return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course)
    return res.status(404).send('The course with the given Id was not found');

  //Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  //Retun the same course
  res.send(course);
});


function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };
  return Joi.validate(course, schema);
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}...`));