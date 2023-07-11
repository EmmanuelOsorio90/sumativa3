import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-perritos',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'list-perritos',
    loadChildren: () => import('./perritos/list-perritos/list-perritos.module').then( m => m.ListPerritosPageModule)
  },
  {
    path: 'add-perrito',
    loadChildren: () => import('./perritos/add-perrito/add-perrito.module').then( m => m.AddPerritoPageModule)
  },
  {
    path: 'update-perrito/:id',
    loadChildren: () => import('./perritos/update-perrito/update-perrito.module').then( m => m.UpdatePerritoPageModule)
  },
  {
    path: 'detail-perrito/:id',
    loadChildren: () => import('./perritos/detail-perrito/detail-perrito.module').then( m => m.DetailPerritoPageModule)
  },
  {
    path: 'delete-perrito/:id',
    loadChildren: () => import('./perritos/delete-perrito/delete-perrito.module').then( m => m.DeletePerritoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./users/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./users/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./users/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'raza',
    loadChildren: () => import('./raza/raza.module').then( m => m.RazaPageModule)
  },
  {
    path: 'apiexterna',
    loadChildren: () => import('./apiexterna/apiexterna.module').then( m => m.ApiexternaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
