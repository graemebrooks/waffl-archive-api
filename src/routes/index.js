var express = require('express');
var router = express.Router();

const statsheetCtrl = require('../controllers/statsheet');
const recordbookCtrl = require('../controllers/recordbookController');
const draftDataCtrl = require('../controllers/draftDataController.js');
const fleaflickerCtrl = require('../controllers/fleaflickerController');
const miscCtrl = require('../controllers/misc');

router.get('/index/statsheet', statsheetCtrl.index);
router.get('/index/playerRecords', recordbookCtrl.playerRecords);
router.get('/index/teamRecords', recordbookCtrl.teamRecords);

router.get('/index/draftData/2014', draftDataCtrl.get2014Draft);
router.get('/index/draftData/2015', draftDataCtrl.get2015Draft);
router.get('/index/draftData/2016', draftDataCtrl.get2016Draft);
router.get('/index/draftData/2017', draftDataCtrl.get2017Draft);
router.get('/index/draftData/2018', draftDataCtrl.get2018Draft);
router.get('/index/draftData/2019', draftDataCtrl.get2019Draft);
router.get('/index/draftData/2020', draftDataCtrl.get2020Draft);

router.get('/index/fleaflicker/standings', fleaflickerCtrl.getCurrentWafflStandings);

router.get('/index/logos', miscCtrl.logos);
router.get('/index/colors', miscCtrl.colors);

module.exports = router;
