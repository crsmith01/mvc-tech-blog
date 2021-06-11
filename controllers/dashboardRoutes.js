const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// these are at endponts /dashboard...

// Use withAuth middleware to prevent access to route
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        // uses the ID from this session
        where: {user_id: req.session.user_id},
        include: [{
            model: Comment,
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
    .then(postData => {
        const posts = postData.map(post => post.get({ plain:true }));
        res.render('dashboard', { posts, logged_in: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {id: req.params.id},
        include: [{
            model: Comment,
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
    .then(postData => {
        if (!postData) {
            res.status(404).json({ message: 'No blogpost found with this id.'});
            return;
        }
        // Serialize the data so the template can read it
        const post = postData.get({ plain:true });
        res.render('edit-post', { post, logged_in: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

module.exports = router;