import { Injectable } from '@angular/core';
import { Match } from '../types/Match';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProfileDataService } from './profile-data.service';
import { MostPlayedChamp } from '../types/MostPlayedChamp';

@Injectable({
	providedIn: 'root',
})
export class MatchHistoryDataService {
	private matchesSubject: BehaviorSubject<Match[]> = new BehaviorSubject<
		Match[]
	>([]);

	public matchHistory$: Observable<Match[]> =
		this.matchesSubject.asObservable();

	playerPUUID: string = '';
	private playerIndex: number = -1;

	constructor(private profileDataService: ProfileDataService) {
		this.profileDataService.summonerData$.subscribe(data => {
			if (data) {
				this.playerPUUID = data.puuid;
			}
		});
	}

	setMatches(matches: Match[]) {
		this.matchesSubject.next(matches);
	}

	getMostPlayedChamp(matches: Match[]) {
		let lastPlayedChamps: MostPlayedChamp[] = [];
		let result: MostPlayedChamp[] = [];

		matches.forEach((match, index) => {
			this.setPlayerIndex(matches, index);

			if (match.info.participants[this.playerIndex]) {
				let champ: MostPlayedChamp = {
					champId: match.info.participants[this.playerIndex].championId,
					champName: match.info.participants[this.playerIndex].championName,
					wins: match.info.participants[this.playerIndex].win ? 1 : 0,
					quantity: 1,
				};

				lastPlayedChamps.push(champ);
			}
		});

		const lastPlayedChamp = lastPlayedChamps[0];

		lastPlayedChamps.forEach(champ => {
			if (!result.some(obj => obj.champName === champ.champName))
				result.push({ ...champ });
			else {
				const index = result.findIndex(
					element => element.champName === champ.champName
				);
				if (result) {
					result[index].wins += champ.wins;
					result[index].quantity++;
				}
			}
		});

		result = result.sort((a, b) => a.quantity - b.quantity);

		if (
			result[result.length - 1] &&
			lastPlayedChamp &&
			result[result.length - 1].quantity > lastPlayedChamp.quantity
		)
			return result[result.length - 1];
		else return lastPlayedChamp;
	}

	private setPlayerIndex(matches: Match[], matchIndex: number) {
		if (this.playerPUUID) {
			this.playerIndex = matches[matchIndex].metadata.participants.findIndex(
				puuid => puuid === this.playerPUUID
			);
		}
	}
}
