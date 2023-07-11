import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletePerritoPageRoutingModule } from './delete-perrito-routing.module';

import { DeletePerritoPage } from './delete-perrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletePerritoPageRoutingModule
  ],
  declarations: [DeletePerritoPage]
})
export class DeletePerritoPageModule {}
