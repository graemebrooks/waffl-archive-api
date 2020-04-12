module.exports = {
	logos
};

const logoUrls = {
	iceBabies: 'https://i.imgur.com/4PAjdJR.png',
	digitalRays: 'https://i.imgur.com/Je5Chs0.png',
	beer: 'https://i.imgur.com/aTs50El.png',
	islanders: 'https://i.imgur.com/bDpjNeF.png',
	chiliPeppers: 'https://i.imgur.com/a9jFlAW.png',
	cartels: 'https://i.imgur.com/lIRYULG.png',
	notTheJets: 'https://i.imgur.com/q4j1M2D.png',
	toadLickers: 'https://i.imgur.com/TpSQJZN.png',
	wenches: 'https://i.imgur.com/qVAzfoj.png',
	nadoes: 'https://i.imgur.com/lLmmaih.png',
	librarians: 'https://libraries.psu.edu/sites/default/files/default_images/librarian_0_0.gif'
};

function logos(req, res) {
	try {
		res.status(200).json(logoUrls);
	} catch (err) {
		res.status(400).json(err);
	}
}
