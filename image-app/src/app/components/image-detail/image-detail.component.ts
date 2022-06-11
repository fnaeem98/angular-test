import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {
  imageItem: any;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.imageItem = this.location.getState();
  }

  goBack(): void {
    this.location.back();
  }  

}
