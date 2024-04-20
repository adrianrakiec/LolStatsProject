import { Component, Input } from '@angular/core';
import { League } from '../types/League';

@Component({
	selector: 'app-rang',
	standalone: true,
	imports: [],
	templateUrl: './rang.component.html',
	styleUrl: './rang.component.css',
})
export class RangComponent {
	@Input() leagueInfo: League[] | null = [];
	@Input() type: 'SOLO' | 'FLEX' = 'SOLO';

	selectRankIcon(rank: string = '') {
		switch (rank) {
			case 'IRON':
				return '../../assets/Iron.png';

			case 'BRONZE':
				return '../../assets/Bronze.png';

			case 'SILVER':
				return '../../assets/Silver.png';

			case 'GOLD':
				return '../../assets/Gold.png';

			case 'PLATINUM':
				return '../../assets/Platinum.png';

			case 'EMERALD':
				return '../../assets/Emerald.png';

			case 'DIAMOND':
				return '../../assets/Diamond.png';

			case 'MASTER':
				return '../../assets/Master.png';

			case 'GRANDMASTER':
				return '../../assets/Grandmaster.png';

			case 'CHALLENGER':
				return '../../assets/Challenger.png';

			default:
				return '';
		}
	}
}
