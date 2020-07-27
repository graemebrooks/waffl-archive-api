const { GoogleSpreadsheet } = require('google-spreadsheet');

import { playerRecords } from './playerRecords';

export default class GetPlayerRecordsService {
	document: any;

	async getPlayerRecords(sheetNumber: number, cells: string) {
		// instantiates new spreadsheet object with the ID string for the draft google doc
		this.document = new GoogleSpreadsheet('16N1aqct2O9zsIWcy9W-AhMd-IW8JCoF8DY1fqElYPB8');

		// provides authorization from environmental variables
		await this.document.useServiceAccountAuth({
			client_email: process.env.CLIENT_EMAIL,
			private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n')
		});

		await this.document.loadInfo();

		// gets the specific draft sheet from the doc with the specified sheet number
		const sheet = this.document.sheetsByIndex[sheetNumber];

		await sheet.loadCells(cells);

		// Generate Recordbook data
		let playerRecords: playerRecords = {
			highestPlayerScores: [],
			highestQbScores: [],
			highestRbScores: [],
			highestWrScores: [],
			highestTEScores: [],

			bestQbSeasons: [],
			bestRbSeasons: [],
			bestWrSeasons: [],
			bestTeSeasons: [],
			bestDefSeasons: []
		};

		for (let i = 1; i < 11; i++) {
			// Best Weekly Performances
			playerRecords.highestPlayerScores.push({
				score: sheet.getCell(i, 1).value,
				playerTeamDate: sheet.getCell(i, 2).value
			});
			playerRecords.highestQbScores.push({
				score: sheet.getCell(i, 3).value,
				playerTeamDate: sheet.getCell(i, 4).value
			});
			playerRecords.highestRbScores.push({
				score: sheet.getCell(i, 5).value,
				playerTeamDate: sheet.getCell(i, 6).value
			});
			playerRecords.highestWrScores.push({
				score: sheet.getCell(i, 7).value,
				playerTeamDate: sheet.getCell(i, 8).value
			});
			playerRecords.highestTEScores.push({
				score: sheet.getCell(i, 9).value,
				playerTeamDate: sheet.getCell(i, 10).value
			});

			//Best Seasonal Performances
			playerRecords.bestQbSeasons.push({
				score: sheet.getCell(i, 11).value,
				playerTeamDate: sheet.getCell(i, 13).value
			});
			playerRecords.bestRbSeasons.push({
				score: sheet.getCell(i, 14).value,
				playerTeamDate: sheet.getCell(i, 16).value
			});
			playerRecords.bestWrSeasons.push({
				score: sheet.getCell(i, 17).value,
				playerTeamDate: sheet.getCell(i, 19).value
			});
			playerRecords.bestTeSeasons.push({
				score: sheet.getCell(i, 20).value,
				playerTeamDate: sheet.getCell(i, 22).value
			});
			playerRecords.bestDefSeasons.push({
				score: sheet.getCell(i, 26).value,
				playerTeamDate: sheet.getCell(i, 28).value
			});
		}

		return playerRecords;
	}
}

module.exports = GetPlayerRecordsService;
