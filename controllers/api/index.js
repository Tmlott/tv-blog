const router = require('express').Router();

const tvRoutes = require('./tv-routes');
const reviewRoutes = require('./review-routes');

router.use('/tv', tvRoutes);
router.use('/review', reviewRoutes);

module.exports = router;