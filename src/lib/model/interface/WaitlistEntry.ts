import type { Rider } from '.';

export interface WaitlistEntry {
	id: string;
	createdAt: Date;
	rideCountScore: number;
	rideMinutesScore: number;
	expectedWaitMinutes: number;
	riders: Rider[];
}
