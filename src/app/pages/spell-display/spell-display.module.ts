import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpellDisplayPageRoutingModule } from './spell-display-routing.module';

import { SpellDisplayPage } from './spell-display.page';
import { SpellListComponent } from 'src/app/components/spell-list/spell-list.component';
import { CustomHeaderComponent } from 'src/app/components/custom-header/custom-header.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpellDisplayPageRoutingModule
  ],
  declarations: [SpellDisplayPage,SpellListComponent,CustomHeaderComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SpellDisplayPageModule {}
