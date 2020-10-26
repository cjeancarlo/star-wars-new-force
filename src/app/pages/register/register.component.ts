import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ShowMessageComponent } from 'src/app/components/show-message/show-message.component';
import { UserService } from 'src/app/services/user.service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading = false;
  registerForm: FormGroup;

  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router ) {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  // convenience getter for easy access to form fields
  get loginValues() { return this.registerForm.controls; }

  register() {
    if (this.registerForm.valid) {

      this.userService.createUser(this._v());

      this.userService.response.pipe(take(1)).subscribe(res => {
      this.showMessage('Message', res.message);


      if (res.success) {
        this.router.navigate(['landing']);
      }


      });
  }
}


  _v() {
    return this.registerForm.value;
  }

  ngOnInit(): void { }

  showMessage(title: string,  message: string) {
    const data = {title, message };
    this.snackBar.openFromComponent(ShowMessageComponent, {
      duration: 3000,
      data });

  }


}
