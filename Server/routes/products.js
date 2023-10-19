const express = require('express');
const router = express.Router();
const multer = require('multer')

const upload = multer()

const isAdminAuthenticated = require('../middlewares/isAdminAuthenticated')
const isUserAuthenticated = require('../middlewares/isUserAuthenticated')


const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/products')

router.route('/product/admin')
       .get( getAllProducts)
       .post(isAdminAuthenticated, upload.single('image'), createProduct)
router.route('/product')
       .get(getAllProducts)
router.route('/product/:id')
       .put(isAdminAuthenticated, upload.single('imageUrl'), updateProduct)
       .delete( deleteProduct)

module.exports = router    