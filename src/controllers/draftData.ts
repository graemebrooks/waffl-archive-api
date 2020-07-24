import GetDraftDataService from '../services/draftData/getDraftDataService';

module.exports = {
	get2014Draft,
	get2015Draft,
	get2016Draft,
	get2017Draft,
	get2018Draft,
	get2019Draft,
	get2020Draft
};

async function get2014Draft(req: any, res: any) {
	let draftDataService: GetDraftDataService = new GetDraftDataService();
	let draft = await draftDataService.getDraftData(7, 'A1:O91');
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(draft);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function get2015Draft(req: any, res: any) {
	let draftDataService: GetDraftDataService = new GetDraftDataService();
	let draft = await draftDataService.getDraftData(6, 'A1:O56');
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(draft);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function get2016Draft(req: any, res: any) {
	let draftDataService: GetDraftDataService = new GetDraftDataService();
	let draft = await draftDataService.getDraftData(5, 'A1:O61');
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(draft);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function get2017Draft(req: any, res: any) {
	let draftDataService: GetDraftDataService = new GetDraftDataService();
	let draft = await draftDataService.getDraftData(4, 'A1:O62');
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(draft);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function get2018Draft(req: any, res: any) {
	let draftDataService: GetDraftDataService = new GetDraftDataService();
	let draft = await draftDataService.getDraftData(3, 'A1:O62');
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(draft);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function get2019Draft(req: any, res: any) {
	let draftDataService: GetDraftDataService = new GetDraftDataService();
	let draft = await draftDataService.getDraftData(2, 'A1:O45');
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(draft);
	} catch (err) {
		res.status(400).json(err);
	}
}

async function get2020Draft(req: any, res: any) {
	let draftDataService: GetDraftDataService = new GetDraftDataService();
	let draft = await draftDataService.getDraftData(1, 'A1:O64');
	try {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.status(200).json(draft);
	} catch (err) {
		res.status(400).json(err);
	}
}
