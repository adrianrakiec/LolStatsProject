import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner } from './types/Summoner';

@Injectable({
	providedIn: 'root',
})
export class RiotApiService {
	private readonly API_KEY: string =
		'RGAPI-7a4343e1-0fbf-4fc9-b02f-db2a3a71f93b';

	constructor(private http: HttpClient) {}

	getProfileData(region: string, username: string) {
		const apiUrl = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${this.API_KEY}`;
		return this.http.get<Summoner>(apiUrl);
	}
}
