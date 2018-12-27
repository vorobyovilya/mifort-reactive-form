import {Component} from '@angular/core';
import {User} from "./User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Form';
  newUser: User;
  jsonUser;
  saveUser(user): void {
    this.newUser = this.mapFormResultToUser(user);
    //console.log(this.newUser);
    let jsonResult = JSON.stringify(this.newUser);
    this.jsonUser = jsonResult;
    //console.log('JSON:' + jsonResult);
  }

  mapFormResultToUser(result): User {
    const user: User = new User(result.userName, result.userAge, result.userEmail, result.userSkill)
    console.log(user);
    return user;
  }

}
