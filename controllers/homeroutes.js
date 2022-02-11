const { Tv, User } = require('../models');

const router = require('express').Router();
// TODO
// Import ==> like this: const { TV, Review, User } = require('../models')

router.get('/', (req, res) => {
    //  Tv.findAll({
    //     attributes: [
    //         'id',
    //         'brand',
    //         'price'
    //     ], 
    //     include: [
    //         {
    //             model: User,
    //             attributes: ['username']
    //         }
    //     ]
    // })
    //     .then(tvData => {
    //         res.render('homepage', { tvData });
    //     })
    res.render('homepage');
});

// bad url path redirect to homepage
router.get('*', (req,res) => {

    res.render('homepage');
})

// TODO
// Router Login
// router.get('/login', (req, res) => {  })
router.get('/login', (req, res) => {
    res.render('login');
})

module.exports = router;