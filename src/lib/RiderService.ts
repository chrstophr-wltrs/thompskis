import type { CreateRiderRequest, Rider } from './model';
import { baseRiders } from '../data';

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
		// Sort riders by family, then by first name
		this._riders.sort((a, b) => {
			return a.family === b.family
				?	a.firstName.localeCompare(b.firstName)
				: a.family.localeCompare(b.family);
		});
		return newRider;
	}

	public static loadRiders(): void {
		for (const info of baseRiders) {
			this.add(info);
		}
	}
}
