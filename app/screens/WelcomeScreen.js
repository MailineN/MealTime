import React from 'react';
import { Text, TouchableOpacity, ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
    <ImageBackground 
      style={styles.background}
      source={require('../assets/background.jpg')}>
        <View style={{ marginVertical: 50 }}></View>
        <Text style={styles.titleStyle}>Recipe of The Day : </Text>
        <TouchableOpacity style = {styles.enterButton} onPress={() => navigation.navigate('Recipe')}>
        <Text style={styles.TextStyle}>Enter </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.tagButton} onPress={() => navigation.navigate('Tags')}>
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
  enterButton: {
    margin : 10,
    padding: 10,
    width : 280,
    borderRadius : 30, 
    backgroundColor:'#fb9300',
    position: 'absolute',
    bottom: 90,
  },
  tagButton: {
    margin : 10,
    padding: 10,
    width : 280,
    borderRadius : 30, 
    backgroundColor:'#fb9300',
    position: 'absolute',
    bottom: 10,
  },
  TextStyle:{
    color:'#fff',
    fontSize : 22,
    textAlign:'center',
    margin :5
  },
  titleStyle :{
    fontSize : 52,
    fontWeight: 'bold', 
    fontFamily: "PlayfairDisplay-Regular",
    color : "#170c42", 
    alignSelf: "center", 
    paddingVertical : 5,
  } ,
})

export default WelcomeScreen;