const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./client_secret.json');

async function accessSpreadsheet() {
	const doc = new GoogleSpreadsheet('10hTrKAubzc-uZ_RtKGVvU3cg9hhN2cDYll5p1ltfwmk');
	await doc.useServiceAccountAuth({
		client_email: creds.client_email,
		private_key: creds.private_key
	});
	await doc.loadInfo();
	console.log(doc.title);

	const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]

	await sheet.loadCells('A1:AG13');

	const a1 = sheet.getCell(0, 0);

	const teams = {};

	for (let i = 1; i < 12; i++) {
		console.log(`getting cell at (${i}, 1)`);
		teams[i] = sheet.getCell(i, 1).value;
		console.log(teams[i].value);
	}

	console.log(sheet.title);

	console.log(teams);
}

accessSpreadsheet();
