import React, { useState } from 'react' ;
import { Text, Button, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function TagScreen({ navigation }) {
    const [veggie, setVeggie] = useState('')
    const [vegan, setVegan] = useState('')
    const [dairy, setdairy] = useState('')
    const [protein, setProtein] = useState('')
    const [snack, setSnack] = useState('')
    const [dessert, setDessert] = useState('')

    const [veggieC, setVeggieC] = useState('#ffba9b')
    const [veganC, setVeganC] = useState('#ffba9b')
    const [dairyC, setdairyC] = useState('#ffba9b')
    const [proteinC, setProteinC] = useState('#ffba9b')
    const [snackC, setSnackC] = useState('#ffba9b')
    const [dessertC, setDessertC] = useState('#ffba9b')

    return (
      <SafeAreaView style={tagStyles.background}>
        <View style={{ marginVertical: 20 }}></View>
        <Text style={tagStyles.titleStyle}>Choose your tags :
        </Text>
        <View style={{ marginVertical: 20 }}></View>
        <View style={{ flexDirection: "row" }}>
            <View style ={[tagStyles.tagsContainer]}>
                <TouchableOpacity onPress={()=>{setVeggie('Vegetarian'); setVeggieC("#fffbf5")}}>
                    <Text style = {tagStyles.tagTitle}>Veggie</Text>
                    <Icon style={{textAlign: "center"}} name="carrot" size={30} color={veggieC} />
                </TouchableOpacity>
            </View>
            <View style ={[tagStyles.tagsContainer]}>
                <TouchableOpacity onPress={() => {setVegan('Vegan'); setVeganC("#fffbf5")}} >
                    <Text style = {tagStyles.tagTitle}>Vegan</Text>
                    <Icon style={{textAlign: "center"}} name="leaf" size={30} color={veganC} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ flexDirection: "row" }}>
            <View style ={[tagStyles.tagsContainer]}>
                <TouchableOpacity onPress={() => {setdairy('Dairy'); setdairyC("#fffbf5")}}>
                <Text style = {tagStyles.tagTitle}>Dairy Free</Text>
                <Icon style={{textAlign: "center"}} name="wine-bottle" size={30} color={dairyC} />
                </TouchableOpacity>
            </View>
            <View style ={[tagStyles.tagsContainer]}>
            <TouchableOpacity onPress={() => {setProtein('main course'); setProteinC("#fffbf5")}}>
                <Text style = {tagStyles.tagTitle}>Fitness Friendly</Text>
                <Icon style={{textAlign: "center"}} name="dumbbell" size={30} color={proteinC} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ flexDirection: "row" }}>
            <View style ={[tagStyles.tagsContainer]}>
            <TouchableOpacity onPress={() => {setSnack('snack'); setSnackC("#fffbf5")}}>
                <Text style = {tagStyles.tagTitle}>Snack</Text>
                <Icon style={{textAlign: "center"}} name="candy-cane" size={30} color={snackC} />
                </TouchableOpacity>
            </View>
            <View style ={[tagStyles.tagsContainer]}>
            <TouchableOpacity onPress={() => {setDessert('dessert'); setDessertC("#fffbf5")}} >
                <Text style = {tagStyles.tagTitle}>Dessert</Text>
                <Icon style={{textAlign: "center"}} name="birthday-cake" size={30} color={dessertC} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ marginVertical: 20 }}></View>
        <Text style={tagStyles.selectedTagsStyle}>Selected tags: {veggie}, {vegan}, {dairy}, {protein}, {snack}, {dessert}
          </Text>
        <View style={{ marginVertical: 100 }}></View>
        
        <View style={tagStyles.button}>
            <Button 
              color="#fb9300"
              title="Back"
              onPress={() => navigation.navigate('Welcome')}/>
        </View>
        <View style={{ marginVertical: 20 }}></View>
      </SafeAreaView>
  );
}

const tagStyles = StyleSheet.create({
  background: {
    backgroundColor: "#faf9fb",
    alignItems: "center",
    justifyContent: "center",
  }, 

  button: {
    width: '100%',
    position: 'absolute',
    bottom:25,
    left:0,
  },
  tagsContainer: {
    margin : 10,
    padding: 10,
    borderRadius : 20, 
    backgroundColor: "#fb9300",
    alignItems: "center",
    justifyContent:"center", 
    width : 100,
    alignSelf: "center", 
  },
  tagTitle :{
    fontSize : 18,
    fontWeight: "500", 
    color : "#fffbf5", 
    alignSelf: "center", 
    paddingVertical : 5,
  } ,
  titleStyle :{
    fontSize : 50,
    fontWeight: "500", 
    color : "#170c42", 
    alignSelf: "center", 
    paddingVertical : 5,
  } ,
  selectedTagsStyle :{
    fontSize : 15,
    fontWeight: "500", 
    color : "#ffff", 
    alignSelf: "center", 
    paddingVertical : 5,
    margin :10
  } ,
})

export default TagScreen