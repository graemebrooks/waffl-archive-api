const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

const { logoUrls } = require('../teamMisc/teamData');
const { teamColors } = require('../teamMisc/teamData');

async function get2016DraftData() {
	const doc = new GoogleSpreadsheet('1UyEK38Llr17ph_qrnuN2CUaKZitpXoKoR59uJqVqgIc');
	await doc.useServiceAccountAuth({
		client_email: process.env.CLIENT_EMAIL,
		private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n')
	});
	await doc.loadInfo();

	const sheet = doc.sheetsByIndex[5]; // 2016 draft sheet

	await sheet.loadCells('A1:O61');

	// Generate draft data
	const data = {
		firstRound: [],
		secondRound: [],
		thirdRound: [],
		draftsByTeam: {
			islanders: [],
			notTheJets: [],
			cartels: [],
			wenches: [],
			digitalRays: [],
			beer: [],
			iceBabies: [],
			chiliPeppers: [],
			librarians: [],
			toadLickers: []
		}
	};

	// add draft data by round
	for (i = 1; i < 11; i++) {
		data.firstRound.push({
			pickNo: sheet.getCell(i, 1).value,
			owner: sheet.getCell(i, 2).value,
			player: sheet.getCell(i, 3).value
		});
		data.secondRound.push({
			pickNo: sheet.getCell(i + 10, 1).value,
			owner: sheet.getCell(i + 10, 2).value,
			player: sheet.getCell(i + 10, 3).value
		});
		data.thirdRound.push({
			pickNo: sheet.getCell(i + 20, 1).value,
			owner: sheet.getCell(i + 20, 2).value,
			player: sheet.getCell(i + 20, 3).value
		});
	}

	//add draft data by team
	for (let i = 1; i < 15; i++) {
		// islanders
		islanderPlayer = sheet.getCell(i, 5).value;
		if (islanderPlayer) data.draftsByTeam.islanders.push(islanderPlayer);

		// not the jets
		notTheJetsPlayer = sheet.getCell(i, 6).value;
		if (notTheJetsPlayer) data.draftsByTeam.notTheJets.push(notTheJetsPlayer);

		// cartels
		cartelsPlayer = sheet.getCell(i, 7).value;
		if (cartelsPlayer) data.draftsByTeam.cartels.push(cartelsPlayer);

		// wenches
		wenchesPlayer = sheet.getCell(i, 8).value;
		if (wenchesPlayer) data.draftsByTeam.wenches.push(wenchesPlayer);

		// digital rays
		digitalRaysPlayer = sheet.getCell(i, 9).value;
		if (digitalRaysPlayer) data.draftsByTeam.digitalRays.push(digitalRaysPlayer);

		// beer
		beerPlayer = sheet.getCell(i, 10).value;
		if (beerPlayer) data.draftsByTeam.beer.push(beerPlayer);

		// ice babies
		iceBabiesPlayer = sheet.getCell(i, 11).value;
		if (iceBabiesPlayer) data.draftsByTeam.iceBabies.push(iceBabiesPlayer);

		// chili peppers
		chiliPeppersPlayer = sheet.getCell(i, 12).value;
		if (chiliPeppersPlayer) data.draftsByTeam.chiliPeppers.push(chiliPeppersPlayer);

		// librarians
		librariansPlayer = sheet.getCell(i, 12).value;
		if (librariansPlayer) data.draftsByTeam.librarians.push(librariansPlayer);

		// toad lickers
		toadLickersPlayer = sheet.getCell(i, 12).value;
		if (toadLickersPlayer) data.draftsByTeam.toadLickers.push(toadLickersPlayer);
	}

	return data;
}

module.exports = get2016DraftData;
