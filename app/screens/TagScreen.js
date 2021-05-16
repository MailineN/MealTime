import React from 'react';
import { Button, ImageBackground, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';

function RecipeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.background}>
        <View style={{ flexDirection: "row" }}>
            <View style ={[listStyles.tagsContainer]}>
                <Text style = {styles.tagTitle}>Veggie</Text>
            </View>
            <View style ={[listStyles.tagsContainer]}>
                <Text style = {styles.tagTitle}>Dessert</Text>
            </View>
        </View>
        <View style={{ flexDirection: "row" }}>
            <View style ={[listStyles.tagsContainer]}>
                <Text style = {styles.tagTitle}>Dairy Free</Text>
            </View>
            <View style ={[listStyles.tagsContainer]}>
                <Text style = {styles.tagTitle}>Fitness Friendly</Text>
            </View>
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
    backgroundColor: "#e09c2c",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    width: '100%',
  },
  tagsContainer: {
    paddingVertical : 10, 
    paddingHorizontal : 10, 
    borderRadius : 10, 
    alignItems: "center", 
    width : 50,
    alignSelf: "center", 
    marginVertical: 10
  },
  tagTitle :{
    fontSize : 22,
    fontWeight: "500", 
    color : "#414141", 
    alignSelf: "center", 
    paddingVertical : 5,
  } ,
})