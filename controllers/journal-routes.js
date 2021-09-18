const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('journal');
});

module.exports = router;