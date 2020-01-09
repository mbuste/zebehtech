import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
uri='http://localhost:9000'
  // uri = 'https://photowebbackend.herokuapp.com';

  constructor(private http: HttpClient) { }

  addImages(myFiles) {
    const images = myFiles;
    return this.http.post(`${this.uri}/upload-images`, images);
  }

  getPhotos() {    return this.http.get(`${this.uri}/images`);  }

  getWeddingPhotos() {    return this.http.get(`${this.uri}/images/weddingphotos`);
  }

  getPotraitPhotos() {
    return this.http.get(`${this.uri}/images/potraitphotos`);
  }

  getLifestylePhotos() {
    return this.http.get(`${this.uri}/images/lifestylephotos`);
  }
  getPartiesPhotos() {
    return this.http.get(`${this.uri}/images/partiesphotos`);
  }
  getBirthdayPhotos() {
    return this.http.get(`${this.uri}/images/birthdayphotos`);
  }

  performLogin(data){
    return this.http.post(`${this.uri}/login`, data);
  }
}

