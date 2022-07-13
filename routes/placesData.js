
const router = require('express').Router()


// const { createUser, signin } = require('../controllers/user');
// const { validateUser, validate } = require('../middlewares/validator');
const { getData } = require('../controllers/placesData');

 


// router.post("/create",validateUser,validate, createUser);
// router.post("/signin", signin);
router.get("/place",getData)



module.exports = router