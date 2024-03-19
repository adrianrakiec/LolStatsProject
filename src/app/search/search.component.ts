import { Component } from '@angular/core';
import { RiotApiService } from '../riot-api.service';
import { Summoner } from '../types/Summoner';

@Component({
	selector: 'app-search',
	standalone: true,
	templateUrl: './search.component.html',
	styles: ``,
})
export class SearchComponent {
	constructor(private riotService: RiotApiService) {}

	private profileData: Summoner | null = null;

	getData(region: string, username: string) {
		this.riotService.getProfileData(region, username).subscribe(data => {
			this.profileData = data;
			console.log(this.profileData);
		});
	}
}
