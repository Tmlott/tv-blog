const { Tv, User, Review } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  Review.findAll({
    attributes: ['comment'],
    include: [{
      model: Tv,
      attributes: ['brand', 'price']
    }]
  })
    .then(query => {
      console.log(query)
      res.render('homepage', query)
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.get('/tv', (req, res) => {
  res.render('TVdump');
})

// Router Login
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get('/post/:id', (req, res) => {
  res.render('single-post');

});

module.exports = router;

// bad url path redirect to homepage
// router.get("*", (req, res) => {
//   res.render("homepage");
// });

module.exports = router;