import { millisecondsInMinute } from 'date-fns/constants';
import type { Ride, Rider } from './model';

export default class RideService {
	private static _currentRides: Ride[] = [];
	private static _completedRides: Ride[] = [];

	public static getCurrent(): Ride[] {
		return RideService._currentRides;
	}

	public static get(rideId?: string): Ride[] {
		return rideId
			? RideService._completedRides.filter((ride) => ride.id === rideId)
			: RideService._completedRides;
	}

	public static getByRider(riderId: string): Ride[] {
		return RideService._completedRides.filter((ride) =>
			ride.riders.some((rider) => rider.id === riderId)
		);
	}

	public static complete(rideId: string): Ride | undefined {
		const completed = RideService._currentRides.find((ride) => ride.id === rideId);
		if (completed) {
			completed.endTime = new Date();
			completed.duration = Math.round(
				(completed.endTime.getTime() - completed.startTime.getTime()) / millisecondsInMinute
			);
			completed.isComplete = true;
			RideService._currentRides = RideService._currentRides.filter((ride) => ride.id !== rideId);
			RideService._completedRides.push(completed);
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
		RideService._currentRides.push(ride);
		return ride;
	}

	public static remove(rideId: string): void {
		RideService._completedRides = RideService._completedRides.filter((ride) => ride.id !== rideId);
	}

	public static averageDuration(): number {
		const totalDuration = RideService._completedRides.reduce(
			(acc, ride) => acc + ride.duration!,
			0
		);
		return totalDuration / RideService._completedRides.length;
	}
}
