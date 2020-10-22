
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppCustomPreloader } from './app-custom-preloaders';

const APP_ROUTES: Routes = [
   {
  path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
} , {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
       useHash: true,
      preloadingStrategy: AppCustomPreloader,  // PreloadAllModules,
      onSameUrlNavigation: 'ignore',
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })],
  providers: [AppCustomPreloader]
  // exports: [RouterModule]w
})
export class AppRoutingModule { }
