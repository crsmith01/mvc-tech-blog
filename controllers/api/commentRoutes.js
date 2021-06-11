const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// GET - get all comments - enpoint /api/comments
router.get('/', (req, res) => {
  Comment.findAll({})
      .then(commentData => res.json(commentData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});

// GET - get specific comment by id - enpoint /api/comments/1
router.get('/:id', (req, res) => {
  Comment.findAll({
      where: {id: req.params.id}
      })
      .then(commentData => res.json(commentData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});

// POST - create a new comment at endpoint /api/comments
router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT - update/edit a comment by its id 
router.put('/:id', withAuth, async (req, res) =>{
  try{
      const commentData = await Comment.update({
          content: req.body.content,
          user_id: req.body.user_id,
          post_id: req.body.post_id },
          { where: {id: req.params.id }}
      )
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id.' });
      } else {
      res.status(200).json(commentData)};
  } catch(err){
      res.status(500).json(err);
  }

});

// DELETE - delete comment by its id - at endpoint /api/comments/1
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: { id: req.params.id },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
    } else {res.status(200).json(commentData)};
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
