import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpellsPageRoutingModule } from './spells-routing.module';

import { SpellsPage } from './spells.page';

import { SpellListComponent} from 'src/app/components/spell-list/spell-list.component';
import { CustomHeaderComponent} from 'src/app/components/custom-header/custom-header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpellsPageRoutingModule
  ],
  declarations: [SpellsPage,SpellListComponent, CustomHeaderComponent]
})
export class SpellsPageModule {}
