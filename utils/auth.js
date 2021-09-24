const withAuth = (req, res, next) => {
<<<<<<< HEAD
    if(!req.session.user_id) {
      res.redirect('/login');
    }
    else {
      next();
    }
  }
  
  module.exports = withAuth;
=======
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};
module.exports = withAuth;
>>>>>>> develop
