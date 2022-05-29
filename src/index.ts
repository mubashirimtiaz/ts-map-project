import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';
import { mapDiv } from './query';

console.log('Hi There! 👋🏻');
const user = new User();
const company = new Company();
const map = new Map(mapDiv, { zoom: 1, center: { lat: 0, lng: 0 } });
map.addMarker(company);
map.addMarker(user);
