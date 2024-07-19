import { millisecondsInMinute } from 'date-fns/constants';
import type { Ride, Rider } from './model';
import { isKidRide } from './validation';

export default class RideService {
	private static _currentRides: Ride[] = [];
	private static _completedRides: Ride[] = [];

	public static getCurrent(): Ride[] {
		return this._currentRides;
	}

	public static get(rideId?: string): Ride[] {
		return rideId
			? this._completedRides.filter((ride) => ride.id === rideId)
			: this._completedRides;
	}

	public static getByRider(riderId: string): Ride[] {
		return this._completedRides.filter((ride) => ride.riders.some((rider) => rider.id === riderId));
	}

	public static complete(rideId: string): Ride | undefined {
		const completed = this._currentRides.find((ride) => ride.id === rideId);
		if (completed) {
			completed.endTime = new Date();
			completed.duration = Math.round(
				(completed.endTime.getTime() - completed.startTime.getTime()) / millisecondsInMinute
			);
			completed.isComplete = true;

			const targetRiders = isKidRide(completed.riders)
				? completed.riders.filter((r) => !r.isAdult)
				: completed.riders;
			for (const rider of targetRiders) {
				rider.rideCount++;
				if (completed.duration! > this.averageDuration() * 1.65) rider.rideCount++;
			}

			this._currentRides = this._currentRides.filter((ride) => ride.id !== rideId);
			this._completedRides.push(completed);
			return completed;
		}
	}

	public static add(riders: Rider[]): Ride {
		const ride: Ride = {
			id: crypto.randomUUID(),
			startTime: new Date(),
			isComplete: false,
			riders: riders
		};
		this._currentRides.push(ride);
		return ride;
	}

	public static remove(rideId: string): void {
		this._completedRides = this._completedRides.filter((ride) => ride.id !== rideId);
	}

	public static averageDuration(): number {
		const totalDuration = this._completedRides.reduce((acc, ride) => acc + ride.duration!, 0);
		return totalDuration / this._completedRides.length;
	}
}
