import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from './character/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characterNames: string[] = ["Foxwen", "Foxkyn"];

  getCharacters(): Observable<Character[]> {
    const characters: Character[] = [];

    this.characterNames.forEach(name => {
      const character: Character = {
        name: name,
        level: 1
      };
      characters.push(character);
    });

    return of(characters);
  }

  constructor() { }
}
