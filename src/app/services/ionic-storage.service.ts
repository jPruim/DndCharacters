import { Injectable } from '@angular/core';
import { Storage } from'@ionic/storage';
import { Spell } from '../interfaces/spell';

@Injectable({
  providedIn: 'root'
})
export class IonicStorageService {

  constructor(private storage:Storage) { }

  async getFavoriteSpellList(): Promise<any>{
    return this.storage.get('favoriteSpells');
  }
  setFavoriteSpellList(spells: Array<Spell>){
    this.storage.set('favoriteSpells', spells);
  }
}
