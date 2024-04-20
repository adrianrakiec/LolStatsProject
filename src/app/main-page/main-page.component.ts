import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { SearchComponent } from '../search/search.component';

@Component({
	selector: 'app-main-page',
	standalone: true,
	imports: [TitleComponent, SearchComponent],
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {}
