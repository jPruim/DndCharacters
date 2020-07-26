import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SPELLLIST } from 'src/assets/spellList';
import {Storage} from '@ionic/storage'
import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-spell-display',
  templateUrl: './spell-display.page.html',
  styleUrls: ['./spell-display.page.scss'],
})
export class SpellDisplayPage implements OnInit {
  favoriteList = [];
  public heartOutlineIcon = "/assets/heart-outline.svg";
  public heartIcon = "/assets/heart.svg";
  public spellID:number ;
  public spell;
  public favorited: Boolean;
  private favorited$: BehaviorSubject<boolean>;
  constructor(private activatedRoute: ActivatedRoute, private storage:Storage) { }

  ngOnInit() {
    this.spellID = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(this.spellID);
    // console.log(typeof(this.spellID));
    this.spell = SPELLLIST.find((sp)=>{return sp.id===this.spellID;});
    // console.log(this.spell);
    // console.log(this.spell.name)
    this.favorited$ = new BehaviorSubject(false)
    this.storage.get('favoriteSpells').then((list) => {
      if(list===null ||list.indexOf(this.spellID)===-1){
        this.favorited$.next(false);
      }else{
        this.favorited$.next(true);
      }
      return;
    });
    this.favorited$.subscribe( value => this.favorited= value);

  }
  updateFavorite(){
    if(this.favorited){
      this.favoriteList = this.favoriteList.filter((id)=> id !==this.spellID);
      console.log("removed spell, favorite list is now: ",this.favoriteList)
      this.favorited$.next( false);
      this.storage.set('favoriteSpells',this.favoriteList);
    }else{
      this.favoriteList.push(this.spellID);
      this.favoriteList.sort();
      this.favorited$.next(true)
      console.log("added spell, favorite list is now: ",this.favoriteList)
      this.storage.set('favoriteSpells',this.favoriteList);
    }
  }

}
