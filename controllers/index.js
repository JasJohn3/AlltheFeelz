const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const postPageRoutes = require('./post-page-routes');

router.use('/', homeRoutes);
router.use('/posts', postPageRoutes);
router.use('/api', apiRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;