import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hidePassword = true;
  loginForm;
  constructor(private fb: FormBuilder, private service: DataService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  visibilityPassword = () => {
    this.hidePassword = !this.hidePassword;
  }

  submit = () => {
    if (this.loginForm.status === 'VALID') {
      this.service.login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }).subscribe((result: any) => {
        if (result.success) {
          this.service.loginStockage(result);
          this.router.navigate(['connected']);
        }
      });
    }
  }

}
