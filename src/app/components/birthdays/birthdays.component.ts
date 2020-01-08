import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service'

export interface Photo {
  id: String;
  url: String;
}

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.scss']
})
export class BirthdaysComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  photos: Photo[];
  ngOnInit() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    this.photosService.getBirthdayPhotos()
      .subscribe((data: Photo[]) => {
        this.photos = data;
      })
  }

}