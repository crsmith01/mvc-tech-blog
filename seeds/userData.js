const { User } = require('../models');

const userData = [
  {
    "username": "danny_batman",
    "email": "danny@hotmail.com",
    "password": "password5678"
  },
  {
    "username": "meg_s",
    "email": "meg@gmail.com",
    "password": "password3"
  },
  {
    "username": "isla_c",
    "email": "isla@aol.com",
    "password": "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
