import type { Rider } from './model';

export default class RiderService {
	private static _riders: Rider[] = [];

	public getRiders(searchString?: string): Rider[] {
		return searchString
			? RiderService._riders.filter(
					(r) => r.firstName.includes(searchString) || r.lastName.includes(searchString)
				)
			: RiderService._riders;
	}

	public getRiderById(id: string): Rider | undefined {
		return RiderService._riders.find((r) => r.id === id);
	}
}
