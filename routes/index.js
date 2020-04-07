var express = require('express');
var router = express.Router();

const allTimeStatsCtrl = require('../controllers/allTimeStats');

router.get('/index/winsAndLosses', allTimeStatsCtrl.winsAndLosses);

module.exports = router;
