import { Component, OnInit } from '@angular/core';
import { SPELLLIST } from 'src/assets/spellList';
import { IonicStorageService } from 'src/app/services/ionic-storage.service';
@Component({
  selector: 'app-favorite-spells',
  templateUrl: './favorite-spells.page.html',
  styleUrls: ['./favorite-spells.page.scss'],
})
export class FavoriteSpellsPage implements OnInit {
  spellList = [];
  favoriteList = [];
  retrieved: boolean;
  constructor(private storageService: IonicStorageService) { }
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
    this.storageService.getFavoriteSpellList().then((list) => {
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
