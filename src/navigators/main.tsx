import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screen/home';
import ArtworkDetailScreen from '../screen/artworkDetail';
import { HOME_ROUTE, HOME_DETAIL_ROUTE } from './routes';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HOME_ROUTE}
        options={{ title: 'Art Institute of Chicago' }}
        component={HomeScreen}
      />
      <Stack.Screen
        name={HOME_DETAIL_ROUTE}
        options={{ title: 'My home' }}
        component={ArtworkDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
