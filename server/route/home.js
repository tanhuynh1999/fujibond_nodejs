const express = require('express');
const homeController = require('../app/controller/home');

const router = express.Router();

router.get("/", homeController.getHome);

module.exports = router;