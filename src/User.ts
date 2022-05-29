import faker from 'faker';
import { Specs } from './interfaces/index';

export class User implements Specs {
  name: string;
  location: { lat: number; lng: number };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
