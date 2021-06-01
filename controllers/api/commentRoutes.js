const router = require('express').Router();
const { Comment } = require('../../models');
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

// POST - update/edit a comment by its id 
router.put('/:id', withAuth, async (req, res) =>{
  try{
      const commentData = await Comment.update(
          { comment_text: req.body.post_name },
          { returning: true, where: {id: req.params.id }}
      )
      res.status(200).json(commentData)
  } catch(err){
      res.status(500).json(err);
  }

});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
