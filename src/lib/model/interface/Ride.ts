import type { Rider } from '.';

export interface Ride {
	id: string;
	startTime: Date;
	endTime?: Date;
	duration?: number;
	isComplete: boolean;
	riders: Rider[];
}
