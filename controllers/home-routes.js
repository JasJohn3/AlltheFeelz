const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/journal', (req, res) => {
  res.render('journal');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup',(req,res)=>{
  res.render('signup');
});
router.get('/posts',(req,res)=>{
  res.render('posts')
})
// router.get('/posts', (req, res) => {
//   res.render('posts')
// });

router.get('/posts/id', (req, res) =>{
  res.render('posts')
});

module.exports = router;
