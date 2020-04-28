const get2014DraftData = require('../services/draftData/get2014DraftData');

module.exports = {
	get2014,
	get2015,
	get2016,
	get2017
};

async function get2014(req, res) {
	result = await get2014DraftData();
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function get2015(req, res) {
	result = await get2015DraftData();
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function get2016(req, res) {
	result = await get2016DraftData();
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json(err);
	}
}
async function get2017(req, res) {
	result = await get2017DraftData();
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json(err);
	}
}
