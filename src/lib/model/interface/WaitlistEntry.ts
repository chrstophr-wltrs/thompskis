import type { Rider } from './Rider';

export interface WaitlistEntry {
	id: string;
	riders: Rider[];
	createdAt: Date;
	rideCountScore: number;
	rideMinutesScore: number;
}
