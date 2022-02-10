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

router.post('/', (req, res) => {
    Review.create({
        comment: req.body.comment,
        tv_id: req.body.tv_id
    })
        .then(dbReviewData => {
            res.json(dbReviewData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});

module.exports = router;