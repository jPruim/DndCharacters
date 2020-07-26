import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteSpellsPageRoutingModule } from './favorite-spells-routing.module';

import { FavoriteSpellsPage } from './favorite-spells.page';


import { SpellListComponent} from 'src/app/components/spell-list/spell-list.component';
import { CustomHeaderComponent} from 'src/app/components/custom-header/custom-header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteSpellsPageRoutingModule
  ],
  declarations: [FavoriteSpellsPage,SpellListComponent,CustomHeaderComponent]
})
export class FavoriteSpellsPageModule {}
