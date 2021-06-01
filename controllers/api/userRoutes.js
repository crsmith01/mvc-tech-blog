const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// GET at endpoint /api/users
router.get('/', async (req, res) => {
  try {
    const usersData = await User.findAll({
      attributes: { exclude: ['password'] }
    })
    res.status(200).json(usersData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET at endpoint /api/users/1 (or 2, 3, etc.)
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { id: req.params.id},
      include: [
        {model: Post,},
        {model: Comment, 
        include: {
          model: Post,
          attributes: ['title']
        }}
      ]
    })
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id.' });
    } else {res.status(200).json(userData)};
  } catch (err) {
    res.status(500).json(err);
  }
});


// POST for endpoint /api/users
router.post('/', async (req, res) => {
  try {
    // const userData = await User.create(req.body);
    const userData = await User.create ({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    // to save user info for duration of session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

    res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST - allow user to log in at endpoint /api/login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        // intentionally not specifying if it's the email or password that is incorrect - security purposes
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // to save user info for duration of session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = dbUserData.username;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Allow user to log out - kills session so user must log in again to view
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// PUT at endpoint /api/users/1
router.put('/:id', withAuth, (req, res) => {
  try {
    const userData = await User.update(req.body, {
      individualHooks: true,
      where: {id: req.params.id}
    })
    // not an array, right? double check - if needed (!userData[0])
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id.' });
    } else {
    res.json(userData)};
  } catch (err) {
    res.status(500).json(err);
  };
});


// DELETE at endpoint /api/users/1
router.delete('/:id', withAuth, (req, res) => {
  try {
    const userData = await User.destroy(req.body, {
      where: {id: req.params.id}
    })
    // not an array, right? double check - if needed (!userData[0])
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id.' });
    } else {
    res.json(userData)};
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;