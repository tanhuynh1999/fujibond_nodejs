const express = require('express');
const productController = require('../app/controller/product');

const router = express.Router();

router.get("/product", productController.getProduct);

module.exports = router;