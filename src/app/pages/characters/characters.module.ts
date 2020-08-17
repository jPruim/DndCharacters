import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersPageRoutingModule } from './characters-routing.module';

import { CharactersPage } from './characters.page';
import { CustomHeaderComponent } from 'src/app/components/custom-header/custom-header.component';
import { CharacterListComponent } from 'src/app/components/character-list/character-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersPageRoutingModule
  ],
  declarations: [CharactersPage, CustomHeaderComponent,CharacterListComponent]
})
export class CharactersPageModule {}
