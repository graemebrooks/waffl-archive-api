export interface playerRecords {
	highestPlayerScores: Array<record>;
	highestQbScores: Array<record>;
	highestRbScores: Array<record>;
	highestWrScores: Array<record>;
	highestTEScores: Array<record>;

	bestQbSeasons: Array<record>;
	bestRbSeasons: Array<record>;
	bestWrSeasons: Array<record>;
	bestTeSeasons: Array<record>;
	bestDefSeasons: Array<record>;
}

interface record {
	score: string;
	playerTeamDate: string;
}
