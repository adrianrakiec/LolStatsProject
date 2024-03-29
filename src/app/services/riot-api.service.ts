import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner } from '../types/Summoner';
import { League } from '../types/League';
import { MatchesList } from '../types/MatchesList';
import { Match } from '../types/Match';
import { toArray } from 'rxjs';
import { Queue } from '../types/Queue';
import { SpellsData } from '../types/SpellsData';
import { SummonerSpell } from '../types/SummonerSpell';

@Injectable({
	providedIn: 'root',
})
export class RiotApiService {
	private readonly API_KEY: string =
		'RGAPI-2d76b08e-f012-4361-9d18-de48089dbb94';

	queueTypes: Queue[] = [];
	summonerSpells: SummonerSpell[] = [];

	constructor(private http: HttpClient) {
		this.setQueueType();
		this.setSummonerSpells();
	}

	getProfileData(region: string, username: string) {
		const apiUrl = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${this.API_KEY}`;
		return this.http.get<Summoner>(apiUrl);
	}

	getRankData(region: string, accountId: string) {
		const apiUrl = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${accountId}?api_key=${this.API_KEY}`;
		return this.http.get<League[]>(apiUrl);
	}

	getMatchesList(region: string, puuid: string = '') {
		const fullNameRegion = this.changeRegion(region);

		const apiUrl = `https://${fullNameRegion}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${this.API_KEY}`;
		return this.http.get<MatchesList[]>(apiUrl);
	}

	getMatchesInfoList(region: string, matches: MatchesList[]) {
		const fullNameRegion = this.changeRegion(region);

		return matches.map(matchId => {
			const apiUrl = `https://${fullNameRegion}.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${this.API_KEY}`;
			return this.http.get<Match>(apiUrl);
		});
	}

	changeRegion(region: string) {
		return region === 'na1' ? 'americas' : 'europe';
	}

	private setQueueType() {
		const url: string =
			'https://static.developer.riotgames.com/docs/lol/queues.json';

		this.http
			.get<Queue>(url)
			.pipe(toArray())
			.subscribe(data => {
				this.queueTypes = data.flat();
			});
	}

	private setSummonerSpells() {
		const url: string =
			'https://ddragon.leagueoflegends.com/cdn/14.6.1/data/en_US/summoner.json';

		this.http
			.get<SpellsData>(url)
			.pipe(toArray())
			.subscribe(data => {
				for (const spell of Object.values(data[0].data)) {
					this.summonerSpells.push(spell as SummonerSpell);
				}
			});
	}
}
