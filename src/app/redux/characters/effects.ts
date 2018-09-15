import { CharacterService } from './../../character.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { CharacterActions, CharacterActionTypes, GetCharacterSuccess, GetCharacterError } from './actions';


@Injectable()
export class CharacterEffects {
    @Effect()
    characterFetched$: Observable<CharacterActions> = this.actions$.pipe(
        ofType(CharacterActionTypes.GET_CHARACTER_FETCHED),
        mergeMap((action: any) =>
            this.characterService.getCharacterDataFromApi('ysondre', action.payload, 'items').pipe(
                map(data => {
                    return new GetCharacterSuccess(data);
                }),
                catchError(() => of(new GetCharacterError()))
            )
        )
    );

    constructor(private actions$: Actions, private characterService: CharacterService) { }
}