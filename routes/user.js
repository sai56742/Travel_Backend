
const router = require('express').Router()


const { createUser, signin , useridcheck,passwordUpadte } = require('../controllers/user');
const { validateUser, validate } = require('../middlewares/validator');
// const {resetPassword} = require()
// const { getData } = require('../controllers/placesData');

 


router.post("/create",validateUser,validate, createUser);
router.post("/signin", signin);
router.post("/useridcheck",useridcheck);
router.post("/passwordUpadte",passwordUpadte);
// router.get("/place",getData) passwordUpadte



module.exports = router