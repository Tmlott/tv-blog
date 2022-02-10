const router = require('express').Router();
const { Review } = require('../../models');

router.get('/', (req, res) => {
    Review.findAll({
        attributes: [
            'id',
            'comment',
            'tv_id'
        ]
    })
        .then(dbReviewData => {
            if (dbReviewData) {
                res.json(dbReviewData)
            } else (err) => {
                res.status(500).json(err)
            }
        })
});

module.exports = router;