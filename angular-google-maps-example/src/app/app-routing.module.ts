import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'map'},
  { path: 'map', component: WorldmapComponent },
  { path: 'addPicture', component: AddPictureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
