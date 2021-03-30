import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'halaman-baru',
    loadChildren: () => import('./halaman-baru/halaman-baru.module').then( m => m.HalamanBaruPageModule)
  },
  {
    path: 'halaman3',
    loadChildren: () => import('./halaman3/halaman3.module').then( m => m.Halaman3PageModule)
  },
  {
    path: 'halaman-edit/:idnote',
    loadChildren: () => import('./halaman-edit/halaman-edit.module').then( m => m.HalamanEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
