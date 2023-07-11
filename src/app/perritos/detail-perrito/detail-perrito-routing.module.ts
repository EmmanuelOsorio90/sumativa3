import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPerritoPage } from './detail-perrito.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPerritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPerritoPageRoutingModule {}
