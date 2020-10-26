import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { ProfileComponent } from './profile.component';

export const profileRoutes: Routes  = [
  {
  path: '',
  component: ProfileComponent
  }
];


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(profileRoutes),
  ]
})
export class ProfileModule { }
