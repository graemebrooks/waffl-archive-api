import GetPlayerRecordsService from '../services/recordbook/getPlayerRecordsService';
import GetTeamRecordsService from '../services/recordbook/getTeamRecordsService';

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
	let teamRecordsService: GetTeamRecordsService = new GetTeamRecordsService();
	let result = await teamRecordsService.getTeamRecords(2, 3, 'A1:DN73', 'A1:HC11');
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json(err);
	}
}
