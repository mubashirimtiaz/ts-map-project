import faker from 'faker';
import { Specs } from './interfaces/index';

export class Company implements Specs {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<div>
      <h2>The company name is ${this.name}</h2>
      <p>${this.catchPhrase}</p>
    </div>`;
  }
}
