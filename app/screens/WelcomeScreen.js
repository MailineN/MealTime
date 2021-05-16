import React from 'react';
import { Button, ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
    <ImageBackground 
      style={styles.background}
      source={require('../assets/background.jpg')}>
        <View style={styles.button}>
          <Button 
            color="sienna"
            title="Entrer"
            onPress={() => console.log('Button tapped')}/>
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

export default WelcomeScreen;