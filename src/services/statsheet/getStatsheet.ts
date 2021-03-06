import { teamData, TeamData } from './statsheetTypes';
import { getTeamBranding } from './teamBrandingProvider';

const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

async function getStatsheet() {
	const doc = new GoogleSpreadsheet('10hTrKAubzc-uZ_RtKGVvU3cg9hhN2cDYll5p1ltfwmk');
	await doc.useServiceAccountAuth({
		client_email: process.env.CLIENT_EMAIL,
		private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n')
	});
	await doc.loadInfo();

	const sheet = doc.sheetsByIndex[0]; // all time regular season team stats

	await sheet.loadCells('A1:AG13');

	interface dataInterface {
		teams: teamData[];
	}

	// Populate data from statsheet google doc
	const data: dataInterface = { teams: [] };
	for (let i = 1; i < 12; i++) {
		let teambranding = getTeamBranding(sheet.getCell(i, 1).value);
		data.teams.push(
			new TeamData(
				sheet.getCell(i, 1).value,
				sheet.getCell(i, 2).value,
				sheet.getCell(i, 3).value,
				sheet.getCell(i, 7).value,
				sheet.getCell(i, 8).value,
				sheet.getCell(i, 9).value,
				sheet.getCell(i, 10).value,
				sheet.getCell(i, 11).value,
				sheet.getCell(i, 12).value,
				sheet.getCell(i, 13).value,
				{
					score: sheet.getCell(i, 16).value,
					week: sheet.getCell(i, 17).value
				},
				{
					score: sheet.getCell(i, 18).value,
					week: sheet.getCell(i, 19).value
				},
				{
					record: sheet.getCell(i, 20).value,
					year: sheet.getCell(i, 21).value
				},
				{
					record: sheet.getCell(i, 22).value,
					year: sheet.getCell(i, 23).value
				},
				{
					winning: sheet.getCell(i, 30).value,
					losing: sheet.getCell(i, 31).value
				},
				teambranding.logoUrl,
				{
					primary: teambranding.colors.primary,
					secondary: teambranding.colors.secondary
				}
			)
		);
	}

	return data;
}

module.exports = getStatsheet;
