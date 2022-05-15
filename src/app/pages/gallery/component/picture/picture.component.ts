import { IGallery } from './../../models/gallery-models';
import { gallery } from './../../gallery-list.config';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() public picture?: IGallery

  constructor() { }

  ngOnInit(): void {
  }

}
