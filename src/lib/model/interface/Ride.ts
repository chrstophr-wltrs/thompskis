import type { Rider } from './Rider';

export interface Ride {
	startTime: Date;
	endTime: Date | null;
	isComplete: boolean;
	riders: Rider[];
}
