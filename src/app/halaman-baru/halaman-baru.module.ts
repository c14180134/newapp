import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HalamanBaruPageRoutingModule } from './halaman-baru-routing.module';

import { HalamanBaruPage } from './halaman-baru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HalamanBaruPageRoutingModule
  ],
  declarations: [HalamanBaruPage]
})
export class HalamanBaruPageModule {}
