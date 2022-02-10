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

router.post('/', (req, res) => {
    //creating a new Tv
    Tv.create({
        brand: req.body.brand,
        price: req.body.price
    })
        .then(dbTvData => {
            res.json(dbTvData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});

// TODO get TV by id '/:id', router.get('/:id', (req, params) => {  })

// UPDATE tv by id '/:id', router.put('/:id', (req, params) => {  })

// DELETE tv by id '/:id', router.delete(':/id', (req, params) => {  })

module.exports = router;