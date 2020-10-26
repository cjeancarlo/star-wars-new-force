import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { ShareModule } from '../share/share.module';


export const loginRoutes: Routes  = [
  {
  path: '',
  component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(loginRoutes),
  ]
})
export class LoginModule { }
