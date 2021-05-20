import React from 'react';
import { Text, TouchableOpacity, ImageBackground, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function WelcomeScreen({ navigation }) {
    return (
    <ImageBackground 
      style={styles.background}
      source={require('../assets/background2.jpg')}>
        <View style={styles.title}>
          <Text style={styles.titleStyle}>It's meal time!</Text>
        </View>
        
        <TouchableOpacity style = {{position: 'absolute',bottom: 100,}} onPress={() => navigation.navigate('Recipe',{tags : "",recipe : null})}>
          <LinearGradient
              colors={["#EC9F05", "#fb9300" ]}
              style={styles.enterButton}
            >
            <Text style={styles.TextStyle}>Enter </Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" , position: 'absolute', bottom: 20,}}>
        <TouchableOpacity style = {styles.bottomButton} onPress={() => navigation.navigate('Tags')}>
          <Text style = {[styles.TextStyle, {fontSize : 18,}]}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.bottomButton} onPress={() => navigation.navigate('Bookmark')}>
          <Text style = {[styles.TextStyle, {fontSize : 18,}]}>Bookmark</Text>
        </TouchableOpacity>
        </View>
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
    backgroundColor:'#fb9300'
  },
  title: {
    position: 'absolute',
    bottom: 170,
    alignItems: 'center'
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
    fontWeight: "bold",
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
  bottomButton: {
    margin : 10,
    padding: 10,
    width : 130,
    borderRadius : 30, 
    backgroundColor:'rgba(72,75,85,.2)',
    borderWidth: 2,
    borderColor:'#fb9300',

  },
})

export default WelcomeScreen;