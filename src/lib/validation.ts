import { Family, Sex } from './model';
import type { Rider } from './model';

export function isValidRide(riders: Rider[]): boolean {
	return riders.some((r) => r.family === Family.Thompson && r.age < 18 && r.sex === Sex.Female)
		? riders.some(canChaperoneThompsonGirls)
		: riders.some((r) => r.age >= 18);
}

export function canChaperoneThompsonGirls(rider: Rider): boolean {
	return rider.age >= 18 && rider.sex === Sex.Female;
}

export function isKidRide(riders: Rider[]): boolean {
	return riders.some((r) => r.age < 18);
}
