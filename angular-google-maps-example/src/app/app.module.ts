import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


import { LegendService, MarkerService, MapsTooltipService, DataLabelService, BubbleService, NavigationLineService, SelectionService, AnnotationsService, ZoomService } from '@syncfusion/ej2-angular-maps';

import { AppComponent } from './app.component';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { WorldmapComponent } from './worldmap/worldmap.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPictureComponent,
    WorldmapComponent
  ],
  imports: [
    BrowserModule, MapsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [LegendService, MarkerService, MapsTooltipService, DataLabelService, BubbleService, NavigationLineService , SelectionService, AnnotationsService, ZoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
