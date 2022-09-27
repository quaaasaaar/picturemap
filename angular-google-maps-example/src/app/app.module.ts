import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { FormsModule } from '@angular/forms';
import { LegendService, MarkerService, MapsTooltipService, DataLabelService, BubbleService, NavigationLineService, SelectionService, AnnotationsService, ZoomService } from '@syncfusion/ej2-angular-maps';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MapsModule,
    FormsModule
  ],
  providers: [LegendService, MarkerService, MapsTooltipService, DataLabelService, BubbleService, NavigationLineService , SelectionService, AnnotationsService, ZoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
