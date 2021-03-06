const { Comment } = require('../models');

const commentData = [
  {
    "id": 1,
    "content": "Comment 1 content.",
    "date_created": "05/28/2021",
    "user_id": 1,
    "post_id": 2
  },
  {
    "id": 2,
    "content": "Comment 2 content.",
    "date_created": "05/30/2021",
    "user_id": 1,
    "post_id": 2
  },
  {
    "id": 3,
    "content": "Comment 3 content.",
    "date_created": "05/31/2021",
    "user_id": 2,
    "post_id": 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
