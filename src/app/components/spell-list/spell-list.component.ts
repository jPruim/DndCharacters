import { Component, OnInit, Input } from '@angular/core';
import { Spell } from 'src/app/interfaces/spell';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss'],
})
export class SpellListComponent implements OnInit {
  @Input()
  spellList: Array<Spell>;

  constructor() { }

  ngOnInit() {
    console.log("sent spell list: ",this.spellList);
  }

}
