import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Maps, Marker, Selection } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
import {MarkerServiceService} from '../marker-service.service';
Maps.Inject(Marker, Selection)

@Component({
  selector: 'app-root',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})
export class WorldmapComponent {
  shapeData: object = world_map;
  markerSettings: any;
  longitude: number = 0;
  latitude: number = 0;
  datasource: any = [];
  constructor(public markers: MarkerServiceService){
    this.markerSettings = markers.markerSettings;
  }

 ngOnInit() {
  this.markers.change.subscribe((markerSettings) => {
  this.markerSettings = markerSettings;
} )
  }

}
