import { PictureComponent } from './component/picture/picture.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';




@NgModule({
  declarations: [
    GalleryComponent,
    PictureComponent
  
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    RouterModule
  ]
})
export class GalleryModule { }
