import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { gallery } from './gallery-list.config';
import { IGallery } from './models/gallery-models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public gallery: IGallery[] = gallery as IGallery[];
  

  constructor(
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    //console.log(this.galleries);

  }

}
