import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ProfileInfoComponent } from '../profile-info/profile-info.component';
import { RangComponent } from '../rang/rang.component';
import { ProfileDataService } from '../services/profile-data.service';
import { MatchHistoryDataService } from '../services/match-history-data.service';
import { CommonModule } from '@angular/common';
import { GameComponent } from '../game/game.component';
import { MatchesHistoryComponent } from '../matches-history/matches-history.component';

@Component({
	selector: 'app-profile-page',
	standalone: true,
	imports: [SearchComponent, ProfileInfoComponent, RangComponent, CommonModule, GameComponent, MatchesHistoryComponent],
	templateUrl: './profile-page.component.html',
	styles: ``,
})
export class ProfilePageComponent {
	constructor(public profileInfoService: ProfileDataService, public matchHistoryService: MatchHistoryDataService) {}
}
