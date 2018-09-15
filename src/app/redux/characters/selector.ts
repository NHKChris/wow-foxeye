import { createSelector } from '@ngrx/store';

export const selectFeature = (state: any) => state;
export const selectGetCharactersState = () => createSelector(
  selectFeature,
  (state: any) => {
      return state.characterReducer;
  }
);