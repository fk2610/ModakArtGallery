import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const favoritesArtwork = createSlice({
  name: 'favoritesArtwork',
  initialState: [],
  reducers: {
    savedAsFavorite: (state: number[], action: PayloadAction<number>) => {
      state.push(action.payload);
    },
    removeAsFavorite: (state, action: PayloadAction<number>) => {
      const checkArtIndex = state.findIndex(art => art === action.payload);
      if (checkArtIndex !== -1) {
        return state.filter(item => item !== state[checkArtIndex]);
      }
    },
  },
});

export const { savedAsFavorite, removeAsFavorite } = favoritesArtwork.actions;

export default favoritesArtwork;
