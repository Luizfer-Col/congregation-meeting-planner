import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProgramListScreen from '../screens/ProgramListScreen';
import PeopleListScreen from '../screens/PeopleListScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      detachInactiveScreens
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Programas') {
            iconName = require('../assets/icons/icon-program.png');
          } else if (route.name === 'Personas') {
            iconName = require('../assets/icons/dos-personas.png');
          }

          return (
            <Image
              source={iconName}
              style={{
                tintColor: focused ? 'red' : 'blue',
                width: size,
                height: size,
              }}
            />
          );
        },
      })}>
      <Tab.Screen name="Programas" component={ProgramListScreen} />
      <Tab.Screen name="Personas" component={PeopleListScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
