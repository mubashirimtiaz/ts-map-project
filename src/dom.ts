import { addScript } from './query';

const gMapSDK: string = 'https://maps.googleapis.com/maps/api/js';

addScript('external', `${gMapSDK}?key=${process.env.GOOGLE_MAP_API}`);
