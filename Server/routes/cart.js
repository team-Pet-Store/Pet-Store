const express = require('express');
const router = express.Router();

const isUserAuthenticated = require('../middlewares/isUserAuthenticated')

const { getCartItems, addToCart, removeFromCart, removeAllFromCart } = require('../controllers/cart');


router.route('/carts')
    .get(isUserAuthenticated, getCartItems)
    .delete(isUserAuthenticated, removeAllFromCart)

router.route('/carts/:productID')
    .post(isUserAuthenticated, addToCart)
    .delete(isUserAuthenticated, removeFromCart)





module.exports = router;