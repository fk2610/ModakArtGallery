import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * The internal dependencies.
 */
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'Modak',
  storage: AsyncStorage,
  whitelist: ['favoritesArtwork'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
export { persistor };
