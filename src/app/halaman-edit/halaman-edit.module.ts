import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HalamanEditPageRoutingModule } from './halaman-edit-routing.module';

import { HalamanEditPage } from './halaman-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HalamanEditPageRoutingModule
  ],
  declarations: [HalamanEditPage]
})
export class HalamanEditPageModule {}
