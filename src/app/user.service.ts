import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public username;
  isUserLoggedIn: boolean = false;
  uri = 'https://photowebbackend.herokuapp.com';
  constructor(private http: HttpClient, private router:Router) {
  }

  performLogin(data) {
    return this.http.post(`${this.uri}/login`, data);
  }

  setUserLoggedIn(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.email);
    this.router.navigate(['/'])
  }

  getUserLoggedIn() {
    var token = localStorage.getItem('token');
    var email = localStorage.getItem('user');
    if (email != null && token != null) {
      return true;
    } else {
      return false;
    }
  }
}
