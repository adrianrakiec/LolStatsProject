import { Component, Input } from '@angular/core';
import { Match } from '../types/Match';
import { GameComponent } from '../game/game.component';

@Component({
	selector: 'app-matches-history',
	standalone: true,
	imports: [GameComponent],
	templateUrl: './matches-history.component.html',
	styleUrl: './matches-history.component.css',
})
export class MatchesHistoryComponent {
	@Input() matches: Match[] | null = [];
}
