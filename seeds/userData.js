const { User } = require('../models');

const userData = [
  {
    "name": "Daniel",
    "email": "danny@hotmail.com",
    "password": "password5678"
  },
  {
    "name": "Meg",
    "email": "meg@gmail.com",
    "password": "password3"
  },
  {
    "name": "Isla",
    "email": "isla@aol.com",
    "password": "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
