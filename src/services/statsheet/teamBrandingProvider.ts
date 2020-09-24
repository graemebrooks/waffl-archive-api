interface teamBranding {
	logoUrl: string;
	colors: {
		primary: string;
		secondary: string;
	};
}

export function getTeamBranding(teamName: string): teamBranding {
	switch (teamName) {
		case 'Cartels':
			return {
				logoUrl: 'https://i.imgur.com/lIRYULG.png',
				colors: {
					primary: '#ee8a10',
					secondary: '#dd366d'
				}
			};
		case 'Beer':
			return {
				logoUrl: 'https://i.imgur.com/aTs50El.png',
				colors: {
					primary: '#00005b',
					secondary: '#ffce00'
				}
			};
		case 'Ice Babies':
			return {
				logoUrl: 'https://i.imgur.com/KE0cDMD.png',
				colors: {
					primary: '#7437bf',
					secondary: '#ffffff'
				}
			};
		case 'Islanders':
			return {
				logoUrl: 'https://i.imgur.com/bDpjNeF.png',
				colors: {
					primary: '#1e6b0e',
					secondary: '#ff6d00'
				}
			};
		case 'Wenches':
			return {
				logoUrl: 'https://i.imgur.com/qVAzfoj.png',
				colors: {
					primary: '#00205b',
					secondary: '#fa6300'
				}
			};
		case 'Toad Lickers':
			return {
				logoUrl: 'https://i.imgur.com/TpSQJZN.png',
				colors: {
					primary: '#206632',
					secondary: '#e53841'
				}
			};
		case 'Chili Peppers':
			return {
				logoUrl: 'https://i.imgur.com/a9jFlAW.png',
				colors: {
					primary: '#dd1919',
					secondary: '#ffb600'
				}
			};
		case 'Digital Rays':
			return {
				logoUrl: 'https://i.imgur.com/Je5Chs0.png',
				colors: {
					primary: '#00f1ee',
					secondary: '#db00c9'
				}
			};
		case 'Not The Jets':
			return {
				logoUrl: 'https://i.imgur.com/q4j1M2D.png',
				colors: {
					primary: '#000b6d',
					secondary: '#ffe600'
				}
			};
		case 'Nadoes':
			return {
				logoUrl: 'https://i.imgur.com/lLmmaih.png',
				colors: {
					primary: '#41b1f0',
					secondary: '#a7a7a7'
				}
			};
		case 'Librarians':
			return {
				logoUrl: 'https://i.imgur.com/znuRXVw.png',
				colors: {
					primary: '#007efe',
					secondary: '#ffffff'
				}
			};
	}
}
