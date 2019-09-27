const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const {School, Student} = db.models;

app.use('/build', express.static(path.join(__dirname, 'dist')));

app.use(express.json());

module.exports = app;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/schools', (req, res, next) => {
  School.findAll()
    .then(schools => res.send(schools))
    .catch(next)
})

app.get('/students', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next);
})

app.delete('/students/:id', (req, res, next) => {
  Student.findByPk(req.params.id)
    .then(student => student.destroy())
    .then(res.sendStatus(204))
    .catch(next);
})

app.post('/students', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.status(201).send(student))
    .catch(next);
})
