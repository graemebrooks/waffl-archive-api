const { GoogleSpreadsheet } = require('google-spreadsheet');

import { draft } from './draft';

export default class GetDraftDataService {
	document: any;

	async getDraftData(sheetNumber: number, cells: string) {
		// instantiates new spreadsheet object with the ID string for the draft google doc
		this.document = new GoogleSpreadsheet('1UyEK38Llr17ph_qrnuN2CUaKZitpXoKoR59uJqVqgIc');

		let draft: draft = {
			firstRound: [],
			secondRound: [],
			thirdRound: []
		};

		// provides authorization from environmental variables
		await this.document.useServiceAccountAuth({
			client_email: process.env.CLIENT_EMAIL,
			private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n')
		});

		await this.document.loadInfo();

		// gets the specific draft sheet from the doc with the specified sheet number
		const sheet = this.document.sheetsByIndex[sheetNumber];

		// reads and loads values only in specified cells
		await sheet.loadCells(cells);

		// add draft data by round
		for (let i = 1; i < 11; i++) {
			draft.firstRound.push({
				pickNo: sheet.getCell(i, 1).value,
				owner: sheet.getCell(i, 2).value,
				player: sheet.getCell(i, 3).value
			});
			draft.secondRound.push({
				pickNo: sheet.getCell(i + 10, 1).value,
				owner: sheet.getCell(i + 10, 2).value,
				player: sheet.getCell(i + 10, 3).value
			});
			draft.thirdRound.push({
				pickNo: sheet.getCell(i + 20, 1).value,
				owner: sheet.getCell(i + 20, 2).value,
				player: sheet.getCell(i + 20, 3).value
			});
		}

		return draft;
	}
}

module.exports = GetDraftDataService;
