import { Component } from '@angular/core';

@Component({
	selector: 'app-title',
	standalone: true,
	imports: [],
	template: ` <h1><ng-content></ng-content></h1> `,
	styles: ``,
})
export class TitleComponent {}
