import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';
import { ShowMessageComponent } from 'src/app/components/show-message/show-message.component';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterContentInit {


  loading = false;
  profileForm: FormGroup;

  constructor(private userService: UserService, private snackBar: MatSnackBar) {
    this.profileForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      username: new FormControl({ value: '', disabled: true }, [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  // convenience getter for easy access to form fields
  get profileValues() { return this.profileForm.controls; }

  updateUser() {
    if (this.profileForm.valid) {

      this.userService.updateUser(this._v());
      this.userService.response.pipe(take(1)).subscribe(r => {
        this.showMessage('Message', r.message);

      });
    }
  }


  _v() {
    return {
      ...this.profileForm.value,
      username: this.profileValues.username.value
    };
  }

  ngAfterContentInit(): void {
    this.userService.currentUser.subscribe((current: User) => {
      if (current) {
      this.profileValues.firstname.setValue(current.firstname);
      this.profileValues.lastname.setValue(current.lastname);
      this.profileValues.username.setValue(current.username);
      this.profileValues.password.setValue(current.password);
    }
    });

  }

  ngOnInit(): void { }

  showMessage(title: string, message: string) {
    const data = { title, message };
    this.snackBar.openFromComponent(ShowMessageComponent, {
      duration: 3000,
      data });

  }


}
