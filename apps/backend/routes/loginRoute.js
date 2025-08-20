const express = require('express');
const router = express.Router();
const {
    userLogin
} = require('../controllers/loginAPI');

router.post("/", userLogin);

module.exports = router;