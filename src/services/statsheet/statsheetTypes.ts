export type teamData = {
	teamName: string;
	allTimeWins: string;
	allTimeLosses: string;
	allTimePointsScored: string;
	allTimePointsPerGame: string;
	allTimePointsAgainst: string;
	allTimePointsAgainstPerGame: string;
	AverageMarginPerGame: string;
	longestWinStreak: string;
	longestLossStreak: string;
	highestScoringGame: {
		score: string;
		week: string;
	};
	lowestScoringGame: {
		score: string;
		week: string;
	};
	bestSeason: {
		record: string;
		year: string;
	};
	worstSeason: {
		record: string;
		year: string;
	};
	Seasons: {
		winning: string;
		losing: string;
	};
	logoUrl: string;
	colors: {
		primary: string;
		secondary: string;
	};
};

export interface teams {
	iceBabies: teamData;
}

export const data: teams = {
	iceBabies: {
		teamName: '',
		allTimeWins: '',
		allTimeLosses: '',
		allTimePointsScored: '',
		allTimePointsPerGame: '',
		allTimePointsAgainst: '',
		allTimePointsAgainstPerGame: '',
		AverageMarginPerGame: '',
		longestWinStreak: '',
		longestLossStreak: '',
		highestScoringGame: {
			score: '',
			week: ''
		},
		lowestScoringGame: {
			score: '',
			week: ''
		},
		bestSeason: {
			record: '',
			year: ''
		},
		worstSeason: {
			record: '',
			year: ''
		},
		Seasons: {
			winning: '',
			losing: ''
		},
		logoUrl: '',
		colors: {
			primary: '',
			secondary: ''
		}
	}
};

export class TeamData {
	teamName: string;
	allTimeWins: string;
	allTimeLosses: string;
	allTimePointsScored: string;
	allTimePointsPerGame: string;
	allTimePointsAgainst: string;
	allTimePointsAgainstPerGame: string;
	AverageMarginPerGame: string;
	longestWinStreak: string;
	longestLossStreak: string;
	highestScoringGame: {
		score: string;
		week: string;
	};
	lowestScoringGame: {
		score: string;
		week: string;
	};
	bestSeason: {
		record: string;
		year: string;
	};
	worstSeason: {
		record: string;
		year: string;
	};
	Seasons: {
		winning: string;
		losing: string;
	};
	logoUrl: string;
	colors: {
		primary: string;
		secondary: string;
	};

	constructor(
		teamName: string,
		allTimeWins: string,
		allTimeLosses: string,
		allTimePointsScored: string,
		allTimePointsPerGame: string,
		allTimePointsAgainst: string,
		allTimePointsAgainstPerGame: string,
		AverageMarginPerGame: string,
		longestWinStreak: string,
		longestLossStreak: string,
		highestScoringGame: {
			score: string;
			week: string;
		},
		lowestScoringGame: {
			score: string;
			week: string;
		},
		bestSeason: {
			record: string;
			year: string;
		},
		worstSeason: {
			record: string;
			year: string;
		},
		Seasons: {
			winning: string;
			losing: string;
		},
		logoUrl: string,
		colors: {
			primary: string;
			secondary: string;
		}
	) {
		this.teamName = teamName;
		this.allTimeWins = allTimeWins;
		this.allTimeLosses = allTimeLosses;
		this.allTimePointsScored = allTimePointsScored;
		this.allTimePointsPerGame = allTimePointsPerGame;
		this.allTimePointsAgainst = allTimePointsAgainst;
		this.allTimePointsAgainstPerGame = allTimePointsAgainstPerGame;
		this.AverageMarginPerGame = AverageMarginPerGame;
		this.longestWinStreak = longestWinStreak;
		this.longestLossStreak = longestLossStreak;
		this.highestScoringGame = highestScoringGame;
		this.lowestScoringGame = lowestScoringGame;
		this.bestSeason = bestSeason;
		this.worstSeason = worstSeason;
		this.Seasons = Seasons;
		this.logoUrl = logoUrl;
		this.colors = colors;
	}
}
