import type { Rider, WaitlistEntry } from './model';
import { isKidRide } from './validation';

export default class WaitlistService {
	private static _waitlist: WaitlistEntry[] = [];

	public static get(searchString?: string): WaitlistEntry[] {
		return searchString
			? WaitlistService._waitlist.filter((entry) =>
					entry.riders.some(
						(rider) =>
							rider.firstName.includes(searchString) ||
							rider.lastName.includes(searchString) ||
							(rider.nickName && rider.nickName.includes(searchString))
					)
				)
			: WaitlistService._waitlist;
	}

	public static add(riders: Rider[]): WaitlistEntry {
		const entry: WaitlistEntry = {
			id: crypto.randomUUID(),
			createdAt: new Date(),
			riders: riders,
			rideCountScore: WaitlistService.findRideCountScore(riders),
			expectedWaitMinutes: 0
		};
		WaitlistService._waitlist.push(entry);
		return entry;
	}

	private static findRideCountScore(riders: Rider[]): number {
		const targetRiders = isKidRide(riders) ? riders.filter((r) => !r.isAdult) : riders;
		return targetRiders.reduce((acc, rider) => acc + rider.rideCount, 0) / riders.length;
	}

	public static remove(entryId: string): void {
		WaitlistService._waitlist = WaitlistService._waitlist.filter((entry) => entry.id !== entryId);
	}

	public static removeByRider(riderId: string): void {
		WaitlistService._waitlist = WaitlistService._waitlist.filter(
			(entry) => !entry.riders.some((rider) => rider.id !== riderId)
		);
	}

	public static update(entryId: string, riders: Rider[]): WaitlistEntry | undefined {
		const entry = WaitlistService._waitlist.find((entry) => entry.id === entryId);
		if (entry) {
			entry.riders = riders;
			return entry;
		}
	}
}
