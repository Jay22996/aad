var express = require('express');
const { updatemark, addstudent, deletem } = require('../controller/cotroller');
var router = express.Router();

/* GET home page. */
router.post('/', updatemark);
router.post('/addstudent', addstudent);
router.post('/delete', deletem);



module.exports = router;
