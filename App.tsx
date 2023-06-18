import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
/**
 * The internal dependencies.
 */
import store, { persistor } from './src/store';
import MainNavigator from './src/navigators/main';

// You should use animated transitions and any other cool feature you consider will show up how experienced you are in mobile development.
// Your solution will be evaluated on code quality, clarity and development best practices.
// Build the application using React Native and Typescript.
// Additional bonus if you implement some kind of push notifications.

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
