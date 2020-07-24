const getPlayerRecords = require('../services/recordbook/getPlayerRecords');
const getTeamRecords = require('../services/recordbook/getTeamRecords');

module.exports = {
	playerRecords,
	teamRecords
};

async function playerRecords(req, res) {
	result = await getPlayerRecords();
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function teamRecords(req, res) {
	result = await getTeamRecords();
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json(err);
	}
}
