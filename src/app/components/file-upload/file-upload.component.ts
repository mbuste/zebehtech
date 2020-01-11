import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service';
import { HttpClient } from '@angular/common/http';
import {ViewChild} from '@angular/core';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {

  title = 'fileupload';

  constructor(private httpService: HttpClient) { }
  myFiles: string[] = [];
  category: string = '';
  sMsg: string = '';
  ngOnInit() {
  }
  getFileDetails(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }

  handleSelectChange(e) {
    this.category = e.target.value;
  }

  uploadFiles() {
    const frmData = new FormData();
    frmData.append('category', this.category);
    for (var i = 0; i < this.myFiles.length; i++) {
      frmData.append("image", this.myFiles[i]);
    }
    this.httpService.post('http://localhost:9000/upload-images', frmData).subscribe(
      data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.  
        this.sMsg = data as string;
        console.log(this.sMsg);
      }
    );
    this.myFiles =[];
  }

}
