import { MatchHistoryDataService } from './match-history-data.service';
import { ProfileDataService } from './profile-data.service';
import { TestBed } from '@angular/core/testing';
import { mockupData } from '../tests/matches-data-mockup';
import { champTestResult } from '../tests/result-champ-mockup';
import { MostPlayedChamp } from '../types/MostPlayedChamp';
import { Match } from '../types/Match';

describe('MatchHistoryDataService', () => {
	let service: MatchHistoryDataService;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			providers: [MatchHistoryDataService, ProfileDataService],
		}).compileComponents();
	});

	beforeEach(() => {
		service = new MatchHistoryDataService(new ProfileDataService());
		service.playerPUUID =
			'UXaUpPV_cORabUPeE9qK9sMhIGPAuVD9FxtDVxxs4sSCd7BuR_pHI1UCey-Vp95N09_FqjveUCUTQg';
	});

	it('service should create', () => {
		expect(service).toBeTruthy();
	});

	it('should return an MostPlayedChamp object', () => {
		const mockData: Match[] = mockupData;
		const expectedObject: MostPlayedChamp = champTestResult;

		expect(service.getMostPlayedChamp(mockData)).toEqual(expectedObject);
	});
});
