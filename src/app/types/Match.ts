import { Metadata } from './Metadata';

export interface Match {
	metadata: Metadata;
	info: Info;
}

interface Info {
	endOfGameResult?: string,
	gameCreation: number;
	gameDuration: number;
	gameEndTimestamp: number;
	gameId: number;
	gameMode: string;
	gameName: string;
	gameStartTimestamp: number;
	gameType: string;
	gameVersion: string;
	mapId: number;
	participants: Array<ParticipantStats>;
	platformId: string;
	queueId: number;
	teams: Array<Team>;
	tournamentCode: string;
}

interface ParticipantStats {
	assists: number;
	allInPings: number;
	assistMePings: number;
	baronKills: number;
	basicPings: number;
	bountyLevel: number;
	champExperience: number;
	champLevel: number;
	championId: number;
	championName: string;
	championTransform: number;
	consumablesPurchased: number;
	commandPings: number;
	needVisionPings: number;
	onMyWayPings: number;
	placement: number;
	playerAugment1: number;
	playerAugment2: number;
	playerAugment3: number;
	playerAugment4: number;
	playerSubteamId: number;
	pushPings: number;
	subteamPlacement: number;
	totalAllyJungleMinionsKilled: number;
	totalEnemyJungleMinionsKilled: number;
	visionClearedPings: number;
	riotIdGameName: string;
	dangerPings: number;
	eligibleForProgression: boolean;
	enemyMissingPings: number;
	enemyVisionPings: number;
	getBackPings: number;
	holdPings: number;
	damageDealtToBuildings: number;
	damageDealtToObjectives: number;
	damageDealtToTurrets: number;
	damageSelfMitigated: number;
	deaths: number;
	detectorWardsPlaced: number;
	doubleKills: number;
	dragonKills: number;
	firstBloodAssist: boolean;
	firstBloodKill: boolean;
	firstTowerAssist: boolean;
	firstTowerKill: boolean;
	gameEndedInEarlySurrender: boolean;
	gameEndedInSurrender: boolean;
	goldEarned: number;
	goldSpent: number;
	individualPosition: string;
	inhibitorKills: number;
	inhibitorTakedowns: number;
	inhibitorsLost: number;
	item0: number;
	item1: number;
	item2: number;
	item3: number;
	item4: number;
	item5: number;
	item6: number;
	itemsPurchased: number;
	killingSprees: number;
	kills: number;
	lane: string;
	largestCriticalStrike: number;
	largestKillingSpree: number;
	largestMultiKill: number;
	longestTimeSpentLiving: number;
	magicDamageDealt: number;
	magicDamageDealtToChampions: number;
	magicDamageTaken: number;
	neutralMinionsKilled: number;
	nexusKills: number;
	nexusTakedowns: number;
	nexusLost: number;
	objectivesStolen: number;
	objectivesStolenAssists: number;
	participantId: number;
	pentaKills: number;
	perks: Perks;
	physicalDamageDealt: number;
	physicalDamageDealtToChampions: number;
	physicalDamageTaken: number;
	profileIcon: number;
	puuid: string;
	quadraKills: number;
	riotIdTagline: string;
	role: string;
	sightWardsBoughtInGame: number;
	spell1Casts: number;
	spell2Casts: number;
	spell3Casts: number;
	spell4Casts: number;
	summoner1Casts: number;
	summoner1Id: number;
	summoner2Casts: number;
	summoner2Id: number;
	summonerId: string;
	summonerLevel: number;
	summonerName: string;
	teamId: 100 | 200;
	teamPosition: string;
	timeCCingOthers: number;
	timePlayed: number;
	teamEarlySurrendered?: boolean,
	challenges?: {
		"12AssistStreakCount"?: number,
		"earliestBaron"?: number,
		"firstTurretKilledTime"?: number,
		"abilityUses"?: number,
		"fasterSupportQuestCompletion"?: number,
		"acesBefore15Minutes"?: number,
		"alliedJungleMonsterKills"?: number,
		"baronTakedowns"?: number,
		"blastConeOppositeOpponentCount"?: number,
		"shortestTimeToAceFromFirstTakedown"?: number,
		"bountyGold"?: number,
		"buffsStolen"?: number,
		"completeSupportQuestInTime"?: number,
		"controlWardTimeCoverageInRiverOrEnemyHalf"?: number,
		"controlWardsPlaced"?: number,
		"damagePerMinute"?: number,
		"damageTakenOnTeamPercentage"?: number,
		"dancedWithRiftHerald"?: number,
		"deathsByEnemyChamps"?: number,
		"dodgeSkillShotsSmallWindow"?: number,
		"doubleAces"?: number,
		"dragonTakedowns"?: number,
		"earlyLaningPhaseGoldExpAdvantage"?: number,
		"effectiveHealAndShielding"?: number,
		"elderDragonKillsWithOpposingSoul"?: number,
		"elderDragonMultikills"?: number,
		"enemyChampionImmobilizations"?: number,
		"enemyJungleMonsterKills"?: number,
		"epicMonsterKillsNearEnemyJungler"?: number,
		"epicMonsterKillsWithin30SecondsOfSpawn"?: number,
		"epicMonsterSteals"?: number,
		"epicMonsterStolenWithoutSmite"?: number,
		"firstTurretKilled"?: number,
		"flawlessAces"?: number,
		"fullTeamTakedown"?: number,
		"gameLength"?: number,
		"getTakedownsInAllLanesEarlyJungleAsLaner"?: number,
		"goldPerMinute"?: number,
		"hadOpenNexus"?: number,
		"immobilizeAndKillWithAlly"?: number,
		"initialBuffCount"?: number,
		"initialCrabCount"?: number,
		"jungleCsBefore10Minutes"?: number,
		"junglerTakedownsNearDamagedEpicMonster"?: number,
		"kTurretsDestroyedBeforePlatesFall"?: number,
		"kda"?: number,
		"killAfterHiddenWithAlly"?: number,
		"killParticipation"?: number,
		"killedChampTookFullTeamDamageSurvived"?: number,
		"killingSprees"?: number,
		"killsNearEnemyTurret"?: number,
		"killsOnOtherLanesEarlyJungleAsLaner"?: number,
		"killsOnRecentlyHealedByAramPack"?: number,
		"killsUnderOwnTurret"?: number,
		"killsWithHelpFromEpicMonster"?: number,
		"knockEnemyIntoTeamAndKill"?: number,
		"landSkillShotsEarlyGame"?: number,
		"laneMinionsFirst10Minutes"?: number,
		"laningPhaseGoldExpAdvantage"?: number,
		"legendaryCount"?: number,
		"legendaryItemUsed"?: number[],
		"lostAnInhibitor"?: number,
		"maxCsAdvantageOnLaneOpponent"?: number,
		"maxKillDeficit"?: number,
		"maxLevelLeadLaneOpponent"?: number,
		"mejaisFullStackInTime"?: number,
		"moreEnemyJungleThanOpponent"?: number,
		"multiKillOneSpell"?: number,
		"multiTurretRiftHeraldCount"?: number,
		"multikills"?: number,
		"multikillsAfterAggressiveFlash"?: number,
		"outerTurretExecutesBefore10Minutes"?: number,
		"outnumberedKills"?: number,
		"outnumberedNexusKill"?: number,
		"perfectDragonSoulsTaken"?: number,
		"perfectGame"?: number,
		"pickKillWithAlly"?: number,
		"playedChampSelectPosition"?: number,
		"poroExplosions"?: number,
		"quickCleanse"?: number,
		"quickFirstTurret"?:number,
		"quickSoloKills"?: number,
		"riftHeraldTakedowns"?: number,
		"saveAllyFromDeath"?: number,
		"scuttleCrabKills"?: number,
		"skillshotsDodged"?: number,
		"skillshotsHit"?: number,
		"snowballsHit"?: number,
		"soloBaronKills"?: number,
		"soloKills"?: number,
		"soloTurretsLategame"?: number,
		"stealthWardsPlaced"?:number,
		"survivedSingleDigitHpCount"?: number,
		"survivedThreeImmobilizesInFight"?: number,
		"takedownOnFirstTurret"?: number,
		"takedowns"?: number,
		"takedownsAfterGainingLevelAdvantage"?: number,
		"takedownsBeforeJungleMinionSpawn"?: number,
		"takedownsFirstXMinutes"?: number,
		"takedownsInAlcove"?: number,
		"takedownsInEnemyFountain"?: number,
		"teamBaronKills"?: number,
		"teamDamagePercentage"?: number,
		"teamElderDragonKills"?: number,
		"teamRiftHeraldKills"?: number,
		"tookLargeDamageSurvived"?: number,
		"turretPlatesTaken"?: number,
		"turretTakedowns"?: number,
		"turretsTakenWithRiftHerald"?: number,
		"twentyMinionsIn3SecondsCount"?: number,
		"twoWardsOneSweeperCount"?: number,
		"unseenRecalls"?: number,
		"visionScoreAdvantageLaneOpponent"?: number,
		"visionScorePerMinute"?: number,
		"wardTakedowns"?: number,
		"wardTakedownsBefore20M"?: number,
		"wardsGuarded"?: number,
		"earliestDragonTakedown"?: number
		"junglerKillsEarlyJungle"?: number,
		"killsOnLanersEarlyJungleAsJungler"?: number,
		"highestWardKills"?: number,
		"fastestLegendary"?: number,
		"highestCrowdControlScore"?: number,
		"baronBuffGoldAdvantageOverThreshold"?: number,
		"highestChampionDamage"?: number,
	},
	"missions": {
		"PlayerScore0": number,
		"PlayerScore1": number,
		"PlayerScore10": number,
		"PlayerScore11": number,
		"PlayerScore2": number,
		"PlayerScore3": number,
		"PlayerScore4": number,
		"PlayerScore5": number,
		"PlayerScore6": number,
		"PlayerScore7": number,
		"PlayerScore8": number,
		"PlayerScore9": number
	}
	totalDamageDealt: number;
	totalDamageDealtToChampions: number;
	totalDamageShieldedOnTeammates: number;
	totalDamageTaken: number;
	totalHeal: number;
	totalHealsOnTeammates: number;
	totalMinionsKilled: number;
	totalTimeCCDealt: number;
	totalTimeSpentDead: number;
	totalUnitsHealed: number;
	tripleKills: number;
	trueDamageDealt: number;
	trueDamageDealtToChampions: number;
	trueDamageTaken: number;
	turretKills: number;
	turretTakedowns: number;
	turretsLost: number;
	unrealKills: number;
	visionScore: number;
	visionWardsBoughtInGame: number;
	wardsKilled: number;
	wardsPlaced: number;
	win: boolean;
}

interface Perks {
	statPerks: {
		defense: number;
		flex: number;
		offense: number;
	};
	styles: Array<PerkStyle>;
}

interface PerkStyle {
	description: 'primaryStyle' | 'subStyle';
	style: number;
	selections: Array<PerkStyleSelection>;
}

interface PerkStyleSelection {
	perk: number;
	var1: number;
	var2: number;
	var3: number;
}

interface Team {
	bans: Array<Ban>;
	objectives: {
		baron: Objective;
		champion: Objective;
		dragon: Objective;
		inhibitor: Objective;
		riftHerald: Objective;
		tower: Objective;
		horde: Objective;
	};
	teamId: 100 | 200;
	win: boolean;
}

interface Ban {
	championId: number;
	pickTurn: number;
}

interface Objective {
	first: boolean;
	kills: number;
}
