import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner } from './types/Summoner';
import { League } from './types/League';
import { MatchesList } from './types/MatchesList';
import { Match } from './types/Match';

@Injectable({
	providedIn: 'root',
})
export class RiotApiService {
	private readonly API_KEY: string =
		'RGAPI-9735012b-7637-4e5a-8a7e-a99693e7fbd7';

	constructor(private http: HttpClient) {}

	getProfileData(region: string, username: string) {
		const apiUrl = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${this.API_KEY}`;
		return this.http.get<Summoner>(apiUrl);
	}

	getRankData(region: string, accountId: string) {
		const apiUrl = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${accountId}?api_key=${this.API_KEY}`;
		return this.http.get<League>(apiUrl);
	}

	getMatchesList(region: string, puuid: string) {
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
}
