import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public username;
  isUserLoggedIn: boolean = false;
  uri = 'https://photowebbackend.herokuapp.com';
  // uri = 'http://localhost:9000'
  constructor(private http: HttpClient) {
  }

  performLogin(data) {
    return this.http.post(`${this.uri}/login`, data);
  }

  setUserLoggedIn(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.email);
  }

  getUserLoggedIn() {
    var token = localStorage.getItem('token');
    var email = localStorage.getItem('user');
    if (email != null && token != null) {
      return true;
    }
    
    return false;
  }
}
