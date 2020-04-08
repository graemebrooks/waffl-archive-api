const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

async function getAllTimeWinsAndLosses() {
	const doc = new GoogleSpreadsheet('10hTrKAubzc-uZ_RtKGVvU3cg9hhN2cDYll5p1ltfwmk');
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
			allTimeLosses: sheet.getCell(i, 3).value
		};
	}

	return data;
}

module.exports = getAllTimeWinsAndLosses;
