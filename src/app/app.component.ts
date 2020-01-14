import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private users: UserService) { }

  checkState() {
    if (this.users.getUserLoggedIn()) {
      return false;
    } else {
      return true;
    }
  }

  checkStateUpload() {
    if (this.users.getUserLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}
