import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePerritoPage } from './update-perrito.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePerritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePerritoPageRoutingModule {}
