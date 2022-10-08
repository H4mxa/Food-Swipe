import React from 'react';
import type {Node} from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeArea} from './src/components/utility/safe-area.component';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <SafeArea>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
}

function MapScreen() {
  return (
    <SafeArea>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Map screen!</Text>
      </View>
    </SafeArea>
  );
}

const App: () => Node = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="MapScreen" component={MapScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
