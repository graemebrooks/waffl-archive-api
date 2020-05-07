var express = require('express');
var router = express.Router();

const statsheetCtrl = require('../controllers/statsheet');
const recordbookCtrl = require('../controllers/recordbook');
const draftDataCtrl = require('../controllers/draftData');
const miscCtrl = require('../controllers/misc');

router.get('/index/statsheet', statsheetCtrl.index);
router.get('/index/playerRecords', recordbookCtrl.playerRecords);

router.get('/index/draftData/2014', draftDataCtrl.get2014);
router.get('/index/draftData/2015', draftDataCtrl.get2015);
router.get('/index/draftData/2016', draftDataCtrl.get2016);
router.get('/index/draftData/2017', draftDataCtrl.get2017);
router.get('/index/draftData/2018', draftDataCtrl.get2018);
router.get('/index/draftData/2019', draftDataCtrl.get2019);

router.get('/index/logos', miscCtrl.logos);
router.get('/index/colors', miscCtrl.colors);

module.exports = router;
