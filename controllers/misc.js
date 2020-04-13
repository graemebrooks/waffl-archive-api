module.exports = {
	logos,
	colors
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

const teamColors = {
	iceBabies: {
		primary: '#5c2289',
		secondary: '#ffce00'
	},
	digitalRays: {
		primary: '#00f1ee',
		secondary: '#db00c9'
	},
	beer: {
		primary: '#00005b',
		secondary: '#ffce00'
	},
	islanders: {
		primary: '#1e6b0e',
		secondary: '#ff6d00'
	},
	chiliPeppers: {
		primary: '#dd1919',
		secondary: '#ffb600'
	},
	cartels: {
		primary: '#ee8a10',
		secondary: '#dd366d'
	},
	notTheJets: {
		primary: '#000b6d',
		secondary: '#ffe600'
	},
	toadLickers: {
		primary: '#206632',
		secondary: '#e53841'
	},
	wenches: {
		primary: '#00205b',
		secondary: '#fa6300'
	},
	nadoes: {
		primary: '#41b1f0',
		secondary: '#a7a7a7'
	},
	librarians: {
		primary: '#007efe',
		secondary: '#ffffff'
	}
};

function logos(req, res) {
	try {
		res.status(200).json(logoUrls);
	} catch (err) {
		res.status(400).json(err);
	}
}

function colors(req, res) {
	try {
		res.status(200).json(teamColors);
	} catch (err) {
		res.status(400).json(err);
	}
}
