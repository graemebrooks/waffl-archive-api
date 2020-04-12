var express = require('express');
var router = express.Router();

const statsheetCtrl = require('../controllers/statsheet');
const miscCtrl = require('../controllers/misc');

router.get('/index/statsheet', statsheetCtrl.index);
router.get('/index/logos', miscCtrl.logos);

module.exports = router;
