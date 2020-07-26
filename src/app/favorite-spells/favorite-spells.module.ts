import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteSpellsPageRoutingModule } from './favorite-spells-routing.module';

import { FavoriteSpellsPage } from './favorite-spells.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteSpellsPageRoutingModule
  ],
  declarations: [FavoriteSpellsPage]
})
export class FavoriteSpellsPageModule {}
