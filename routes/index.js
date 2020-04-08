var express = require('express');
var router = express.Router();

const statsheetCtrl = require('../controllers/statsheet');

router.get('/index/statsheet', statsheetCtrl.index);

module.exports = router;
