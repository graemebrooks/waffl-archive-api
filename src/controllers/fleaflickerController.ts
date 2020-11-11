import FleaflickerService from '../services/fleaflicker/fleaFlickerService';

module.exports = {
	getCurrentWafflStandings,
	getScoringLeaders
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

async function getScoringLeaders(req: any, res: any) {
	let fleaFlickerService: FleaflickerService = new FleaflickerService();
	let ScoringLeaders = await fleaFlickerService.getScoringLeaders();
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(ScoringLeaders);
	} catch (err) {
		res.status(400).json(err);
	}
}