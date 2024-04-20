import { Component } from '@angular/core';

@Component({
	selector: 'app-title',
	standalone: true,
	imports: [],
	template: ` <h1 class='title'><ng-content></ng-content></h1> `,
	styleUrls: ['./title.component.css'],
})
export class TitleComponent {}
