const express = require('express');
const User = require('./User/User');

const app = express();

app.use(express.json());

app.post('/api/1.0/users', (req, res) => {
  User.create(req.body).then(() => {
    return res.send({
      message: 'user created successfully',
    });
  });
});

app.get('/api/1.0/users', (req, res) => {
  User.findAll()
    .then((users) => {
      return res.status(200).json({ users: users });
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = app;
