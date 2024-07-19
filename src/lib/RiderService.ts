import type { CreateRiderRequest, Rider } from './model';

export default class RiderService {
	private static _riders: Rider[] = [];

	public static get(searchString?: string): Rider[] {
		return searchString
			? this._riders.filter(
					(r) => r.firstName.includes(searchString) || r.lastName.includes(searchString)
				)
			: this._riders;
	}

	public static getById(id: string): Rider | undefined {
		return this._riders.find((r) => r.id === id);
	}

	public static add(rider: CreateRiderRequest): Rider {
		const newRider: Rider = {
			...rider,
			id: crypto.randomUUID(),
			rideCount: 0
		};
		this._riders.push(newRider);
		return newRider;
	}
}
