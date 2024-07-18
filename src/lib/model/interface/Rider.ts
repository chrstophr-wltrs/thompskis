import type { Duration } from 'date-fns';
import type { Family, Sex, TimeSpan } from '..';

/* Defines someone who could ride on a Jetski,
 * including their name, family, sex, age,
 * the amount time they've already ridden,
 * and the time when they'd be available */
export interface Rider {
	id: string;
	firstName: string;
	lastName: string;
	nickName: string | null;
	family: Family;
	sex: Sex;
	age: number;
	rideTime: Duration;
	rideCount: number;
	availableTime: TimeSpan | null;
}
