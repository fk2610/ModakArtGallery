import { combineReducers } from '@reduxjs/toolkit';

import favoritesArtwork from './favoriteArtwork';

const rootReducer = combineReducers({
  favoritesArtwork: favoritesArtwork.reducer,
});

export default rootReducer;
