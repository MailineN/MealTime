import React, { useState } from 'react' ;
import { Text, Button, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

function TagScreen({ navigation }) {
    const [Diet, setDiet] = useState('')
    const [Category, setCategory] = useState('')
    return (
      <SafeAreaView style={tagStyles.background}>
        <Text style={tagStyles.titleStyle}>Pick a diet ...</Text>
        <View style={{ marginVertical: 10 }}></View>
        <View style={{ flexDirection: "row" }}>
            <View style ={[tagStyles.tagsContainer, {backgroundColor: Diet === 'Vegetarian' ? '#faf9fb' : "#fb9300"}]}>
                <TouchableOpacity onPress={()=>setDiet('Vegetarian')}>
                    <Text style = {[tagStyles.tagTitle , {color: Diet === 'Vegetarian' ? "#170c42": '#faf9fb'}]}>Veggie</Text>
                    <Icon style={{textAlign: "center"}} name="carrot" size={35} color = {Diet === 'Vegetarian' ? "#170c42": '#faf9fb'}/>
                </TouchableOpacity>
            </View>
            <View style ={[tagStyles.tagsContainer, {backgroundColor: Diet === 'Vegan' ? '#faf9fb' : "#fb9300"}]}>
                <TouchableOpacity onPress={() => setDiet('Vegan')} >
                    <Text style = {[tagStyles.tagTitle , {color: Diet === 'Vegan' ? "#170c42": '#faf9fb'}]}>Vegan</Text>
                    <Icon style={{textAlign: "center"}} name="leaf" size={35} color =  {Diet === 'Vegan' ? "#170c42": '#faf9fb'}/>
                </TouchableOpacity>
            </View>
            <View style ={[tagStyles.tagsContainer, {backgroundColor: Diet === 'Dairy' ? '#faf9fb' : "#fb9300"}]}>
                <TouchableOpacity onPress={() => setDiet('Dairy')}>
                <Text style = {[tagStyles.tagTitle , {color: Diet === 'Dairy' ? "#170c42": '#faf9fb'}]}>Dairy</Text>
                <Icon style={{textAlign: "center"}} name="cheese" size={35}  color =  {Diet === 'Dairy' ? "#170c42": '#faf9fb'}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ marginVertical: 20 }}></View>
        <Text style={tagStyles.titleStyle}>And a category :
        </Text>
        <View style={{ marginVertical: 10 }}></View>
        <View style={{ flexDirection: "row" }}>
            <View style ={[tagStyles.tagsContainer, {backgroundColor: Category === 'Main' ? '#faf9fb' : "#fb9300"}]}>
            <TouchableOpacity onPress={() => setCategory('Main')}>
                <Text style = {[tagStyles.tagTitle , {color: Category === 'Main' ? "#170c42": '#faf9fb'}]}>Main</Text>
                <Icon style={{textAlign: "center"}} name="pizza-slice" size={35}  color =  {Category === 'Main' ? "#170c42": '#faf9fb'}/>
                </TouchableOpacity>
            </View>
            <View style ={[tagStyles.tagsContainer, {backgroundColor:Category === 'Snack' ? '#faf9fb' : "#fb9300"}]}>
            <TouchableOpacity onPress={() =>  setCategory('Snack')}>
                <Text style = {[tagStyles.tagTitle , {color: Category === 'Snack' ? "#170c42": '#faf9fb'}]}>Snack</Text>
                <Icon style={{textAlign: "center"}} name="candy-cane" size={35}color =  {Category === 'Snack' ? "#170c42": '#faf9fb'} />
                </TouchableOpacity>
            </View>
            <View style ={[tagStyles.tagsContainer, {backgroundColor: Category === 'Dessert' ? '#faf9fb' : "#fb9300"}]}>
            <TouchableOpacity onPress={() =>  setCategory('Dessert')} >
                <Text style = {[tagStyles.tagTitle , {color: Category === 'Dessert' ? "#170c42": '#faf9fb'}]}>Dessert</Text>
                <Icon style={{textAlign: "center"}} name="birthday-cake" size={35} color = {Category === 'Dessert' ? "#170c42": '#faf9fb'}/>
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
    width : 100,
    height : 100, 
    borderRadius : 20, 
    borderWidth: 3,
    borderColor:'#fb9300',
    alignItems: "center",
    justifyContent:"center", 
    alignSelf: "center", 
  },
  tagTitle :{
    fontSize : 20,
    fontWeight: "800", 
    color : "#fffbf5", 
    fontFamily : "ProximaNova-Regular",
    alignSelf: "center", 
    paddingVertical : 5
  } ,
  titleStyle :{
    fontSize : 45,
    fontWeight: 'bold', 
    fontFamily : "ProximaNova-Regular",
    color : "#170c42", 
    textAlign: 'left',
    paddingVertical : 5,
    
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