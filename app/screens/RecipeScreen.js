import React from 'react';
import { Button, ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import RandomRecipe from "../client/RandomRecipe";

function RecipeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.background}>
        <View>
          <RandomRecipe/>
        </View>
        <View style={styles.button}>
            <Button 
              color="sienna"
              title="Back"
              onPress={() => navigation.navigate('Welcome')}/>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    width: '100%',
  },
})

export default RecipeScreen;