const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', withAuth, (req, res) => {
    Post.findAll({
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
    .then(PostData => {
        const posts = PostData.map(post => post.get({ plain:true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});
