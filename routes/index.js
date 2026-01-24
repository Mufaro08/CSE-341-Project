const router = require(`express`).Router();
router.use(`/`, require(`./swagger`));

router.get(`/`, (req, res) => {
    //swagger.tags= ['Welcome to the Home Page!'];
    res.send(`Welcome to the Home Page!`);
});

router.use(`/users`, require(`./users`));

module.exports = router;