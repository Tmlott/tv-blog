const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
})

// bad url path redirect to homepage
router.get('*', (req,res) => {
    res.render('homepage');
})

// TODO
// Router Login
// router.get('/login', (req, res) => {  })
// 


module.exports = router;