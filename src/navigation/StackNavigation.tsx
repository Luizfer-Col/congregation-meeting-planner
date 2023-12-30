import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddProgramScreen from '../screens/AddProgramScreen';
import TabNavigation from './TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

StatusBar.setBackgroundColor('#597476');

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabScreen"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AddProgram" component={AddProgramScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
