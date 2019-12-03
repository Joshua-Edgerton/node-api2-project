const express = require('express');
// make sure to invoke and use Uppercase 
const router = express.Router(); 
router.use(express.json());
const db = require('../data/db');





module.exports = router;