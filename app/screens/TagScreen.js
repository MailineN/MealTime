import React from 'react';
import { Text, Button, ImageBackground, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';

function TagScreen({ navigation }) {
    return (
      <SafeAreaView style={tagStyles.background}>
        <Text style={tagStyles.titleStyle}>Choose your tags :
        </Text>
        <View style={{ marginVertical: 20 }}></View>
        <View style={{ flexDirection: "row" }}>
            <View style ={[tagStyles.tagsContainer]}>
                <Text style = {tagStyles.tagTitle}>Veggie</Text>
            </View>
            <View style ={[tagStyles.tagsContainer]}>
                <Text style = {tagStyles.tagTitle}>Dessert</Text>
            </View>
        </View>
        <View style={{ flexDirection: "row" }}>
            <View style ={[tagStyles.tagsContainer]}>
                <Text style = {tagStyles.tagTitle}>Dairy Free</Text>
            </View>
            <View style ={[tagStyles.tagsContainer]}>
                <Text style = {tagStyles.tagTitle}>Fitness Friendly</Text>
            </View>
        </View>
        <View style={{ marginVertical: 150 }}></View>
        <View style={tagStyles.button}>
            <Button 
              color="sienna"
              title="Back"
              onPress={() => navigation.navigate('Welcome')}/>
        </View>
      </SafeAreaView>
  );
}

const tagStyles = StyleSheet.create({
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
    margin : 10,
    padding: 10,
    borderRadius : 20, 
    backgroundColor: "#ffff",
    alignItems: "center", 
    width : 100,
    alignSelf: "center", 
    marginVertical: 10
  },
  tagTitle :{
    fontSize : 18,
    fontWeight: "500", 
    color : "#414141", 
    alignSelf: "center", 
    paddingVertical : 5,
  } ,
  titleStyle :{
    fontSize : 50,
    fontWeight: "500", 
    color : "#ffff", 
    alignSelf: "center", 
    paddingVertical : 5,
  } ,
})

export default TagScreen