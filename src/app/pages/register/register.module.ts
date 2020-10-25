import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ShareModule } from '../share/share.module';


export const registerRoutes: Routes  = [
  {
  path: '',
  component: RegisterComponent
  }
];



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(registerRoutes),
  ]
})
export class RegisterModule { }
