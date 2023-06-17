import { combineReducers, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'slice',
  initialState: 0,
  reducers: {
    increment: (state: number, action: { payload: number }) =>
      state + action.payload,
  },
});
//   // now available:
//   slice.actions.increment(2)
//   // also available:
//   slice.caseReducers.increment(0, { type: 'increment', payload: 5 })

const rootReducer = combineReducers({ slice: slice.reducer });

export default rootReducer;
