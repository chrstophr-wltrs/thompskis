import type { CreateRiderRequest, Rider } from './model';

export default class RiderService {
	private static _riders: Rider[] = [];

	public static get(searchString?: string): Rider[] {
		return searchString
			? RiderService._riders.filter(
					(r) => r.firstName.includes(searchString) || r.lastName.includes(searchString)
				)
			: RiderService._riders;
	}

	public static getById(id: string): Rider | undefined {
		return RiderService._riders.find((r) => r.id === id);
	}

	public static add(rider: CreateRiderRequest): Rider {
		const newRider: Rider = {
			...rider,
			id: crypto.randomUUID(),
			rideCount: 0
		};
		RiderService._riders.push(newRider);
		return newRider;
	}
}
