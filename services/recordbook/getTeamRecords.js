const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

async function getTeamRecords() {
	const doc = new GoogleSpreadsheet('16N1aqct2O9zsIWcy9W-AhMd-IW8JCoF8DY1fqElYPB8');
	await doc.useServiceAccountAuth({
		client_email: process.env.CLIENT_EMAIL,
		private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n')
	});
	await doc.loadInfo();

	const sheet = doc.sheetsByIndex[2]; // yearly team records sheet

	await sheet.loadCells('A1:DN73');

	const data = {
		pointsByPosition: {
			cartels: {},
			beer: {},
			iceBabies: {},
			islanders: {},
			wenches: {},
			toadLickers: {},
			chiliPeppers: {},
			digitalRays: {},
			notTheJets: {},
			nadoes: {},
			librarians: {}
		}
	};

	// Columns that contain team names to be searched
	const teamColumns = [ 47, 55, 63, 71, 87, 95 ];
	// corresponding fantasy positions
	const position = [ 'qb', 'rb', 'wr', 'te', 'k', 'def' ];

	for (let i = 1; i <= 11; i++) {
		for (let j = 0; j < 6; j++) {
			let team = sheet.getCell(i, teamColumns[j]).value;

			// Update Alltime QB values
			switch (team) {
				case 'Cartels':
					data.pointsByPosition.cartels[position[j]] = sheet.getCell(i, teamColumns[j] - 1).value;
					break;
				case 'Beer':
					data.pointsByPosition.beer[position[j]] = sheet.getCell(i, teamColumns[j] - 1).value;
					break;
				case 'Ice Babies':
					data.pointsByPosition.iceBabies[position[j]] = sheet.getCell(i, teamColumns[j] - 1).value;
					break;
				case 'Islanders':
					data.pointsByPosition.islanders[position[j]] = sheet.getCell(i, teamColumns[j] - 1).value;
					break;
				case 'Wenches':
					data.pointsByPosition.wenches[position[j]] = sheet.getCell(i, teamColumns[j] - 1).value;
					break;
				case 'Toad Lickers':
					data.pointsByPosition.toadLickers[position[j]] = sheet.getCell(i, teamColumns[j] - 1).value;
					break;
				case 'Chili Peppers':
					data.pointsByPosition.chiliPeppers[position[j]] = sheet.getCell(i, teamColumns[j] - 1).value;
					break;
				case 'Digital Rays':
					data.pointsByPosition.digitalRays[position[j]] = sheet.getCell(i, teamColumns[j] - 1).value;
					break;
				case 'Not The Jets':
					data.pointsByPosition.notTheJets[position[j]] = sheet.getCell(i, teamColumns[j] - 1).value;
					break;
				case 'Nadoes':
					data.pointsByPosition.nadoes[position[j]] = sheet.getCell(i, teamColumns[j] - 1).value;
					break;
				case 'Librarians':
					data.pointsByPosition.librarians[position[j]] = sheet.getCell(i, teamColumns[j] - 1).value;
					break;
			}
		}
	}
	return data;
}
module.exports = getTeamRecords;
