const getAllTimeWinsAndLosses = require('../services/statsheet/getAllTimeWinsAndLosses');

module.exports = {
	winsAndLosses
};

async function winsAndLosses(req, res) {
	result = await getAllTimeWinsAndLosses();
	try {
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json(err);
	}
}
