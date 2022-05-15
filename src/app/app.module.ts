import { GalleryComponent } from './pages/gallery/gallery.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryDetailComponent } from './pages/gallery-detail/gallery-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    GalleryDetailComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
