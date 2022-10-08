import React from 'react';
import type {Node} from 'react';
import {View, Text} from 'react-native';
import {theme} from './src/infrastructure/theme';
import {ThemeProvider} from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {SafeArea} from './src/components/utility/safe-area.component';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

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

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({size, color}) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const App: () => Node = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
