import { millisecondsInMinute } from 'date-fns/constants';
import type { Ride } from './model';

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

	public static complete(index: number): Ride | undefined {
		const completed = RideService._currentRides[index];
		if (completed) {
			completed.endTime = new Date();
			completed.duration = Math.round(
				(completed.endTime.getTime() - completed.startTime.getTime()) / millisecondsInMinute
			);
			completed.isComplete = true;
			RideService._currentRides.splice(index, 1);
			RideService._completedRides.push(completed);
			return completed;
		}
	}
}
