export interface draft {
	firstRound: Array<selection>;
	secondRound: Array<selection>;
	thirdRound: Array<selection>;
}

interface selection {
	pickNo: string;
	owner: string;
	player: string;
}
