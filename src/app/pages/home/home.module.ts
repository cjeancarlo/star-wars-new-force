import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';


export const HomeRoutes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'landing',
      loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule),
    } , {
      path: 'login',
      loadChildren: () => import('../login/login.module').then(m => m.LoginModule),
    }, {
      path: 'register',
      loadChildren: () => import('../register/register.module').then(m => m.RegisterModule),
    },{
      path: 'ships',
      loadChildren: () => import('../ships-page/ships.module').then(m => m.ShipsModule),
    }]

  }
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(HomeRoutes),
  ]
})
export class HomeModule { }


