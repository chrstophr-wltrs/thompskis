import type { Rider } from './Rider';

export interface Ride {
	id: string;
	startTime: Date;
	endTime: Date | null;
	isComplete: boolean;
	riders: Rider[];
}
