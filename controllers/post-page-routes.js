const router = require('express').Router();
const { Post } = require('../models/Post');
// sessionkey from utils folder
// const tempAuth = 

router.get('/:id', (req, res) => {
    Post.findAll({
        where: {
            id: req.params.id
        }
    }).then(postdata => {
        const posts = postdata.map((post) => post.get({ plain: true }));
        res.render('allposts',{
            layout: "postspage",
            posts
        })
    }).catch(err => {console.log(err)});
})

module.exports = router