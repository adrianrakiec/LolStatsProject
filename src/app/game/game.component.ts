import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../types/Match';
import { MatchHistoryDataService } from '../services/match-history-data.service';

@Component({
	selector: 'app-game',
	standalone: true,
	imports: [],
	templateUrl: './game.component.html',
	styleUrl: './game.component.css',
})
export class GameComponent implements OnInit {
	@Input({ required: true }) match: Match | null = null;

	playerPUUID: string = this.matchHistoryService.playerPUUID;
	playerIndex: number = -1;

	constructor(public matchHistoryService: MatchHistoryDataService) {}

	ngOnInit(): void {
		this.getPlayerIndex();
	}

	getGameDuration() {
		if (this.match) {
			const gameDuration = this.match.info.gameDuration;
			const hours = Math.floor(gameDuration / 3600);
			let rest = gameDuration % 3600;
			const minutes = Math.floor(rest / 60);
			const seconds = rest % 60;

			return `${hours ? hours + 'g' : ''} ${minutes}m ${seconds}s`;
		}

		return 'Brak informacji';
	}

	private getPlayerIndex() {
		if (this.match) {
			this.playerIndex = this.match.metadata.participants.findIndex(
				puuid => puuid === this.playerPUUID
			);
		}
	}
}
