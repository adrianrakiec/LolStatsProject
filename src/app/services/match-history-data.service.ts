import { Injectable } from '@angular/core';
import { Match } from '../types/Match';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class MatchHistoryDataService {
	constructor() {}

	private matchesSubject: BehaviorSubject<Match[]> = new BehaviorSubject<
		Match[]
	>([]);

	public matchHistory$: Observable<Match[]> =
		this.matchesSubject.asObservable();

	setMatches(matches: Match[]) {
		this.matchesSubject.next(matches);
	}
}
