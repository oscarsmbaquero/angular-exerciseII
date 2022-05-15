import { gallery } from './../gallery/gallery-list.config';
import { IGallery } from './../gallery/models/gallery-models';
//import { gallery } from '../gallery/gallery-list.config';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {

  public gallery: IGallery[] = gallery as IGallery[];
  public currentPicture?: IGallery;
  
  
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>{
       const galleryId = params['id'];
      
       
       this.currentPicture = this.gallery.find(gallery => gallery.id === galleryId);
       console.log(this.currentPicture);

    }
    )
    this.activatedRoute.url.subscribe((params) =>{// me traigo la url 
      const url = params[0];
      
      
   }
   )
  }
  
}
