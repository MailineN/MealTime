import React from 'react';
import { Text, TouchableOpacity, ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
    <ImageBackground 
      style={styles.background}
      source={require('../assets/background2.jpg')}>
        <View style={{ marginVertical: 290 }}></View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.titleStyle}>It's meal time!</Text>
        </View>
        
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
    bottom: 100,
  },
  tagButton: {
    margin : 10,
    padding: 10,
    width : 280,
    borderRadius : 30, 
    backgroundColor:'#fb9300',
    position: 'absolute',
    bottom: 20,
  },
  TextStyle:{
    color:'#fff',
    fontSize : 22,
    fontFamily : "ProximaNova-Regular",
    textAlign:'center',
    margin :5
  },
  titleStyle :{
    fontSize :60,
    textAlign: 'center',
    fontWeight: '900', 
    fontFamily: "PlayfairDisplay-Regular",
    color : "#faf9fb", 
    alignSelf: "center", 
    paddingVertical : 5,
  } ,
})

export default WelcomeScreen;