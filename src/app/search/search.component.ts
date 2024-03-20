import { Component } from '@angular/core';
import { RiotApiService } from '../services/riot-api.service';
import { Summoner } from '../types/Summoner';
import { concatAll, concatMap, toArray } from 'rxjs';
import { MatchesList } from '../types/MatchesList';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../services/profile-data.service';
import { MatchHistoryDataService } from '../services/match-history-data.service';

@Component({
	selector: 'app-search',
	standalone: true,
	templateUrl: './search.component.html',
	imports: [CommonModule],
	styles: ``,
})
export class SearchComponent {
	constructor(
		private riotService: RiotApiService,
		private profileDataService: ProfileDataService,
		private matchHistoryService: MatchHistoryDataService
	) {}

	private profileData: Summoner | null = null;
	private matchesList: MatchesList[] | null = null;

	getData(region: string, username: string) {
		this.riotService
			.getProfileData(region, username)
			.pipe(
				concatMap(result => {
					this.profileData = result;
					this.profileDataService.setSummonerData(result);
					return this.riotService.getRankData(region, this.profileData.id);
				}),
				concatMap(result => {
					this.profileDataService.setLeagueData(result);
					return this.riotService.getMatchesList(
						region,
						this.profileData?.puuid
					);
				}),
				concatMap(result => {
					this.matchesList = result;
					return this.riotService.getMatchesInfoList(region, this.matchesList);
				}),
				concatAll(),
				toArray()
			)
			.subscribe(matches => {
				this.matchHistoryService.setMatches(matches);
			});
	}
}
