import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HalamanEditPage } from './halaman-edit.page';

const routes: Routes = [
  {
    path: '',
    component: HalamanEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HalamanEditPageRoutingModule {}
