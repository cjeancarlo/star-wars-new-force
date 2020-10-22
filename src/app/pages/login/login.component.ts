import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;

  loginForm: FormGroup;

  constructor(private auth: AuthenticationService) {


    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  // convenience getter for easy access to form fields
  get loginValues() { return this.loginForm.controls; }

  login() {
    if (this.loginForm.valid) {

      this.auth.login(this.loginValues.username.value, this.loginValues.password.value).subscribe(res => {
        console.log(res);
        //console.log(this._v());

      });
    }
  }
  _v() {
    return this.loginForm.value;
  }

  ngOnInit(): void {



  }

}


