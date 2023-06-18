import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screen/home';
import ArtworkDetailScreen from '../screen/artworkDetail';
import { HOME_ROUTE, HOME_DETAIL_ROUTE } from './routes';
// import { DetailsParamsProps } from './types';

// Preseted animation
// export type StackPresentationTypes = 'push' | 'modal' | 'transparentModal' | 'containedModal' | 'containedTransparentModal' | 'fullScreenModal' | 'formSheet';
// export type StackAnimationTypes = 'default' | 'fade' | 'fade_from_bottom' | 'flip' | 'none' | 'simple_push' | 'slide_from_bottom' | 'slide_from_right' | 'slide_from_left';
// export type BlurEffectTypes = 'extraLight' | 'light' | 'dark' | 'regular' | 'prominent' | 'systemUltraThinMaterial' | 'systemThinMaterial' | 'systemMaterial' | 'systemThickMaterial' | 'systemChromeMaterial' | 'systemUltraThinMaterialLight' | 'systemThinMaterialLight' | 'systemMaterialLight' | 'systemThickMaterialLight' | 'systemChromeMaterialLight' | 'systemUltraThinMaterialDark' | 'systemThinMaterialDark' | 'systemMaterialDark' | 'systemThickMaterialDark' | 'systemChromeMaterialDark';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
        headerBackTitle: '',
      }}>
      <Stack.Screen
        name={HOME_ROUTE}
        options={{
          title: 'Art Institute of Chicago',
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name={HOME_DETAIL_ROUTE}
        component={ArtworkDetailScreen}
        options={{
          title: 'Artwork Detail',
          headerBackTitle: 'Back',
          headerBackTitleVisible: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
