const getPlayerRecords = require('../services/recordbook/getPlayerRecords');

module.exports = {
	playerRecords
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
