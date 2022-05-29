import { Specs } from './interfaces';

export class Map {
  private googleMap: google.maps.Map;
  constructor(
    public element: HTMLElement,
    public options?: { zoom?: number; center?: { lat: number; lng: number } }
  ) {
    this.googleMap = new google.maps.Map(this.element, this.options);
  }

  addMarker(specs: Specs): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: specs.location,
      label: specs.name,
    });
    const infoWindow = new google.maps.InfoWindow({
      content: specs.markerContent() || '<h2>No content provided!</h2>',
    });
    marker.addListener('click', () => infoWindow.open(this.googleMap, marker));
  }
}
