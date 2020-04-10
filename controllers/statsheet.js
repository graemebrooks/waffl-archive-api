const getStatsheet = require('../services/statsheet/getStatsheet');

module.exports = {
	index
};

async function index(req, res) {
	result = await getStatsheet();
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json(err);
	}
}
