import type { Duration } from 'date-fns';
import type { Family } from '../Family';
import type { Sex } from '../Sex';
import type { TimeSpan } from '../TimeSpan';

/* Defines someone who could ride on a Jetski,
 * including their name, family, sex, age,
 * the amount time they've already ridden,
 * and the time when they'd be available */
export interface Rider {
	id: string;
	name: string;
	family: Family;
	sex: Sex;
	age: number;
	timeRidden: Duration;
	availableTime: TimeSpan;
	rideCount: number;
}
