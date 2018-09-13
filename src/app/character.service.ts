import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from './character/character';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characterNames: string[] = ["Foxwen", "Dliss", "Typhux", "Foxkyn", "Patoulacci"];
  baseApiUrl: string = "https://eu.api.battle.net/wow/character/";
  renderApiUrl: string = "http://render-eu.worldofwarcraft.com/character/";
  realmName: string = "ysondre";
  apiKey: string = "7x4eub93x8sn7pphu84hyyxasva3z44w";

  getCharacters(): Observable<Character[]> {
    const characters: Character[] = [];

    this.characterNames.forEach(name => {
      let character: Character = new Character;
      character.name = name;
      character = this.getCharacterItems(character);
      character = this.getCharacterReputation(character);
      characters.push(character);
    });

    return of(characters);
  }

  getCharacterDataFromApi(realmName: string, characterName: string, field: string) {
    return this.http
      .get<any>(this.generateUrl(realmName, characterName, field))
      .pipe(map(data => data));
  }

  generateUrl(realmName: string, characterName: string, field: string): string {
    return `${this.baseApiUrl}${realmName}/${characterName}?fields=${field}&locale=fr_FR&apikey=${this.apiKey}`;
  }

  getCharacterItems(character: Character) {
    this.getCharacterDataFromApi(this.realmName, character.name, "items")
        .subscribe(
          data => {
            character.level = data.level;
            character.iLevel = data.items.averageItemLevel
            character.avatarUrl = this.getAvatarUrl(data.thumbnail);
            character.fullAvatarUrl = this.getFullAvatarUrl(data.thumbnail);
            console.log(data);
          }
        );
    return character;
  }

  getCharacterReputation(character: Character) {
    this.getCharacterDataFromApi(this.realmName, character.name, "reputation")
        .subscribe(
          data => {
            console.log(data);
          }
        );
    return character;
  }

  getAvatarUrl(thumbnail: string) {
    return `${this.renderApiUrl}${thumbnail}`;
  }

  getFullAvatarUrl(thumbnail: string) {
    return this.getAvatarUrl(thumbnail).replace("avatar", "main");
  }

  constructor(private http: HttpClient) { }
}