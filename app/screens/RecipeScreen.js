import React, { useEffect, useState, Dimensions } from 'react' ;
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Image, FlatList, Share, StatusBar,ImageBackground} from 'react-native';
//import getRandomRecipe from '../client/getRandomRecipe';
import LinearGradient from 'react-native-linear-gradient';
import DropShadow from "react-native-drop-shadow";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Recipe({ navigation, route }) {
    const [recipe, setRecipe] = useState({})
    const [recipeList, setRL] = useState([]);
    const saveRecipe = async () => {
        showMessage({
            message: "Saved!",
            type: "info",
            backgroundColor:'#fb9300',
          });
        try { 
            response = await AsyncStorage.getItem('recipe');
            if (response !== null) {
                setRL(JSON.parse(response))
                console.log(recipeList.length)
            }
            setRL(recipeList.push(recipe))
            console.log(recipeList)
            const jsonValue = JSON.stringify(recipeList)
            await AsyncStorage.setItem('recipe', jsonValue)
          } catch (e) {
            console.log('Failed save recipe');
            console.log(e)
          }
    }
    let onScrollEnd = (e) => {
        let pageNumber = Math.min(Math.max(Math.floor(e.nativeEvent.contentOffset.x / dimensions_width + 0.5) + 1, 0), listItems.length);
        console.log(pageNumber); 
    }
    useEffect(()=> {
        let called = true;

        console.log(route.params.tags)
        {route.params.tags.length > 8 ? 
            fetch('https://api.spoonacular.com/recipes/random?apiKey=5323d8a091244877b5e9332e144d9072'+route.params.tags)
            .then((response) => {return response.json()})
            .then((items) => {
                if (called) {
                    console.log(items.recipes["0"].title)
                    setRecipe(items.recipes["0"])
                }
            }): 
            fetch('https://api.spoonacular.com/recipes/random?apiKey=5323d8a091244877b5e9332e144d9072')
            .then((response) => {return response.json()})
            .then((items) => {
                if (called) {
                    console.log(items.recipes["0"].title)
                    setRecipe(items.recipes["0"])
                    console.log(Object.keys(recipe).length)
                }
            })
        }

        
        
        return () => called = false;
    }, [])
    return (
        Object.keys(recipe).length > 0 ? 
        <ScrollView style={{backgroundColor: "#ffff" }}>
            <View style={{ flexDirection: "row", justifyContent:'space-between' }}>
            <DropShadow
                style={{
                    shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 0,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                }}
                >
                <TouchableOpacity style = {recipeStyle.backUpperButton} onPress={() => navigation.navigate('Welcome')}>
                    <Icon style={{textAlign: "center"}} name="chevron-left" size={22} color = "#170c42"/>
                </TouchableOpacity>
                </DropShadow>
                <DropShadow
                style={{
                    shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 0,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                }}
                >
                <TouchableOpacity style = {recipeStyle.backUpperButton} onPress={() => saveRecipe()}>
                    <Icon style={{textAlign: "center"}} name="heart" size={22} color = "#170c42"/>
                </TouchableOpacity>
                </DropShadow>
                <DropShadow
                style={{
                    shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 0,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                }}
                >
                <TouchableOpacity style = {[recipeStyle.backUpperButton]} onPress={() => {Share.share({
                    url : recipe.sourceUrl, 
                    message: "Here is an awesome recipe!  "+ recipe.sourceUrl}); console.log(recipe.sourceUrl)}}>
                    <Icon style={{textAlign: "center"}} name="share-alt" size={22} color = "#170c42"/>
                </TouchableOpacity>
                </DropShadow>
            
            </View>
            <Text style={recipeStyle.title}>
                {recipe.title}
            </Text>
            <View style={{ marginVertical: 15 }}></View>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <DropShadow
                style={{
                    shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 0,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                }}
                >
                <Image style={recipeStyle.image} source={{uri: recipe.image}}/> 
                </DropShadow>
            </View>
            <View style={recipeStyle.partContainer}>
                <Text style={recipeStyle.partTitle}>
                    Ingredients :
                </Text>
            </View>
            <View style={recipeStyle.descriptionContainer}>
                <FlatList
                    pagingEnabled
                    onMomentumScrollEnd={onScrollEnd}
                    data={recipe.extendedIngredients}
                    renderItem={({item}) => <Text style={[recipeStyle.description,{fontWeight: 'bold'}]}> {'\u2022' + " "}
                        {item.measures.metric.amount} {item.measures.metric.unitLong }
                        <Text style={[recipeStyle.description, {fontWeight: 'normal', textAlign: 'right'}]}> {item.name.charAt(0).toUpperCase()}{item.name.substring(1).toLowerCase()} </Text> </Text> 
                        }/>
            </View>
            <View style={recipeStyle.partContainer}>
                <Text style={recipeStyle.partTitle}>
                    Instructions :
                </Text>
            </View>
            <View style={recipeStyle.descriptionContainer}>
                <FlatList
                    pagingEnabled
                    onMomentumScrollEnd={onScrollEnd}
                    data={recipe.instructions.split(".")}
                    renderItem={({item}) => <Text style={recipeStyle.description}>{item.replace(/<[^>]+>/g, "")}</Text>}/>
            </View>
            <TouchableOpacity style={{ alignItems: 'center', }} onPress={() => navigation.navigate('Welcome')}>
            <LinearGradient
                colors={["#EC9F05", "#fb9300" ]}
                style={recipeStyle.backButton}
                >
            <Text style = {[recipeStyle.backButtonText]}>Back</Text>
            </LinearGradient>
            </TouchableOpacity>
            <View style={{ marginVertical: 10 }}></View>
        </ScrollView>
        : 
            <ImageBackground 
            style={recipeStyle.background}
            source={require('../assets/gummy-coffee.png')}>
            <DropShadow
                style={{
                    shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 0,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                }}
                >
                <TouchableOpacity style = {recipeStyle.backUpperButton} onPress={() => navigation.navigate('Welcome')}>
                    <Icon style={{textAlign: "center"}} name="chevron-left" size={22} color = "#170c42"/>
                </TouchableOpacity>
            </DropShadow>
                <View style={{ marginVertical: 30 }}></View>
                <Text style={recipeStyle.title}>No Data </Text>
            </ImageBackground>
            

    )
}

const recipeStyle = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
      },
    title: {
        fontSize : 32,
        fontWeight: '500', 
        color : "#170c42", 
        alignSelf: "center", 
        fontFamily : "PlayfairDisplay-Regular",
        marginHorizontal : 15
    },
    partContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius : 20,
        padding: 15,
    },
    partTitle: {
        fontSize : 28,
        fontWeight: "bold",
        color: "#170c42",
        fontFamily : "ProximaNova-Regular",
    },
    descriptionContainer: {
        marginTop: 5,
        marginHorizontal: 20,
        borderRadius : 20,
    },
    description: {
        fontSize : 20,
        fontFamily : "ProximaNova-Regular",
    },
    backButtonText: {
        fontSize : 25,
        fontWeight: "900", 
        color : "#ffff", 
        alignSelf: "center", 
        fontFamily : "ProximaNova Bold",
        marginHorizontal : 15
    },
    backButton: {
        margin : 10,
        padding: 8,
        width : 280,
        borderRadius : 30, 
        backgroundColor:'#faf9fb',
        //position: 'absolute',
        //bottom: 20,
    },
    backUpperButton: {
        marginHorizontal : 10,
        marginVertical : 10,
        padding: 10,
        width : 45,
        height : 45,
        borderRadius : 10, 
    },
    image: {
        width: 380,
        height: 200,
        padding: 10,
        borderRadius: 30,
      }
    })

export default Recipe;