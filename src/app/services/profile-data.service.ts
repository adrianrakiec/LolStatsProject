import { Injectable } from '@angular/core';
import { Summoner } from '../types/Summoner';
import { League } from '../types/League';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProfileDataService {
	constructor() {}

	private summonerSubject: BehaviorSubject<Summoner | null> =
		new BehaviorSubject<Summoner | null>(null);
	private leagueSubject: BehaviorSubject<League[]> = new BehaviorSubject<
		League[]
	>([]);

	public summonerData$: Observable<Summoner | null> =
		this.summonerSubject.asObservable();
	public leagueData$: Observable<League[]> = this.leagueSubject.asObservable();

	setSummonerData(data: Summoner) {
		this.summonerSubject.next(data);
	}

	setLeagueData(data: League[]) {
		this.leagueSubject.next(data);
	}
}
