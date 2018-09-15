import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Store } from '@ngrx/store';
import { GetCharacterFetched } from './redux/characters/actions';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characterNames: string[] = ["Foxwen", "Dliss", "Typhux", "Foxkyn", "Patoulacci"];
  realmName: string = "ysondre";

  constructor(private http: HttpClient, private store: Store<any>) {
  }

  init() {
    this.characterNames.forEach((value) => {
      this.store.dispatch(new GetCharacterFetched(value))
    })
  }

  getCharacterDataFromApi(realmName: string, characterName: string, field: string) {
    return this.http
      .get<any>(this.generateUrl(realmName, characterName, field))
  }

  generateUrl(realmName: string, characterName: string, field: string): string {
    return `${environment.wowApi.baseUrl}${realmName}/${characterName}?fields=${field}&locale=fr_FR&apikey=${environment.wowApi.apiKey}`;
  }
}