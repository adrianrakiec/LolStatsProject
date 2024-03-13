import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { SearchComponent } from './search/search.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { RangComponent } from './rang/rang.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		TitleComponent,
		SearchComponent,
		ProfileInfoComponent,
		RangComponent
	],
	template: `
		<!-- <app-title>{{title}}</app-title>
		<app-search />
		<app-profile-info/> -->
		<app-rang />
		<app-rang />
	`,
	styles: [],
})
export class AppComponent {
	title = 'Check League Player Account :)';
}
