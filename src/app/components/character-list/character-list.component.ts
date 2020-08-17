import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  @Input()
  characterList: Array<Character>;
  constructor() { }

  ngOnInit() {}

}
