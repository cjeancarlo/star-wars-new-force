import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ShowMessageComponent } from 'src/app/components/show-message/show-message.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService, private snackBar: MatSnackBar,
              private router: Router) {


    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  // convenience getter for easy access to form fields
  get loginValues() { return this.loginForm.controls; }

  login() {
    if (this.loginForm.valid) {

      this.authenticationService.login(this.loginValues.username.value, this.loginValues.password.value);
      this.userService.response.pipe(take(1)).subscribe(res => {
        if (res) {
          this.showMessage('Message', res.message);

          if (res.success) {
            this.router.navigate(['landing']);
          }
        }
      });
    }
  }

  _v() {
    return this.loginForm.value;
  }

  ngOnInit(): void { }

  showMessage(title: string, message: string) {
    const data = { title, message };
    this.snackBar.openFromComponent(ShowMessageComponent, { data });

  }

}


