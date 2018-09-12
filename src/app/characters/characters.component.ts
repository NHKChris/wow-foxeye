import { Component, OnInit } from '@angular/core';
import { Character } from '../character/character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  constructor(private characterService : CharacterService) { }

  characters: Character[];

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }
}
