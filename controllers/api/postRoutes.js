const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all posts at endpoint /api/posts
router.get('/', async (req, res) => {
  try {
    const postsData = await Post.findAll({
      order: [['date_created', 'DESC']],
      include: [
        {model: Comment, 
        include: {
          model: User,
          attributes: ['username']
        }},
        {model: User,
        attributes: ['username']}
      ]
    })
    res.status(200).json(postsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET specific post at endpoint /api/posts/1
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {id: req.params.id},
      include: [
        {model: Comment, 
        include: {
          model: User,
          attributes: ['username']
        }},
        {model: User,
        attributes: ['username']}
      ]
    })
    if (!postData) {
      res.status(404).json({ message: 'No blodpost found with this id.' });
    } else {res.status(200).json(postData)};
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST - create post at /api/posts
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT - update/edit post by it's id value - so at endpoint /api/posts/1 for example
router.put('/:id', withAuth, async (req, res) =>{
  try{
      const postData = await Post.update(
          { title: req.body.title,
          content: req.body.content,
          user_id: req.body.user_id },
          { where: {id: req.params.id }}
      )
      if (!postData) {
        res.status(404).json({ message: 'No blogpost found with this id.' });
      } else {res.status(200).json(postData)};
  } catch (err){
      res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No blogpost found with this id!' });
    } else {res.status(200).json(postData)};
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
