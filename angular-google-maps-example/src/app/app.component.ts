import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

declare var ol: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'picturemaps';
  latitude: number = 47.5204;
  longitude: number = -2.8567;
  lon: number = 0
  latt: number = 0
  map: any;
 ngOnInit() {
    this.lon = this.longitude;
    this.latt = this.latitude;
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 8
      })
    });
    this.addPoint(this.latitude, this.latitude);
  }
  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    //console.log(this.longitude);
    //console.log(this.latitude);
    this.addPoint(this.latitude, this.longitude);
    view.setZoom(8);
  }
  setLong(long:number){
    this.longitude = long;
  }
  setLat(lat:number){
    this.latitude = lat;
  }
  addPoint(lat: number, lng: number) {
    console.log("In addPoint()")

    var vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([lng, lat], 'EPSG:4326', 'EPSG:3857')),
        })]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: "fraction",
          anchorYUnits: "fraction"
        })
      })
    });
    this.map.addLayer(vectorLayer);
    }
}

