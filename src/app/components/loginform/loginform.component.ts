import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  category: String = '';

  constructor() {

  }
  handleSelectChange(e) {
    this.category = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.checkInputs();
  }

  checkInputs(){
    if(this.category.trim()===''){
      this.setErrorFor(<HTMLElement>document.getElementById('email'), 'Email cannot be blank');
    }else{
      this.setSuccessFor(document.getElementById('email'));
    }
  }

  setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText =message;
    formControl.className="inputBox error";
  }

  setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className='inputBox success'; 
  }
  ngOnInit() {
  }





}
