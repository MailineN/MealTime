import React, { useState } from 'react' ;
import { Text, Button, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

function TagScreen({ navigation }) {
    const [Veggie, setVeggie] = useState('')
    const [Vegan, setVegan] = useState('')
    const [Dairy, setDairy] = useState('')
    const [Protein, setProtein] = useState('')
    const [Snack, setSnack] = useState('')
    const [Dessert, setDessert] = useState('')

    const [veggieC, setVeggieC] = useState('#ffba9b')
    const [veganC, setVeganC] = useState('#ffba9b')
    const [dairyC, setDairyC] = useState('#ffba9b')
    const [proteinC, setProteinC] = useState('#ffba9b')
    const [snackC, setSnackC] = useState('#ffba9b')
    const [dessertC, setDessertC] = useState('#ffba9b')
    return (
      <SafeAreaView style={tagStyles.background}>
        <Text style={tagStyles.titleStyle}>Choose your tags :
        </Text>
        <View style={{ marginVertical: 10 }}></View>
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
                <TouchableOpacity onPress={() => {setDairy('Dairy'); setDairyC("#fffbf5")}}>
                <Text style = {tagStyles.tagTitle}>No Dairy</Text>
                <Icon style={{textAlign: "center"}} name="cheese" size={30} color={dairyC} />
                </TouchableOpacity>
            </View>
            <View style ={[tagStyles.tagsContainer]}>
            <TouchableOpacity onPress={() => {setProtein('main course'); setProteinC("#fffbf5")}}>
                <Text style = {tagStyles.tagTitle}>Fit</Text>
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
        <TouchableOpacity style = {{position: 'absolute',bottom: 100,}} onPress={() => navigation.navigate('Test')}>
            <LinearGradient
              colors={["#EC9F05", "#fb9300" ]}
              style={tagStyles.button}
            >
              <Text style = {tagStyles.backStyle} >Enter</Text>
              </LinearGradient>
          </TouchableOpacity>
        <TouchableOpacity style = {tagStyles.backButton} onPress={() => navigation.navigate('Welcome')}>
            
              <Text style = {[tagStyles.backStyle, {color : "#170c42"}]} >Back</Text> 
              
          </TouchableOpacity>
        <View style={{ marginVertical: 20 }}></View>
      </SafeAreaView>
  );
}

const tagStyles = StyleSheet.create({
  background: {
    flex : 1, 
    backgroundColor: "#faf9fb",
    alignItems: "center",
    justifyContent: "center",
  }, 
  button: {
    margin : 10,
    padding: 10,
    width : 280,
    borderRadius : 30, 
    // backgroundColor:'#fb9300',
    //position: 'absolute',
    //bottom: 100,
  },
  backButton: {
    margin : 10,
    padding: 10,
    width : 280,
    borderRadius : 30, 
    backgroundColor:'#faf9fb',
    borderWidth: 2,
    borderColor:'#fb9300',
    position: 'absolute',
    bottom: 20,

  },
  tagsContainer: {
    margin : 10,
    padding: 10,
    width : 120,
    height : 120, 
    borderRadius : 20, 
    backgroundColor: "#fb9300",
    alignItems: "center",
    justifyContent:"center", 
    alignSelf: "center", 
  },
  tagTitle :{
    fontSize : 22,
    fontWeight: "500", 
    color : "#fffbf5", 
    fontFamily : "ProximaNova-Regular",
    alignSelf: "center", 
    paddingVertical : 5,
  } ,
  titleStyle :{
    fontSize : 52,
    fontWeight: 'bold', 
    fontFamily : "ProximaNova-Regular",
    color : "#170c42", 
    alignSelf: "center", 
    paddingVertical : 5,
    position: 'absolute',
    top: 20
    
  } ,
  backStyle :{
    fontSize : 22,
    fontWeight: 'bold', 
    color : "#ffff", 
    fontFamily : "ProximaNova-Regular",
    alignSelf: "center", 
    margin :5
  } ,
})

export default TagScreen