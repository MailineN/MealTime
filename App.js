import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "./app/screens/WelcomeScreen"

const Stack = createStackNavigator();

export default function App () {
    return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}