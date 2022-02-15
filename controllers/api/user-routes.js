const router = require('express').Router();
const { User, Review, Tv } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:username', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password']},
        where: {
            username: req.params.username
        }
    })
        .then(userData => {
            if(!userData) {
                res.status(404).json({ message: "No user found"});
                return;
            }
            res.json(userData)
        })
        .catch(err => res.status(500).json(err));
});

router.delete('/:username')

module.exports = router;