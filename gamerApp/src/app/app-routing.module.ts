import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./pages/catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'estrenos',
    loadChildren: () => import('./pages/estrenos/estrenos.module').then( m => m.EstrenosPageModule)
  },
  {
    path: 'ayuda-faq',
    loadChildren: () => import('./pages/ayuda-faq/ayuda-faq.module').then( m => m.AyudaFaqPageModule)
  },  {
    path: 'videojuegos',
    loadChildren: () => import('./pages/videojuegos/videojuegos.module').then( m => m.VideojuegosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
