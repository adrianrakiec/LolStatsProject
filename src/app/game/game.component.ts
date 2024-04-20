import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../types/Match';
import { MatchHistoryDataService } from '../services/match-history-data.service';
import { RiotApiService } from '../services/riot-api.service';

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
	championIcon: string = '';
	queueType: string | null = '';
	summonerSpells: string[] = [];

	constructor(
		public matchHistoryService: MatchHistoryDataService,
		private riotApiService: RiotApiService
	) {}

	ngOnInit(): void {
		this.getPlayerIndex();
		this.getQueueType();
		this.getSummonerSpells();
	}

	getGameDuration() {
		if (this.match) {
			const gameDuration = this.match.info.gameDuration;
			const hours = Math.floor(gameDuration / 3600);
			let rest = gameDuration % 3600;
			const minutes = Math.floor(rest / 60);
			const seconds = rest % 60;

			return `${hours ? hours + 'h' : ''} ${minutes}m ${seconds}s`;
		}

		return 'No information';
	}

	private getPlayerIndex() {
		if (this.match) {
			this.playerIndex = this.match.metadata.participants.findIndex(
				puuid => puuid === this.playerPUUID
			);

			this.championIcon = `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${
				this.match?.info.participants[this.playerIndex].championName
			}.png`;
		}
	}

	private getQueueType() {
		if (this.riotApiService.queueTypes && this.match?.info) {
			const queue = this.riotApiService.queueTypes.find(
				type => type.queueId === this.match?.info.queueId
			);
			if (queue?.description) this.queueType = queue?.description;
		}
	}

	private getSummonerSpells() {
		if (this.riotApiService.summonerSpells && this.match?.info) {
			const summonerSpell1 =
				this.match.info.participants[this.playerIndex].summoner1Id.toString();
			const summonerSpell2 =
				this.match.info.participants[this.playerIndex].summoner2Id.toString();

			this.summonerSpells.push(
				this.selectSpellById(summonerSpell1),
				this.selectSpellById(summonerSpell2)
			);
		}
	}

	private selectSpellById(id: string): string {
		const spell = this.riotApiService.summonerSpells.find(
			spell => spell.key === id
		);

		return spell ? spell.id : '';
	}
}
