import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';

export const landingRoutes: Routes  = [
  {
  path: '',
  component: LandingComponent
  }
];



@NgModule({
  declarations: [LandingComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(landingRoutes),
  ]
})
export class LandingModule { }
