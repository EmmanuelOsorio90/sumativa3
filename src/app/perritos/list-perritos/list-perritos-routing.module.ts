import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPerritosPage } from './list-perritos.page';

const routes: Routes = [
  {
    path: '',
    component: ListPerritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPerritosPageRoutingModule {}
