const { Post } = require('../models');

const postData = [
  {
    "id": 1,
    "title": "HTML and CSS: An Introduction",
    "content": "Content for post #1 goes here.",
    "date_created": "05/20/2021",
    "user_id": 1
  },
  {
    "id": 2,
    "title": "Server-Side APIs",
    "content": "Content for post #2 goes here.",
    "date_created": "05/21/2021",
    "user_id": 1
  },
  {
    "id": 3,
    "title": "Third-Party APIs",
    "content": "Content for post #3 goes here.",
    "date_created": "05/24/2021",
    "user_id": 2
  },
  {
    "id": 4,
    "title": "Organize with MVC",
    "content": "Content for post #4 goes here.",
    "date_created": "05/24/2021",
    "user_id": 3
  },
  {
    "id": 5,
    "title": "What's new with MySQL?",
    "content": "Content for post #5 goes here.",
    "date_created": "05/29/2021",
    "user_id": 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;