import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteSpellsPage } from './favorite-spells.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteSpellsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteSpellsPageRoutingModule {}
