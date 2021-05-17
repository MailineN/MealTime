import React from 'react';
import { Text, TouchableOpacity, ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
    <ImageBackground 
      style={styles.background}
      source={require('../assets/background.jpg')}>
        <View style={{ marginVertical: 50 }}></View>
        <Text style={styles.titleStyle}>Recipe of The Day :
        </Text>
        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Test')}>
              <Text style = {styles.TextStyle} >Enter</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Tags')}>
              <Text style = {styles.TextStyle}>Tags</Text>
          </TouchableOpacity>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    margin : 10,
    padding: 10,
    borderRadius : 10, 
    backgroundColor:'#fb9300',
  },
  TextStyle:{
    color:'#fff',
    fontSize : 22,
    textAlign:'center',
  },
  titleStyle :{
    fontSize : 52,
    fontWeight: 'bold', 
    fontFamily : 'PlayfairDisplay-Regular',
    color : "#170c42", 
    alignSelf: "center", 
    paddingVertical : 5,
  } ,
})

export default WelcomeScreen;