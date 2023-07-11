import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePerritoPageRoutingModule } from './update-perrito-routing.module';

import { UpdatePerritoPage } from './update-perrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePerritoPageRoutingModule
  ],
  declarations: [UpdatePerritoPage]
})
export class UpdatePerritoPageModule {}
