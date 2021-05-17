import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Test from './app/client/Test'; 
import TagScreen from './app/screens/TagScreen'
import RecipeScreen from './app/screens/RecipeScreen';

const Stack = createStackNavigator();

export default function App () {
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