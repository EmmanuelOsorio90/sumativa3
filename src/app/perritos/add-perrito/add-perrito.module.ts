import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPerritoPageRoutingModule } from './add-perrito-routing.module';

import { AddPerritoPage } from './add-perrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPerritoPageRoutingModule
  ],
  declarations: [AddPerritoPage]
})
export class AddPerritoPageModule {}
