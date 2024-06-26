var express = require('express');
const { updatemark, addstudent, deletem, show } = require('../controller/cotroller');
var router = express.Router();

/* GET home page. */
router.post('/', updatemark);
router.post('/addstudent', addstudent);
router.post('/delete', deletem);
router.post('/show', show);




module.exports = router;
