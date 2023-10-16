const express = require('express');
const router = express.Router();

const isAdminAuthenticated = require('../middlewares/isAdminAuthenticated')
const isUserAuthenticated = require('../middlewares/isUserAuthenticated')


const { getAllUsers, deleteUser, createProfile, signin, getUserId } = require('../controllers/users');

router.route('/users')
    .get(isAdminAuthenticated, getAllUsers)
router.route('/users/:id')
    .delete(isAdminAuthenticated, deleteUser)


router.route('/users/signup')
    .post(createProfile)
router.route('/users/signin')
    .post(signin)

router.route('/users/payload/:token')
    .get(isUserAuthenticated, getUserId)


module.exports = router;