import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipsPageComponent } from './ships-page.component';
import { ShareModule } from '../share/share.module';

export const ShipsRoutes: Routes = [
  {
    path: '',
    component: ShipsPageComponent,
  }
];
@NgModule({
  declarations: [ShipsPageComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ShipsRoutes),
  ]
})
export class ShipsModule { }


