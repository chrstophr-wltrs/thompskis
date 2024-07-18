import type { Rider } from '.';

export interface WaitlistEntry extends CreateWaitlistEntryRequest {
	id: string;
	createdAt: Date;
	rideCountScore: number;
	rideMinutesScore: number;
}

export interface CreateWaitlistEntryRequest {
	riders: Rider[];
}
