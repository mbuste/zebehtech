import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service'

export interface Photo {
  id: String;
  url: String;
}

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {

  constructor(private photosService: PhotosService) { }
  photos: Photo[];
  ngOnInit() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    this.photosService.getPartiesPhotos()
      .subscribe((data: Photo[]) => {
        this.photos = data;
      })
  }

}
