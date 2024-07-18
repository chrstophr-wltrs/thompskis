import type { Duration } from 'date-fns';
import type { Rider } from '.';

export interface Ride {
	id: string;
	startTime: Date;
	endTime?: Date;
	duration?: Duration;
	isComplete: boolean;
	riders: Rider[];
}
