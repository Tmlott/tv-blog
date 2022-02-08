const router = require('express').Router();
const { Tv } = require('../../models');

router.get('/', (req, res) => {
    Tv.findAll({
        attributes: [
            'id',
            'brand',
            'price'
        ]
    })
        .then(dbTvData => {
            if (dbTvData) {
                res.json(dbTvData)
            } else (err) => {
                res.status(500).json(err)
            }
        })
});

module.exports = router;