import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../../photos.service'

export interface Photo{
 id: String;
 url: String;
}

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.scss']
})
export class LifestyleComponent implements OnInit {
photos: Photo[];
  constructor( private photosService: PhotosService) { }

  ngOnInit() {
    this.fetchLifestylePhotos();
  }

  fetchLifestylePhotos(){
    this.photosService.getLifestylePhotos()
    .subscribe((data: Photo[])=>{
      this.photos=data;
    })
  }

}
