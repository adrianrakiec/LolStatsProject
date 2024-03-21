import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ProfileInfoComponent } from '../profile-info/profile-info.component';
import { RangComponent } from '../rang/rang.component';
import { ProfileDataService } from '../services/profile-data.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-profile-page',
	standalone: true,
	imports: [SearchComponent, ProfileInfoComponent, RangComponent, CommonModule],
	templateUrl: './profile-page.component.html',
	styles: ``,
})
export class ProfilePageComponent {
	constructor(public profileInfoService: ProfileDataService) {}
}
