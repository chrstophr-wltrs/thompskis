import { Family, Sex } from '../model';
import type { Ride, Rider } from '../model';

export function isValidRide(ride: Ride): boolean {
	return ride.riders.some((r) => r.family === Family.Thompson && r.age < 18 && r.sex === Sex.Female)
		? ride.riders.some(canChaperoneThompsonGirls)
		: ride.riders.some((r) => r.age >= 18);
}

export function canChaperoneThompsonGirls(rider: Rider): boolean {
	return rider.age >= 18 && rider.sex === Sex.Female;
}

export function isKidRide(ride: Ride): boolean {
	return ride.riders.some((r) => r.age < 18);
}
