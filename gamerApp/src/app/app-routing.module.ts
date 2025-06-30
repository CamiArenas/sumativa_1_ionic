import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { guardAuthGuard } from './guards/guard-auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [guardAuthGuard] 
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
    loadChildren: () => import('./pages/catalogo/catalogo.module').then( m => m.CatalogoPageModule),
    canActivate: [guardAuthGuard]
  },
  {
    path: 'estrenos',
    loadChildren: () => import('./pages/estrenos/estrenos.module').then( m => m.EstrenosPageModule),
    canActivate: [guardAuthGuard]
  },
  {
    path: 'ayuda-faq',
    loadChildren: () => import('./pages/ayuda-faq/ayuda-faq.module').then( m => m.AyudaFaqPageModule),
    canActivate: [guardAuthGuard]
  },
  {
    path: 'videojuegos',
    loadChildren: () => import('./pages/videojuegos/videojuegos.module').then( m => m.VideojuegosPageModule),
    canActivate: [guardAuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'foro',
    loadChildren: () => import('./pages/foro/foro.module').then( m => m.ForoPageModule),
    canActivate: [guardAuthGuard]
  },
  {
    path: 'mis-posts',
    loadChildren: () => import('./pages/mis-posts/mis-posts.module').then( m => m.MisPostsPageModule),
    canActivate: [guardAuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
