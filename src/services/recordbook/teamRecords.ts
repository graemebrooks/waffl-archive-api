export type teamRecords = {
	[team: string]: {
		pointsByPosition: PointsByPosition;
		seasons: Array<Season>;
	};
};

type PointsByPosition = { [position: string]: number };

type Season = {
	year: number;
	wins: number;
	losses: number;
	pointsFor: number;
	pointsAgainst: number;
};
