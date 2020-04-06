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

	await sheet.loadCells('A1:E10');

	const a1 = sheet.getCell(0, 0);

	console.log(a1.value);

	console.log(sheet.title);
	console.log(sheet.rowCount);
}

accessSpreadsheet();
