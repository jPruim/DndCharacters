import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { IonicStorageService } from 'src/app/services/ionic-storage.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  characterList: Array<Character>;
  
  constructor(private storageService: IonicStorageService) { }

  ngOnInit() {}
  ionViewWillEnter(){
    this.storageService.getCharacterList().then(list => this.characterList = list);
  }

}
