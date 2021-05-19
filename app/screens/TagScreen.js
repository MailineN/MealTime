import React, { useState } from 'react' ;
import { Text, Button, StyleSheet, View, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

function TagScreen({ navigation }) {
    const [Diet, setDiet] = useState('')
    const [Category, setCategory] = useState('')
    return (
      <ImageBackground 
      style={tagStyles.background}
      source={require('../assets/background2.jpg')}
      blurRadius={50}>
        <View style={{ marginVertical: 40 }}></View>
        <Text style={tagStyles.titleStyle}>Pick a diet ...</Text>
        <View style={{ marginVertical: 10 }}></View>
        <View style={{ flexDirection: "row" }}>
            <View style ={[tagStyles.tagsContainer, {backgroundColor: Diet === 'vegetarian' ? '#faf9fb' : "#fb9300"}]}>
                <TouchableOpacity onPress={()=>setDiet('vegetarian')}>
                    <Text style = {[tagStyles.tagTitle , {color: Diet === 'vegetarian' ? "#170c42": '#faf9fb'}]}>Veggie</Text>
                    <Icon style={{textAlign: "center", margin : 4}} name="carrot" size={32} color = {Diet === 'vegetarian' ? "#170c42": '#faf9fb'}/>
                </TouchableOpacity>
            </View>
            <View style ={[tagStyles.tagsContainer, {backgroundColor: Diet === 'vegan' ? '#faf9fb' : "#fb9300"}]}>
                <TouchableOpacity onPress={() => setDiet('vegan')} >
                    <Text style = {[tagStyles.tagTitle , {color: Diet === 'vegan' ? "#170c42": '#faf9fb'}]}>Vegan</Text>
                    <Icon style={{textAlign: "center", margin : 4}} name="leaf" size={32} color =  {Diet === 'vegan' ? "#170c42": '#faf9fb'}/>
                </TouchableOpacity>
            </View>
            <View style ={[tagStyles.tagsContainer, {backgroundColor: Diet === 'dairy' ? '#faf9fb' : "#fb9300"}]}>
                <TouchableOpacity onPress={() => setDiet('dairy')}>
                <Text style = {[tagStyles.tagTitle , {color: Diet === 'dairy' ? "#170c42": '#faf9fb'}]}>Dairy</Text>
                <Icon style={{textAlign: "center", margin : 4}} name="cheese" size={32}  color =  {Diet === 'dairy' ? "#170c42": '#faf9fb'}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ marginVertical: 20 }}></View>
        <Text style={tagStyles.titleStyle}>And a category :
        </Text>
        <View style={{ marginVertical: 10 }}></View>
        <View style={{ flexDirection: "row" }}>
            <View style ={[tagStyles.tagsContainer, {backgroundColor: Category === 'breakfast' ? '#faf9fb' : "#fb9300"}]}>
            <TouchableOpacity onPress={() => setCategory('breakfast')}>
                <Text style = {[tagStyles.tagTitle , {color: Category === 'breakfast' ? "#170c42": '#faf9fb'}]}>Breakfast</Text>
                <Icon style={{textAlign: "center", margin : 4}} name="bread-slice" size={32}  color =  {Category === 'breakfast' ? "#170c42": '#faf9fb'}/>
                </TouchableOpacity>
            </View>
            <View style ={[tagStyles.tagsContainer, {backgroundColor:Category === 'snack' ? '#faf9fb' : "#fb9300"}]}>
            <TouchableOpacity onPress={() =>  setCategory('snack')}>
                <Text style = {[tagStyles.tagTitle , {color: Category === 'snack' ? "#170c42": '#faf9fb'}]}>Snack</Text>
                <Icon style={{textAlign: "center", margin : 4}} name="candy-cane" size={32}color =  {Category === 'snack' ? "#170c42": '#faf9fb'} />
                </TouchableOpacity>
            </View>
            <View style ={[tagStyles.tagsContainer, {backgroundColor: Category === 'dessert' ? '#faf9fb' : "#fb9300"}]}>
            <TouchableOpacity onPress={() =>  setCategory('dessert')} >
                <Text style = {[tagStyles.tagTitle , {color: Category === 'dessert' ? "#170c42": '#faf9fb'}]}>Dessert</Text>
                <Icon style={{textAlign: "center", margin : 4}} name="birthday-cake" size={32} color = {Category === 'dessert' ? "#170c42": '#faf9fb'}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ marginVertical: 20 }}></View>
        <TouchableOpacity style = {{position: 'absolute',bottom: 100,}} onPress={() => navigation.navigate('Recipe', {tags : "&tags="+ Diet+","+Category})}>
            <LinearGradient
              colors={["#EC9F05", "#fb9300" ]}
              style={tagStyles.button}
            >
              <Text style = {tagStyles.backStyle} >Enter</Text>
              </LinearGradient>
          </TouchableOpacity>
        <TouchableOpacity style = {tagStyles.backButton} onPress={() => navigation.navigate('Welcome')}>
            
              <Text style = {[tagStyles.backStyle]} >Back</Text> 
              
          </TouchableOpacity>
        <View style={{ marginVertical: 20 }}></View>
      </ImageBackground>
  );
}

const tagStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
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
    //backgroundColor:'#faf9fb',
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
    fontSize : 17,
    fontWeight: "800", 
    color : "#fffbf5", 
    fontFamily : "ProximaNova-Regular",
    textAlign: 'left',
    //paddingVertical : 5
  } ,
  titleStyle :{
    fontSize : 45,
    fontWeight: '900', 
    fontFamily : "PlayfairDisplay-Regular",
    color : '#faf9fb', 
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