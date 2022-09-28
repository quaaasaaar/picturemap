import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarkerServiceService {
  datasource = [
    { latitude: 49.95121990866204, longitude: 18.468749999999998},
    { latitude: 59.88893689676585, longitude: -109.3359375},
    { latitude: -6.64607562172573, longitude: -55.54687499999999}
  ];
  markerSettings: any;
  @Output() change = new EventEmitter<any>();

  constructor() {
    this.updateMarkerSettings();
   }

  addMarker(latitude:number, longitude:number){
    console.log(this.datasource);
    this.datasource.push({latitude: latitude, longitude: longitude});
    this.updateMarkerSettings();
  }
  updateMarkerSettings(){
    this.markerSettings = [{
      visible: true,
      height: 20,
      width: 20,
      selectionSettings: {
        enable: true,
        fill: 'blue',
        border: { color: 'white', width: 2}
    },
      dataSource: this.datasource,
      animationDuration: 0,
      }]
    console.log(this.markerSettings);
  }

}
