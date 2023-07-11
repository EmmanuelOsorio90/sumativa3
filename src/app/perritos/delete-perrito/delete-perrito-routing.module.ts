import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletePerritoPage } from './delete-perrito.page';

const routes: Routes = [
  {
    path: '',
    component: DeletePerritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletePerritoPageRoutingModule {}
