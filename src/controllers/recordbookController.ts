import GetPlayerRecordsService from '../services/recordbook/getPlayerRecordsService';
const getTeamRecords = require('../services/recordbook/getTeamRecords');

module.exports = {
	playerRecords,
	teamRecords
};

async function playerRecords(req: any, res: any) {
	let playerRecordsService: GetPlayerRecordsService = new GetPlayerRecordsService();
	let result = await playerRecordsService.getPlayerRecords(0, 'A1:AW60');
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function teamRecords(req: any, res: any) {
	let result = await getTeamRecords();
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json(err);
	}
}
