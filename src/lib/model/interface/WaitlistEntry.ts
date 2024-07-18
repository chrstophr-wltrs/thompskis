import type { Rider } from '.';

export interface WaitlistEntry {
	id: string;
	riders: Rider[];
	createdAt: Date;
	rideCountScore: number;
	rideMinutesScore: number;
}
