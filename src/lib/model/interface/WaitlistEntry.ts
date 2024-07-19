import type { Rider } from '.';

export interface WaitlistEntry {
	id: string;
	createdAt: Date;
	rideCountScore: number;
	expectedWaitMinutes: number;
	riders: Rider[];
}
