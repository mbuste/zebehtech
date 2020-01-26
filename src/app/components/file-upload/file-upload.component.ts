import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {

  title = 'fileupload';

  constructor(private httpService: HttpClient) { }
  myFiles: string[] = [];
  category: string = 'birthdays';
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
    var data = [{
      "category": this.category, "image": this.myFiles[0]
    }]
    for (let i = 1; i < this.myFiles.length; i++) {
      var obj = {
        "category": this.category, "image": this.myFiles[i]
      }
      data.push(obj);
    }
    this.httpService.post('https://photowebbackend/upload-images', data).subscribe(
      data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.  
        this.sMsg = data as string;
        console.log(this.sMsg);
      }
    );
    this.myFiles = [];
  }

}
