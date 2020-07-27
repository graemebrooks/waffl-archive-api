const { GoogleSpreadsheet } = require('google-spreadsheet');

import { teamRecords } from './teamRecords';

export default class GetTeamRecordsService {
	document: any;

	async getTeamRecords(
		yearlyTeamRecordSheetNumber: number,
		teamHistorySheetNumber: number,
		yearlyTeamRecordCells: string,
		teamHistoryCells: string
	) {
		// instantiates new spreadsheet object with the ID string for the draft google doc
		const doc = new GoogleSpreadsheet('16N1aqct2O9zsIWcy9W-AhMd-IW8JCoF8DY1fqElYPB8');

		// provides authorization from environmental variables
		await doc.useServiceAccountAuth({
			client_email: process.env.CLIENT_EMAIL,
			private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n')
		});

		await doc.loadInfo();

		const yearlyTeamRecordsSheet = doc.sheetsByIndex[yearlyTeamRecordSheetNumber];
		const teamHistorySheet = doc.sheetsByIndex[teamHistorySheetNumber];

		await yearlyTeamRecordsSheet.loadCells(yearlyTeamRecordCells);
		await teamHistorySheet.loadCells(teamHistoryCells);

		const teamRecords: teamRecords = {
			cartels: {
				pointsByPosition: {
					qb: 0,
					te: 0,
					wr: 0,
					k: 0,
					rb: 0,
					def: 0
				},
				seasons: []
			},
			beer: {
				pointsByPosition: {
					qb: 0,
					te: 0,
					wr: 0,
					k: 0,
					rb: 0,
					def: 0
				},
				seasons: []
			},
			iceBabies: {
				pointsByPosition: {
					qb: 0,
					te: 0,
					wr: 0,
					k: 0,
					rb: 0,
					def: 0
				},
				seasons: []
			},
			islanders: {
				pointsByPosition: {
					qb: 0,
					te: 0,
					wr: 0,
					k: 0,
					rb: 0,
					def: 0
				},
				seasons: []
			},
			wenches: {
				pointsByPosition: {
					qb: 0,
					te: 0,
					wr: 0,
					k: 0,
					rb: 0,
					def: 0
				},
				seasons: []
			},
			toadLickers: {
				pointsByPosition: {
					qb: 0,
					te: 0,
					wr: 0,
					k: 0,
					rb: 0,
					def: 0
				},
				seasons: []
			},
			chiliPeppers: {
				pointsByPosition: {
					qb: 0,
					te: 0,
					wr: 0,
					k: 0,
					rb: 0,
					def: 0
				},
				seasons: []
			},
			digitalRays: {
				pointsByPosition: {
					qb: 0,
					te: 0,
					wr: 0,
					k: 0,
					rb: 0,
					def: 0
				},
				seasons: []
			},
			notTheJets: {
				pointsByPosition: {
					qb: 0,
					te: 0,
					wr: 0,
					k: 0,
					rb: 0,
					def: 0
				},
				seasons: []
			},
			nadoes: {
				pointsByPosition: {
					qb: 0,
					te: 0,
					wr: 0,
					k: 0,
					rb: 0,
					def: 0
				},
				seasons: []
			},
			librarians: {
				pointsByPosition: {
					qb: 0,
					te: 0,
					wr: 0,
					k: 0,
					rb: 0,
					def: 0
				},
				seasons: []
			}
		};

		// Columns that contain team names to be searched
		const teamColumns: Array<number> = [ 47, 55, 63, 71, 87, 95 ];
		// corresponding fantasy positions
		const position: Array<string> = [ 'qb', 'rb', 'wr', 'te', 'k', 'def' ];

		// populate PBP data
		for (let i = 1; i <= 11; i++) {
			for (let j = 0; j < 6; j++) {
				let team = yearlyTeamRecordsSheet.getCell(i, teamColumns[j]).value;

				// Update values
				switch (team) {
					case 'Cartels':
						teamRecords.cartels.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
							i,
							teamColumns[j] - 1
						).value;
						break;
					case 'Beer':
						teamRecords.beer.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
							i,
							teamColumns[j] - 1
						).value;
						break;
					case 'Ice Babies':
						teamRecords.iceBabies.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
							i,
							teamColumns[j] - 1
						).value;
						break;
					case 'Islanders':
						teamRecords.islanders.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
							i,
							teamColumns[j] - 1
						).value;
						break;
					case 'Wenches':
						teamRecords.wenches.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
							i,
							teamColumns[j] - 1
						).value;
						break;
					case 'Toad Lickers':
						teamRecords.toadLickers.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
							i,
							teamColumns[j] - 1
						).value;
						break;
					case 'Chili Peppers':
						teamRecords.chiliPeppers.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
							i,
							teamColumns[j] - 1
						).value;
						break;
					case 'Digital Rays':
						teamRecords.digitalRays.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
							i,
							teamColumns[j] - 1
						).value;
						break;
					case 'Not The Jets':
						teamRecords.notTheJets.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
							i,
							teamColumns[j] - 1
						).value;
						break;
					case 'Nadoes':
						teamRecords.nadoes.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
							i,
							teamColumns[j] - 1
						).value;
						break;
					case 'Librarians':
						teamRecords.librarians.pointsByPosition[position[j]] = yearlyTeamRecordsSheet.getCell(
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
				teamRecords[teams[j]].seasons.push(season);
			}
		}

		return teamRecords;
	}
}
module.exports = GetTeamRecordsService;
