
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppCustomPreloader } from './app-custom-preloaders';

const APP_ROUTES: Routes = [
   {
  path: 'ships', loadChildren: () => import('./pages/ships/ships.module').then(m => m.ShipsModule),
}, {
  path: '**',
  redirectTo: '/ships'
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
