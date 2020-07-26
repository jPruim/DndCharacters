import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpellDisplayPageRoutingModule } from './spell-display-routing.module';

import { SpellDisplayPage } from './spell-display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpellDisplayPageRoutingModule
  ],
  declarations: [SpellDisplayPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SpellDisplayPageModule {}
