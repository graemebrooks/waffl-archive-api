const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

async function getTeamRecords() {
	const doc = new GoogleSpreadsheet('16N1aqct2O9zsIWcy9W-AhMd-IW8JCoF8DY1fqElYPB8');
	await doc.useServiceAccountAuth({
		client_email: process.env.CLIENT_EMAIL,
		private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n')
	});
	await doc.loadInfo();

	const yearlyTeamRecordsSheet = doc.sheetsByIndex[2]; // yearly team records sheet
	const teamHistorySheet = doc.sheetsByIndex[3]; // team history sheet

	await yearlyTeamRecordsSheet.loadCells('A1:DN73');
	await teamHistorySheet.loadCells('A1:HC11');

	const data = {
		cartels: {
			pointsByPosition: {},
			seasons: []
		},
		beer: {
			pointsByPosition: {},
			seasons: []
		},
		iceBabies: {
			pointsByPosition: {},
			seasons: []
		},
		islanders: {
			pointsByPosition: {},
			seasons: []
		},
		wenches: {
			pointsByPosition: {},
			seasons: []
		},
		toadLickers: {
			pointsByPosition: {},
			seasons: []
		},
		chiliPeppers: {
			pointsByPosition: {},
			seasons: []
		},
		digitalRays: {
			pointsByPosition: {},
			seasons: []
		},
		notTheJets: {
			pointsByPosition: {},
			seasons: []
		},
		nadoes: {
			pointsByPosition: {},
			seasons: []
		},
		librarians: {
			pointsByPosition: {},
			seasons: []
		}
	};

	// Columns that contain team names to be searched
	const teamColumns = [ 47, 55, 63, 71, 87, 95 ];
	// corresponding fantasy positions
	const position = [ 'qb', 'rb', 'wr', 'te', 'k', 'def' ];

	// populate PBP data
	for (let i = 1; i <= 11; i++) {
		for (let j = 0; j < 6; j++) {
			let team = yearlyTeamRecordsSheet.getCell(i, teamColumns[j]).value;

			// Update Alltime QB values
			switch (team) {
				case 'Cartels':
					data.cartels.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
						i,
						teamColumns[j] - 1
					).value;
					break;
				case 'Beer':
					data.beer.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
						i,
						teamColumns[j] - 1
					).value;
					break;
				case 'Ice Babies':
					data.iceBabies.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
						i,
						teamColumns[j] - 1
					).value;
					break;
				case 'Islanders':
					data.islanders.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
						i,
						teamColumns[j] - 1
					).value;
					break;
				case 'Wenches':
					data.wenches.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
						i,
						teamColumns[j] - 1
					).value;
					break;
				case 'Toad Lickers':
					data.toadLickers.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
						i,
						teamColumns[j] - 1
					).value;
					break;
				case 'Chili Peppers':
					data.chiliPeppers.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
						i,
						teamColumns[j] - 1
					).value;
					break;
				case 'Digital Rays':
					data.digitalRays.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
						i,
						teamColumns[j] - 1
					).value;
					break;
				case 'Not The Jets':
					data.notTheJets.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
						i,
						teamColumns[j] - 1
					).value;
					break;
				case 'Nadoes':
					data.nadoes.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
						i,
						teamColumns[j] - 1
					).value;
					break;
				case 'Librarians':
					data.librarians.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
						i,
						teamColumns[j] - 1
					).value;
					break;
			}
		}
	}

	// Columns that contain seasons for each team in team history sheet
	const teamHistorySeasonColumns = [ 5, 25, 45, 65, 85, 105, 125, 145, 165, 185, 204 ];
	// corresponding teams
	const teams = [
		'iceBabies',
		'cartels',
		'islanders',
		'toadLickers',
		'digitalRays',
		'wenches',
		'nadoes',
		'notTheJets',
		'beer',
		'chiliPeppers',
		'librarians'
	];

	// populate season data
	for (let i = 1; i < 8; i++) {
		for (let j = 0; j < 11; j++) {
			let season = {
				year: teamHistorySheet.getCell(i, teamHistorySeasonColumns[j]).value,
				wins: teamHistorySheet.getCell(i, teamHistorySeasonColumns[j] + 1).value,
				losses: teamHistorySheet.getCell(i, teamHistorySeasonColumns[j] + 2).value,
				pointsFor: teamHistorySheet.getCell(i, teamHistorySeasonColumns[j] + 3).value,
				pointsAgainst: teamHistorySheet.getCell(i, teamHistorySeasonColumns[j] + 5).value
			};
			data[teams[j]].seasons.push(season);
		}
	}

	return data;
}
module.exports = getTeamRecords;
