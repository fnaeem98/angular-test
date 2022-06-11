import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ImageItem } from '../../model/image-item';
import { ImageDataService } from '../../services/image-data/image-data-service';


@Component({
  selector: 'app-image-dashboard',
  templateUrl: './image-dashboard.component.html',
  styleUrls: ['./image-dashboard.component.scss'],
  providers: [ImageDataService],
})
export class ImageDashboardComponent implements OnInit {

  constructor(private imageDataService: ImageDataService) { }
  imageList$: Observable<ImageItem[]> = of([]);
  pageNo: number = 1;
  private itemLimit: number = 5;

  ngOnInit(): void {
    this.imageList$ = this.imageDataService.getImages(this.pageNo, this.itemLimit);
  }

  nextPage(): void {
    this.pageNo += 1;
    this.imageList$ = this.imageDataService.getImages(this.pageNo, this.itemLimit);
  }
  
  previousPage(): void {
    this.pageNo -= 1;
    this.imageList$ = this.imageDataService.getImages(this.pageNo, this.itemLimit);
  }


}
