import { Component, OnInit } from '@angular/core';
import { WorldmapComponent } from '../worldmap/worldmap.component';
import {MarkerServiceService} from '../marker-service.service';


@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.css']
})
export class AddPictureComponent implements OnInit {
  latitude:number =0;
  longitude:number =0;
  constructor(public markers: MarkerServiceService) { }

  ngOnInit(): void {

  }

}
