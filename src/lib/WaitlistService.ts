import type { Rider, WaitlistEntry } from './model';
import RideService from './RideService';
import { isKidRide } from './validation';

export default class WaitlistService {
	private static _waitlist: WaitlistEntry[] = [];

	public static get(searchString?: string): WaitlistEntry[] {
		return searchString
			? this._waitlist.filter((entry) =>
					entry.riders.some(
						(rider) =>
							rider.firstName.includes(searchString) ||
							rider.lastName.includes(searchString) ||
							(rider.nickName && rider.nickName.includes(searchString))
					)
				)
			: this._waitlist;
	}

	public static add(riders: Rider[]): WaitlistEntry {
		const entry: WaitlistEntry = {
			id: crypto.randomUUID(),
			createdAt: new Date(),
			riders: riders,
			rideCountScore: this.findRideCountScore(riders),
			expectedWaitMinutes: 0
		};
		this._waitlist.push(entry);
		this.sortWaitlist();
		entry.expectedWaitMinutes = this.getExpectedWaitTime(entry.id)!;
		return entry;
	}

	private static findRideCountScore(riders: Rider[]): number {
		const targetRiders = isKidRide(riders) ? riders.filter((r) => !r.isAdult) : riders;
		return targetRiders.reduce((acc, rider) => acc + rider.rideCount, 0) / riders.length;
	}

	public static remove(entryId: string): void {
		this._waitlist = this._waitlist.filter((entry) => entry.id !== entryId);
	}

	public static removeByRider(riderId: string): void {
		this._waitlist = this._waitlist.filter(
			(entry) => !entry.riders.some((rider) => rider.id !== riderId)
		);
	}

	public static update(entryId: string, riders: Rider[]): WaitlistEntry | undefined {
		const entry = this._waitlist.find((entry) => entry.id === entryId);
		if (entry) {
			entry.riders = riders;
			return entry;
		}
	}

	public static sortWaitlist(): void {
		this._waitlist.sort((a, b) => {
			return a.rideCountScore === b.rideCountScore
				? a.createdAt.getTime() - b.createdAt.getTime()
				: a.rideCountScore - b.rideCountScore;
		});
	}

	public static getExpectedWaitTime(entryId: string): number | undefined {
		const duration = RideService.averageDuration();
		const index = this._waitlist.findIndex((entry) => entry.id === entryId);
		return index !== -1 ? duration * index - RideService.highestDuration() : undefined;
	}

	public static updateAllExpectedWaitTimes(): void {
		const averageDuration = RideService.averageDuration();
		for (let i = 0; i < this._waitlist.length; i++) {
			this._waitlist[i].expectedWaitMinutes = averageDuration * i;
		}
	}
}
