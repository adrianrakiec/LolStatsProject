import { Component } from '@angular/core';
import { RiotApiService } from '../riot-api.service';
import { Summoner } from '../types/Summoner';
import { concatAll, concatMap, toArray } from 'rxjs';
import { League } from '../types/League';
import { MatchesList } from '../types/MatchesList';
import { Match } from '../types/Match';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-search',
	standalone: true,
	templateUrl: './search.component.html',
	imports: [CommonModule],
	styles: ``,
})
export class SearchComponent {
	constructor(private riotService: RiotApiService) {}

	profileData: Summoner | null = null;
	rankData: League[] | null = null;
	matchesList: MatchesList[] | null = null;
	matchesInfo: Match[] = [];

	getData(region: string, username: string) {
		this.riotService
			.getProfileData(region, username)
			.pipe(
				concatMap(result => {
					this.profileData = result;
					console.log(result);
					return this.riotService.getRankData(region, this.profileData.id);
				}),
				concatMap(result => {
					this.rankData = result;
					console.log(this.rankData);
					return this.riotService.getMatchesList(
						region,
						this.profileData?.puuid
					);
				}),
				concatMap(result => {
					this.matchesList = result;
					console.log(result);
					return this.riotService.getMatchesInfoList(region, this.matchesList);
				}),
				concatAll(),
				toArray()
			)
			.subscribe(matches => {
				this.matchesInfo = matches;
				console.log(this.matchesInfo);
			});
	}
}
