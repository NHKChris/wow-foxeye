
import { CharacterActionTypes, CharacterActions } from './actions';
import { environment } from '../../../environments/environment';


export interface State {
    success: boolean;
    error: boolean;
    pending: boolean;
    characters: any;
};

export const initialState: State = {
    success: false,
    error: false,
    pending: false,
    characters: []
};

export function characterReducer(state = initialState, action: CharacterActions): State {
    switch (action.type) {
        case CharacterActionTypes.GET_CHARACTER_FETCHED: {
            return {
                ...state,
                success: false,
                error: false,
                pending: true,
            }
        }

        case CharacterActionTypes.GET_CHARACTER_SUCCESS: {
            return {
                ...state,
                success: true,
                error: false,
                pending: false,
                characters: getCharacterItems(state.characters, action.payload)
            }
        }

        case CharacterActionTypes.GET_CHARACTER_ERROR: {
            return {
                ...state,
                success: false,
                error: true,
                pending: false,
            }
        }

        default: {
            return state;
        }
    }
}

function getCharacterItems(state, data) {
    const character = {
        name: data.name,
        level: data.level,
        iLevel: data.items.averageItemLevel,
        avatarUrl: getAvatarUrl(data.thumbnail),
        fullAvatarUrl: getFullAvatarUrl(data.thumbnail)
    }

    state.push(character);
    return state;
}

function getAvatarUrl(thumbnail: string) {
    return `${environment.wowApi.renderUrl}${thumbnail}`;
}

function getFullAvatarUrl(thumbnail: string) {
    return getAvatarUrl(thumbnail).replace("avatar", "main");
}
