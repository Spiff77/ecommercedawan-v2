import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   this.form = this.fb.group({
    name: [],
    password: [],
    passwordConfirm: []
  }, {
       validators: this.validatePassword
   });
  }


  validatePassword(controls: AbstractControl): ValidationErrors | null {
    const passField1 = controls.get('password');
    const passField2 = controls.get('passwordConfirm');

    if (passField2.errors && !passField2.errors.mustMatch){
      return;
    }

    if (passField1.value !== passField2.value) {
      passField2.setErrors({mustMatch: true});
      return ({mustMatch: true});
    } else {
      passField2.setErrors(null);
    }
    return null;
  }
}


