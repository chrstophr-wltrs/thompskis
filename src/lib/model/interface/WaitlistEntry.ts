import type { Rider } from './Rider';

export interface WaitlistEntry {
	riders: Rider[];
	createdAt: Date;
	id: string;
}
