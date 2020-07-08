import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SPELLLIST } from 'src/assets/spellList';
@Component({
  selector: 'app-spell-display',
  templateUrl: './spell-display.page.html',
  styleUrls: ['./spell-display.page.scss'],
})
export class SpellDisplayPage implements OnInit {
  public spellID:number ;
  public spell;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.spellID = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(this.spellID);
    // console.log(typeof(this.spellID));
    this.spell = SPELLLIST.find((sp)=>{return sp.id===this.spellID;});
    // console.log(this.spell);
    // console.log(this.spell.name)
  }

}
