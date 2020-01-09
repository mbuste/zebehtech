import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../photos.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  email: string = '';
  pass: string = '';

  constructor(private photosservice: PhotosService) { }

  handleEmailChange(e) { this.email = e.target.value; }

  handlePassChange(e) { this.pass = e.target.value; }

  handleSubmit(e) {
    e.preventDefault();
    this.checkInputs();
  }

  checkInputs() {
    if (this.validateEmail() && this.validatePass()) {
      this.performLogin();
    }
  }

  performLogin() {
    const formData = new FormData();
    formData.append("email", this.email);
    formData.append("password", this.pass);
    this.photosservice
    .performLogin(formData)
    .subscribe(data => console.log(data))
  }

  validatePass() {
    if (this.pass.trim().length < 8) {
      this.setErrorFor(<HTMLElement>document.getElementById('password'), "Password too short");
      return false;
    } else {
      this.setSuccessFor(<HTMLElement>document.getElementById('password'));
      return true;
    }
  }

  validateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.email.match(mailformat)) {
      this.setSuccessFor(document.getElementById('email'));
      return true;
    } else {
      this.setErrorFor(<HTMLElement>document.getElementById('email'), 'Invalid email address');
      return false;
    }
  }

  setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "inputBox error";
  }

  setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'inputBox success';
  }
  ngOnInit() {
  }
}
