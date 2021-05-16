import React from 'react';
import { Button, ImageBackground, StyleSheet, View, SafeAreaView, ComponentProvider } from 'react-native';
import RandomRecipe from "../client/RandomRecipe";

function RecipeScreen({ navigation }) {
    return (
      <ImageBackground 
      style={styles.background}
      source={require('../assets/background.jpg')}>
        <SafeAreaView>
          <RandomRecipe/>
        </SafeAreaView>
        <View style={styles.button}>
          <Button 
            color="sienna"
            title="Back"
            onPress={() => navigation.navigate('Welcome')}/>
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 200
  },
})

export default RecipeScreen;