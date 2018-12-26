import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {group} from "@angular/animations";

export enum Skills {
  first = "Skill #1",
  second = "Skill #2",
  third = "Skill #3"
}

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  myForm: FormGroup;
  skills: string[] = [Skills.first, Skills.second, Skills.third];

  @Output() userRegistered: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.myForm = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z -\']{2,30}'),
        Validators.minLength(2), Validators.maxLength(30)]),
      userEmail: new FormControl("", [Validators.required, Validators.pattern('[A-Za-z0-9]+@+[a-z]+.+[a-z]{2}')]),
      userEmailConfirm: new FormControl("", [Validators.required]),
      userAge: new FormControl("", [Validators.required, Validators.min(18), Validators.max(65)]),
      userSkill: new FormControl("", [Validators.required])
    }, [this.emailsConfirm]);
  }

  ngOnInit() {
  }

  submit(): void {
    this.userRegistered.emit(this.myForm.value);
    //console.log(this.myForm.value);
  }

  emailsConfirm(control: FormGroup): { [s: string]: boolean } | null {
    if (control.controls.userEmailConfirm.touched && control.controls.userEmailConfirm.dirty &&
      (control.controls.userEmail.value != control.controls.userEmailConfirm.value))
      return {"emailsNotConfirmed": true};
    else
      return null;

  }

}
