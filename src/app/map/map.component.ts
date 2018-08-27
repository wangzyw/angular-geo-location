import {Component, ChangeDetectorRef} from '@angular/core';

@Component({
  template: `
    <p>
    <ngui-map [center]="center" >
    </ngui-map>
    Your Location: {{center | json}}
    </p>
  ` })
export class MapComponent {
  autocomplete: any;
  address: any = {};
  center: any;
  code: string;
  latitude: any;
  longitude: any;
  location: any;

  constructor(private ref: ChangeDetectorRef) {
  }

  initialized(autocomplete: any) {
    this.autocomplete = autocomplete;
  }
  placeChanged(place) {
    this.center = place.geometry.location;
    this.latitude = place.geometry.location.lat();
    this.longitude = place.geometry.location.lng();
  }
}
