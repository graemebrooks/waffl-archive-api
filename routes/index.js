var express = require('express');
var router = express.Router();

const statsheetCtrl = require('../controllers/statsheet');
const recordbookCtrl = require('../controllers/recordbook');
const miscCtrl = require('../controllers/misc');

router.get('/index/statsheet', statsheetCtrl.index);
router.get('/index/playerRecords', recordbookCtrl.playerRecords);
router.get('/index/logos', miscCtrl.logos);
router.get('/index/colors', miscCtrl.colors);

module.exports = router;
