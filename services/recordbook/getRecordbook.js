const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

async function getStatsheet() {
	const doc = new GoogleSpreadsheet('16N1aqct2O9zsIWcy9W-AhMd-IW8JCoF8DY1fqElYPB8');
	await doc.useServiceAccountAuth({
		client_email: process.env.CLIENT_EMAIL,
		private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n')
	});
	await doc.loadInfo();

	const sheet = doc.sheetsByIndex[0]; // all time regular season team stats

	await sheet.loadCells('A1:AG13');

	// Load Teams
	const teams = {};
	for (let i = 1; i < 12; i++) {
		teams[i] = sheet.getCell(i, 1).value;
	}

	// Generate Wins and Losses Data
	const data = {};
	for (let i = 1; i < 12; i++) {
		data[teams[i]] = {
			allTimeWins: sheet.getCell(i, 2).value,
			allTimeLosses: sheet.getCell(i, 3).value,
			allTimePointsScored: sheet.getCell(i, 7).value,
			allTimePointsPerGame: sheet.getCell(i, 8).value,
			allTimePointsAgainst: sheet.getCell(i, 9).value,
			allTimePointsAgainstPerGame: sheet.getCell(i, 10).value,
			AverageMarginPerGame: sheet.getCell(i, 11).value,
			longestWinStreak: sheet.getCell(i, 12).value,
			longestLossStreak: sheet.getCell(i, 13).value,
			highestScoringGame: {
				score: sheet.getCell(i, 16).value,
				week: sheet.getCell(i, 17).value
			},
			lowestScoringGame: {
				score: sheet.getCell(i, 18).value,
				week: sheet.getCell(i, 19).value
			},
			bestSeason: {
				record: sheet.getCell(i, 20).value,
				year: sheet.getCell(i, 21).value
			},
			worstSeason: {
				record: sheet.getCell(i, 22).value,
				year: sheet.getCell(i, 23).value
			},
			Seasons: {
				winning: sheet.getCell(i, 30).value,
				losing: sheet.getCell(i, 31).value
			}
		};
	}

	return data;
}

module.exports = getStatsheet;
