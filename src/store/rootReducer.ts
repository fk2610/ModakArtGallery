import { combineReducers, createSlice } from '@reduxjs/toolkit';

const favoritesArtwork = createSlice({
  name: 'favoritesArtwork',
  initialState: [],
  reducers: {
    savedAsFavorite: (state: Array<string>, action: { payload: string }) => {
      const checkArtIndex = state.findIndex(art => art === action.payload);
      if (checkArtIndex !== -1) {
        state = state.slice(checkArtIndex, 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

// export { saveArtwork: favoritesArtwork.actions.savedAsFavorite, }

const rootReducer = combineReducers({
  favoritesArtwork: favoritesArtwork.reducer,
});

export default rootReducer;
