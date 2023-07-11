import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPerritoPageRoutingModule } from './detail-perrito-routing.module';

import { DetailPerritoPage } from './detail-perrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPerritoPageRoutingModule
  ],
  declarations: [DetailPerritoPage]
})
export class DetailPerritoPageModule {}
