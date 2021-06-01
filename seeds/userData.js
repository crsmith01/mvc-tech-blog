const { User } = require('../models');

const userData = [
  {
    "username": "Daniel",
    "email": "danny@hotmail.com",
    "password": "password5678"
  },
  {
    "username": "Meg",
    "email": "meg@gmail.com",
    "password": "password3"
  },
  {
    "username": "Isla",
    "email": "isla@aol.com",
    "password": "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
