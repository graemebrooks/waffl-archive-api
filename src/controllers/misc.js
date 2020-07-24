const { logoUrls } = require('../services/teamMisc/teamData');
const { teamColors } = require('../services/teamMisc/teamData');

module.exports = {
	logos,
	colors
};

function logos(req, res) {
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(logoUrls);
	} catch (err) {
		res.status(400).json(err);
	}
}

function colors(req, res) {
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(teamColors);
	} catch (err) {
		res.status(400).json(err);
	}
}
