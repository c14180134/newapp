import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HalamanBaruPage } from './halaman-baru.page';

const routes: Routes = [
  {
    path: '',
    component: HalamanBaruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HalamanBaruPageRoutingModule {}
