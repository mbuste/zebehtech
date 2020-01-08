import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service'

export interface Photo {
  id: String;
  uri: String;
}

@Component({
  selector: 'app-potraits',
  templateUrl: './potraits.component.html',
  styleUrls: ['./potraits.component.scss']
})
export class PotraitsComponent implements OnInit {

  constructor(private photosService: PhotosService) { }
  photos: Photo[];
  ngOnInit() {
    this.fetchPotraitphotos();
  }

  fetchPotraitphotos() {
    this.photosService.getPotraitPhotos()
      .subscribe((data: Photo[]) => {
        this.photos = data;
      })
  }

}
