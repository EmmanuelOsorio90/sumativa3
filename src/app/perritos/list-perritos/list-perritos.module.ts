import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPerritosPageRoutingModule } from './list-perritos-routing.module';

import { ListPerritosPage } from './list-perritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPerritosPageRoutingModule
  ],
  declarations: [ListPerritosPage]
})
export class ListPerritosPageModule {}
