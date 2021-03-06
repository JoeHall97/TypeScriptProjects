import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
	name: string;
	location: {
		lat: number;
		lng: number;
	}; //NOTE: location is initialised as null, so this.location.lat = ... won't work

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	markerContent(): string {
		return `User: ${this.name}`;
	}
}
