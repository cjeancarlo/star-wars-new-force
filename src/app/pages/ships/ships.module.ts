import { NgModule } from '@angular/core';
.import { RouterModule, Routes } from '@angular/router';
import { ShipsComponent } from './ships.component';
import { ShareModule } from '../share/share.module';

export const ShipsRoutes: Routes  = [
  {
  path: '',
  component: ShipsComponent
  }
];


@NgModule({
  declarations: [ShipsComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(ShipsRoutes),
  ]
})
export class ShipsModule { }


