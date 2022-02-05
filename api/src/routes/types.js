const express = require('express');
const { route } = require('.');
const router = express.Router();
const {getTypes} = require('../controllersFunctions/dbFuntions')

router.get('/',getTypes);

module.exports = router;