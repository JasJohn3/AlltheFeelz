const router = require('express').Router();
const { Post, User } = require('../models');
// sessionkey from utils folder
// const tempAuth = 

// get all posts for http://localhost:3001/posts/ ----------------------
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'message',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
        ],
    }).then(postdata => {
        const posts = postdata.map((post) => post.get({ plain: true }));
        res.render('allposts', {
            layout: "main",
            posts
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

// original (working with http://localhost:3001/posts/id)
router.get('/:id', (req, res) => {
    Post.findAll({
        where: {
            id: req.params.id,
            // title: req.params.title,
            // message: req.params.message,
            // user_id: req.params.user_id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            },
        ],
    }).then(postdata => {
        const posts = postdata.map((post) => post.get({ plain: true }));
        res.render('allposts', {
            layout: "main",
            posts
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});


module.exports = router