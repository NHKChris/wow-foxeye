import { Component, Input } from '@angular/core';
import { Character } from './character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Input() character: Character;
  
  constructor(private characterService: CharacterService) { }
}
