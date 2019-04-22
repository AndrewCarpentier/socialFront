import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hidePassword = true;
  registerForm;
  result;

  constructor(private service: DataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ])
    });
  }

  visibilityPassword = () => {
    this.hidePassword = !this.hidePassword;
  }

  submit = () => {
    if (this.registerForm.status === 'VALID') {
      this.service.register({
        email: this.registerForm.value.email,
        fullName: this.registerForm.value.fullName,
        username: this.registerForm.value.username,
        password: this.registerForm.value.password
      }).subscribe((newResult) => {
        this.result = newResult;
        console.log(this.result);
      });
    }
  }

}
