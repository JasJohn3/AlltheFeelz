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

<<<<<<< HEAD
router.get('/posts', (req, res) => {
  res.render('posts')
});

router.get('/posts/id', (req, res) =>{
  res.render('posts')
});

module.exports = router;
=======
module.exports = router;
>>>>>>> 7cbf448391696eaf8afc57399af053236577a8f2
