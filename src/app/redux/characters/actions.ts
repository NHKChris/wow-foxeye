import { Action } from '@ngrx/store';

export enum CharacterActionTypes {
    GET_CHARACTER_FETCHED = 'GET_CHARACTERS_FETCHED',
    GET_CHARACTER_SUCCESS = 'GET_CHARACTERS_SUCCESS',
    GET_CHARACTER_ERROR = 'GET_CHARACTERS_ERROR'
}

export class GetCharacterFetched implements Action {
    readonly type = CharacterActionTypes.GET_CHARACTER_FETCHED;
    constructor(public payload: string) { }
}

export class GetCharacterSuccess implements Action {
    readonly type = CharacterActionTypes.GET_CHARACTER_SUCCESS;
    constructor(public payload) { }
}

export class GetCharacterError implements Action {
    readonly type = CharacterActionTypes.GET_CHARACTER_ERROR;
}

export type CharacterActions =
    GetCharacterFetched |
    GetCharacterSuccess |
    GetCharacterError