import type { Duration } from 'date-fns';

export interface TimeSpan {
	start: Date;
	end: Date;
	duration: Duration;
}
