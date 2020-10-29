import FleaflickerService from '../services/fleaflicker/fleaFlickerService';

module.exports = {
	getCurrentWafflStandings
};

async function getCurrentWafflStandings(req: any, res: any) {
	let fleaFlickerService: FleaflickerService = new FleaflickerService();
	let standings = await fleaFlickerService.getCurrentWafflStandings();
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(standings);
	} catch (err) {
		res.status(400).json(err);
	}
}