const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const emailRoutes = require('./emailRoutes');

router.use('/', homeRoutes)
router.use('/email', emailRoutes);

module.exports = router;
