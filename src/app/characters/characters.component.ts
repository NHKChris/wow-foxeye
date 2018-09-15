import { Store, select } from '@ngrx/store';
import { Component } from '@angular/core';
import { CharacterService } from '../character.service';
import { selectGetCharactersState } from '../redux/characters/selector';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  public characterSelector = this.store.pipe(select(selectGetCharactersState()))

  constructor(private characterService: CharacterService, private store: Store<any>) {
    this.characterService.init();
  }
}
