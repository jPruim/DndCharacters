import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpellDisplayPage } from './spell-display.page';

const routes: Routes = [
  {
    path: '',
    component: SpellDisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpellDisplayPageRoutingModule {}
