import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { SPELLLIST } from 'src/assets/spellList';
@Component({
  selector: 'app-favorite-spells',
  templateUrl: './favorite-spells.page.html',
  styleUrls: ['./favorite-spells.page.scss'],
})
export class FavoriteSpellsPage implements OnInit {
  spellList = [];
  favoriteList = [];
  retrieved: boolean;
  constructor(private storage: Storage) { }
  public spellDestination: string;

  filterList(event) {
    var searchTerm = event.srcElement.value;
    if (!searchTerm) {
      this.spellList = this.favoriteList;
      return;
    }
    this.spellList = this.favoriteList.filter(currentSpell => {
      if (currentSpell.name && searchTerm) {
        return (currentSpell.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
  ngOnInit() {
    this.retrieved = false;
    this.storage.get('favoriteSpells').then((list) => {
      // console.log("saved spell values",list)
      for(var i in list){
        // console.log("the value of i ", i,  typeof(i));
        this.favoriteList.push(SPELLLIST.find(element => element.id === Number(list[i])));
      }
      this.spellList = this.favoriteList;
      this.retrieved=true;
      console.log(this.favoriteList)
      return;
    })
  }
}
