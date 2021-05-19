import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import TagScreen from './app/screens/TagScreen'
import RecipeScreen from './app/screens/RecipeScreen';

const Stack = createStackNavigator();

export default function App () {
    StatusBar.setHidden(true);
    return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}/>
        <Stack.Screen
          name="Tags"
          component={TagScreen}
          options={{ headerShown: false }}/>
        <Stack.Screen
          name="Recipe"
          component={RecipeScreen}
          options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}