const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

// GET homepage for user
router.get('/', async (req, res) => {
  // console.log(req.session);
  try {
    // Get all blogposts and JOIN with user data
    const postsData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    // Map over data because it is an array
    const posts = postsData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
    console.log(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET individual post by id with user and comment information
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
        },
      ],
    });

    // Serialize data so the template can read it
    const post = postData.get({ plain: true });

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('signup');
});

module.exports = router;
