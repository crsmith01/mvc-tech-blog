const { User } = require('../models');

const userData = [
  {
    "id": 1,
    "username": "danny_batman",
    "email": "danny@hotmail.com",
    "password": "password5678"
  },
  {
    "id": 2,
    "username": "meg_s",
    "email": "meg@gmail.com",
    "password": "password3"
  },
  {
    "id": 3, 
    "username": "isla_c",
    "email": "isla@aol.com",
    "password": "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData,{
  // hashing the passwords
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
