import { Component } from '@angular/core';
import { RiotApiService } from '../services/riot-api.service';
import { Summoner } from '../types/Summoner';
import { concatAll, concatMap, toArray } from 'rxjs';
import { MatchesList } from '../types/MatchesList';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../services/profile-data.service';
import { MatchHistoryDataService } from '../services/match-history-data.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-search',
	standalone: true,
	templateUrl: './search.component.html',
	imports: [CommonModule],
	styleUrls: ['./search.component.css'],
})
export class SearchComponent {
	constructor(
		private riotService: RiotApiService,
		private profileDataService: ProfileDataService,
		private matchHistoryService: MatchHistoryDataService,
		public loadingService: LoadingService,
		private router: Router,
		private authService: AuthService
	) {}

	private profileData: Summoner | null = null;
	private matchesList: MatchesList[] | null = null;
	isLoading: boolean = false;

	getData(region: string, username: string) {
		this.isLoading = true;

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
				this.router.navigate([`/profile/${this.profileData?.name}`]);
				this.isLoading = false;
			});
	}

	allowNavigation() {
		this.authService.setBtnClicked(true);
	}
}
