import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPerritoPage } from './add-perrito.page';

const routes: Routes = [
  {
    path: '',
    component: AddPerritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPerritoPageRoutingModule {}
