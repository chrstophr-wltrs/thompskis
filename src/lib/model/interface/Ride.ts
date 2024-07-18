import type { Duration } from 'date-fns';
import type { Rider } from '.';

export interface Ride {
	id: string;
	startTime: Date;
	endTime: Date | null;
	duration: Duration | null;
	isComplete: boolean;
	riders: Rider[];
}
