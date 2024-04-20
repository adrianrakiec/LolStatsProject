export interface SummonerSpell {
	id: string;
	name: string;
	description: string;
	tooltip: string;
	maxrank: number;
	cooldown: number[];
	cooldownBurn: string;
	cost: number[];
	costBurn: string;
	datavalues: {};
	effect: [];
	effectBurn: [];
	vars: [];
	key: string;
	summonerLevel: number;
	modes: string[];
	costType: string;
	maxammo: string;
	range: number[];
	rangeBurn: string;
	image: {};
	resource: string;
}
