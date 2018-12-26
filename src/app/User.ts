export class User {

  userName: string;
  userAge: number;
  userEmail: string;
  userSkill: string;

  constructor(userName: string, userAge: number, userEmail: string, userSkill: string) {
    this.userName = userName;
    this.userAge = userAge;
    this.userEmail = userEmail;
    this.userSkill = userSkill;
  }

}
