import type { Family, Sex, TimeSpan } from '..';

/* Defines someone who could ride on a Jetski,
 * including their name, family, sex, age,
 * the amount time they've already ridden,
 * and the time when they'd be available */
export interface Rider extends CreateRiderRequest {
	id: string;
	nickName?: string;
	rideMinutes: number;
	rideCount: number;
}

export interface CreateRiderRequest {
	firstName: string;
	lastName: string;
	family: Family;
	sex: Sex;
	age: number;
	availableTime?: TimeSpan;
}
