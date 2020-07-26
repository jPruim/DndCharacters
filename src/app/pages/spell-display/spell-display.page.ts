import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SPELLLIST } from 'src/assets/spellList';
import { Observable, BehaviorSubject } from 'rxjs';
import { Spell } from 'src/app/interfaces/spell';
import { IonicStorageService } from 'src/app/services/ionic-storage.service';

@Component({
  selector: 'app-spell-display',
  templateUrl: './spell-display.page.html',
  styleUrls: ['./spell-display.page.scss'],
})
export class SpellDisplayPage implements OnInit {
  favoriteList = [];
  public heartOutlineIcon = "/assets/heart-outline.svg";
  public heartIcon = "/assets/heart.svg";
  public spellID: number;
  public spell:Spell;
  private initialized = false;
  public favorited: boolean; //inclass boolean value
  private favorited$: BehaviorSubject<boolean>; //value for others to subscribe to
  constructor(private activatedRoute: ActivatedRoute, private storageService: IonicStorageService) { }

  ngOnInit() {
    this.spellID = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(this.spellID);
    // console.log(typeof(this.spellID));
    this.spell = SPELLLIST.find((sp) => { return sp.id === this.spellID; });
    // console.log(this.spell);
    // console.log(this.spell.name)
    this.storageService.getFavoriteSpellList().then((list) => {
      this.favoriteList = list;
      if (list === null || list.indexOf(this.spellID) === -1) {
        this.favorited =false;
      } else {
        this.favorited =true;
      }
      return;
    });
    this.favorited$ = new BehaviorSubject(this.favorited)
   
    this.favorited$.subscribe(value => {
      if(this.initialized===true){
        this.updateFavoriteInStorage();
      }else{
        this.initialized = true;
      }
      this.favorited = value;
    });

  }
  updateFavorite$() {
    if (this.favorited) {
      this.favorited$.next(false);
    } else {
      this.favorited$.next(true)
    }
  }

  updateFavoriteInStorage() {
    if (this.favorited) {
      this.favoriteList = this.favoriteList.filter((id) => id !== this.spellID);
      console.log("removed spell, favorite list is now: ", this.favoriteList)
      this.storageService.setFavoriteSpellList(this.favoriteList);
    } else {
      this.favoriteList.push(this.spellID);
      this.favoriteList.sort();
      console.log("added spell, favorite list is now: ", this.favoriteList)
      this.storageService.setFavoriteSpellList(this.favoriteList);
    }
  }

}
