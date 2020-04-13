const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

async function getPlayerRecords() {
	const doc = new GoogleSpreadsheet('16N1aqct2O9zsIWcy9W-AhMd-IW8JCoF8DY1fqElYPB8');
	await doc.useServiceAccountAuth({
		client_email: process.env.CLIENT_EMAIL,
		private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n')
	});
	await doc.loadInfo();

	const sheet = doc.sheetsByIndex[0]; // player records sheet

	await sheet.loadCells('A1:AW60');

	// Generate Recordbook data
	// highestScore: sheet.getCell(1, 1).value
	const data = {
		highestPlayerScores: [],
		highestQbScores: [],
		highestRbScores: [],
		highestWrScores: [],
		highestTEScores: [],
		highestQbScores: [],

		bestQbYears: [],
		bestRbYears: [],
		bestWrYears: [],
		bestTeYears: [],
		bestDefYears: []
	};

	for (let i = 1; i < 11; i++) {
		data.highestPlayerScores.push({
			score: sheet.getCell(i, 1).value,
			playerTeamDate: sheet.getCell(i, 2).value
		});
		data.highestQbScores.push({
			score: sheet.getCell(i, 3).value,
			playerTeamDate: sheet.getCell(i, 4).value
		});
		data.highestRbScores.push({
			score: sheet.getCell(i, 5).value,
			playerTeamDate: sheet.getCell(i, 6).value
		});
		data.highestWrScores.push({
			score: sheet.getCell(i, 7).value,
			playerTeamDate: sheet.getCell(i, 8).value
		});
		data.highestTEScores.push({
			score: sheet.getCell(i, 9).value,
			playerTeamDate: sheet.getCell(i, 10).value
		});
	}

	return data;
}

module.exports = getPlayerRecords;
