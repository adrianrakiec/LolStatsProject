import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ProfileInfoComponent } from '../profile-info/profile-info.component';
import { RangComponent } from '../rang/rang.component';

@Component({
	selector: 'app-profile-page',
	standalone: true,
	imports: [SearchComponent, ProfileInfoComponent, RangComponent],
	templateUrl: './profile-page.component.html',
	styles: ``,
})
export class ProfilePageComponent {}
