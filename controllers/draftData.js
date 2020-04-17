const get2014DraftData = require('../services/draftData/get2014DraftData');

module.exports = {
	get2014
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
