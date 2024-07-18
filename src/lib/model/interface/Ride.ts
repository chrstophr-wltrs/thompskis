import type { Rider } from '.';

export interface Ride {
	id: string;
	startTime: Date;
	endTime: Date | null;
	isComplete: boolean;
	riders: Rider[];
}
