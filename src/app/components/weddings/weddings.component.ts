import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service'

export interface Photo {
  id: String;
  url: String;
}


@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss']
})
export class WeddingsComponent implements OnInit {

  constructor(private photoService: PhotosService) { }
  photos: Photo[];

  ngOnInit() {
    this.fetchWeddingPhotos();
  }

  fetchWeddingPhotos() {
    this.photoService.getWeddingPhotos()
      .subscribe((data: Photo[]) => {
        this.photos = data;
      })

  }
}
