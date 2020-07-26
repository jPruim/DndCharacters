import { Component, OnInit } from '@angular/core';
import { SPELLLIST } from 'src/assets/spellList';
@Component({
  selector: 'app-spells',
  templateUrl: './spells.page.html',
  styleUrls: ['./spells.page.scss'],
})
export class SpellsPage implements OnInit {
  spellList = SPELLLIST;
  constructor() { }
  public spellDestination:string;

  filterList(event){
    var searchTerm = event.srcElement.value;
    if(!searchTerm) {
      this.spellList=SPELLLIST;
      return;
    }
    this.spellList = SPELLLIST.filter(currentSpell => {
      if(currentSpell.name && searchTerm){
        return (currentSpell.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
  ngOnInit() {
    this.spellList = SPELLLIST;
  }

}
