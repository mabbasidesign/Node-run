const express = require('express');
const logger = require('./middleware/logger');
const app = express();
const Joi = require('joi');
const config = require('config');
const courses = require('./route/course')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use('/api/course', courses);

app.use(logger);
app.use(logger);

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);

//Configuration
console.log('Applixatioin Name:' + config.get('name'));
console.log('Mail Server:' + config.get('mail.host'));
// console.log('Mail Password:' + config.get('mail.password'));

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };
  return Joi.validate(course, schema);
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}...`));