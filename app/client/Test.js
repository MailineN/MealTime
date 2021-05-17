import React from 'react';
import { Button, ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import RandomRecipe from "./RandomRecipe";

function RecipeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.background}>
        <View>
          <RandomRecipe/>
        </View>
        <View style={styles.button}>
            <Button 
              color="#fb9300"
              title="Back"
              onPress={() => navigation.navigate('Welcome')}/>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#faf9fb",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    width: '100%',
  },
})

export default RecipeScreen;