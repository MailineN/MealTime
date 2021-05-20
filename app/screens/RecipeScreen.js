import React, { useEffect, useState, Dimensions } from 'react' ;
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Image, FlatList, Share, StatusBar} from 'react-native';
//import getRandomRecipe from '../client/getRandomRecipe';
import LinearGradient from 'react-native-linear-gradient';
import DropShadow from "react-native-drop-shadow";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

function Recipe({ navigation, route }) {
    const [recipe, setRecipe] = useState({
        "id": 716429,
        "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
        "imageType": "jpg",
        "servings": 2,
        "readyInMinutes": 45,
        "license": "CC BY-SA 3.0",
        "sourceName": "Full Belly Sisters",
        "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
        "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
        "aggregateLikes": 209,
        "healthScore": 19.0,
        "spoonacularScore": 83.0,
        "pricePerServing": 163.15,
        "analyzedInstructions": [],
        "cheap": false,
        "creditsText": "Full Belly Sisters",
        "cuisines": [],
        "dairyFree": false,
        "diets": [],
        "gaps": "no",
        "glutenFree": false,
        "instructions": "Incroybale mais vrai, ces pâtes vont vous ravir !",
        "ketogenic": false,
        "lowFodmap": false,
        "occasions": [],
        "sustainable": false,
        "vegan": false,
        "vegetarian": false,
        "veryHealthy": false,
        "veryPopular": false,
        "whole30": false,
        "weightWatcherSmartPoints": 17,
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "extendedIngredients": [
            {
                "aisle": "Milk, Eggs, Other Dairy",
                "amount": 1.0,
                "consitency": "solid",
                "id": 1001,
                "image": "butter-sliced.jpg",
                "measures": {
                    "metric": {
                        "amount": 1.0,
                        "unitLong": "Tbsp",
                        "unitShort": "Tbsp"
                    },
                    "us": {
                        "amount": 1.0,
                        "unitLong": "Tbsp",
                        "unitShort": "Tbsp"
                    }
                },
                "meta": [],
                "name": "butter",
                "original": "1 tbsp butter",
                "originalName": "butter",
                "unit": "tbsp"
            },
            {
                "aisle": "Produce",
                "amount": 2.0,
                "consitency": "solid",
                "id": 10011135,
                "image": "cauliflower.jpg",
                "measures": {
                    "metric": {
                        "amount": 473.176,
                        "unitLong": "milliliters",
                        "unitShort": "ml"
                    },
                    "us": {
                        "amount": 2.0,
                        "unitLong": "cups",
                        "unitShort": "cups"
                    }
                },
                "meta": [
                    "frozen",
                    "thawed",
                    "cut into bite-sized pieces"
                ],
                "name": "cauliflower florets",
                "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
                "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
                "unit": "cups"
            },
            {
                "aisle": "Cheese",
                "amount": 2.0,
                "consitency": "solid",
                "id": 1041009,
                "image": "cheddar-cheese.png",
                "measures": {
                    "metric": {
                        "amount": 2.0,
                        "unitLong": "Tbsps",
                        "unitShort": "Tbsps"
                    },
                    "us": {
                        "amount": 2.0,
                        "unitLong": "Tbsps",
                        "unitShort": "Tbsps"
                    }
                },
                "meta": [
                    "grated",
                    "(I used romano)"
                ],
                "name": "cheese",
                "original": "2 tbsp grated cheese (I used romano)",
                "originalName": "grated cheese (I used romano)",
                "unit": "tbsp"
            },
            {
                "aisle": "Oil, Vinegar, Salad Dressing",
                "amount": 1.0,
                "consitency": "liquid",
                "id": 1034053,
                "image": "olive-oil.jpg",
                "measures": {
                    "metric": {
                        "amount": 1.0,
                        "unitLong": "Tbsp",
                        "unitShort": "Tbsp"
                    },
                    "us": {
                        "amount": 1.0,
                        "unitLong": "Tbsp",
                        "unitShort": "Tbsp"
                    }
                },
                "meta": [],
                "name": "extra virgin olive oil",
                "original": "1-2 tbsp extra virgin olive oil",
                "originalName": "extra virgin olive oil",
                "unit": "tbsp"
            },
            {
                "aisle": "Produce",
                "amount": 5.0,
                "consitency": "solid",
                "id": 11215,
                "image": "garlic.jpg",
                "measures": {
                    "metric": {
                        "amount": 5.0,
                        "unitLong": "cloves",
                        "unitShort": "cloves"
                    },
                    "us": {
                        "amount": 5.0,
                        "unitLong": "cloves",
                        "unitShort": "cloves"
                    }
                },
                "meta": [],
                "name": "garlic",
                "original": "5-6 cloves garlic",
                "originalName": "garlic",
                "unit": "cloves"
            },
            {
                "aisle": "Pasta and Rice",
                "amount": 6.0,
                "consitency": "solid",
                "id": 20420,
                "image": "fusilli.jpg",
                "measures": {
                    "metric": {
                        "amount": 170.097,
                        "unitLong": "grams",
                        "unitShort": "g"
                    },
                    "us": {
                        "amount": 6.0,
                        "unitLong": "ounces",
                        "unitShort": "oz"
                    }
                },
                "meta": [
                    "(I used linguine)"
                ],
                "name": "pasta",
                "original": "6-8 ounces pasta (I used linguine)",
                "originalName": "pasta (I used linguine)",
                "unit": "ounces"
            },
            {
                "aisle": "Spices and Seasonings",
                "amount": 2.0,
                "consitency": "solid",
                "id": 1032009,
                "image": "red-pepper-flakes.jpg",
                "measures": {
                    "metric": {
                        "amount": 2.0,
                        "unitLong": "pinches",
                        "unitShort": "pinches"
                    },
                    "us": {
                        "amount": 2.0,
                        "unitLong": "pinches",
                        "unitShort": "pinches"
                    }
                },
                "meta": [
                    "red"
                ],
                "name": "red pepper flakes",
                "original": "couple of pinches red pepper flakes, optional",
                "originalName": "couple of red pepper flakes, optional",
                "unit": "pinches"
            },
            {
                "aisle": "Spices and Seasonings",
                "amount": 2.0,
                "consitency": "solid",
                "id": 1102047,
                "image": "salt-and-pepper.jpg",
                "measures": {
                    "metric": {
                        "amount": 2.0,
                        "unitLong": "servings",
                        "unitShort": "servings"
                    },
                    "us": {
                        "amount": 2.0,
                        "unitLong": "servings",
                        "unitShort": "servings"
                    }
                },
                "meta": [
                    "to taste"
                ],
                "name": "salt and pepper",
                "original": "salt and pepper, to taste",
                "originalName": "salt and pepper, to taste",
                "unit": "servings"
            },
            {
                "aisle": "Produce",
                "amount": 3.0,
                "consitency": "solid",
                "id": 11291,
                "image": "spring-onions.jpg",
                "measures": {
                    "metric": {
                        "amount": 3.0,
                        "unitLong": "",
                        "unitShort": ""
                    },
                    "us": {
                        "amount": 3.0,
                        "unitLong": "",
                        "unitShort": ""
                    }
                },
                "meta": [
                    "white",
                    "green",
                    "separated",
                    "chopped"
                ],
                "name": "scallions",
                "original": "3 scallions, chopped, white and green parts separated",
                "originalName": "scallions, chopped, white and green parts separated",
                "unit": ""
            },
            {
                "aisle": "Alcoholic Beverages",
                "amount": 2.0,
                "consitency": "liquid",
                "id": 14106,
                "image": "white-wine.jpg",
                "measures": {
                    "metric": {
                        "amount": 2.0,
                        "unitLong": "Tbsps",
                        "unitShort": "Tbsps"
                    },
                    "us": {
                        "amount": 2.0,
                        "unitLong": "Tbsps",
                        "unitShort": "Tbsps"
                    }
                },
                "meta": [
                    "white"
                ],
                "name": "white wine",
                "original": "2-3 tbsp white wine",
                "originalName": "white wine",
                "unit": "tbsp"
            },
            {
                "aisle": "Pasta and Rice",
                "amount": 0.25,
                "consitency": "solid",
                "id": 99025,
                "image": "breadcrumbs.jpg",
                "measures": {
                    "metric": {
                        "amount": 59.147,
                        "unitLong": "milliliters",
                        "unitShort": "ml"
                    },
                    "us": {
                        "amount": 0.25,
                        "unitLong": "cups",
                        "unitShort": "cups"
                    }
                },
                "meta": [
                    "whole wheat",
                    "(I used panko)"
                ],
                "name": "whole wheat bread crumbs",
                "original": "1/4 cup whole wheat bread crumbs (I used panko)",
                "originalName": "whole wheat bread crumbs (I used panko)",
                "unit": "cup"
            }
        ],
        "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.",
        "winePairing": {
            "pairedWines": [
                "chardonnay",
                "gruener veltliner",
                "sauvignon blanc"
            ],
            "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
            "productMatches": [
                {
                    "id": 469199,
                    "title": "Buddha Kat Winery Chardonnay",
                    "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
                    "price": "$25.0",
                    "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
                    "averageRating": 0.8,
                    "ratingCount": 1.0,
                    "score": 0.55,
                    "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20"
                }
            ]
        },
    })

    const saveRecipe = async () => {
        showMessage({
            message: "Saved!",
            type: "info",
          });
        try {

            const jsonValue = JSON.stringify(recipe)
            await AsyncStorage.setItem('recipe', jsonValue)
          } catch (e) {
            alert('Failed save recipe');
          }
        
        console.log(JSON.stringify(recipe))
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
                }
            })
        }

        
        console.log(recipe.title)
        return () => called = false;
    }, [])
    return (
        <ScrollView>
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
                <TouchableOpacity style = {recipeStyle.backUpperButton} onPress={() => getData()}>
                    <Icon style={{textAlign: "center"}} name="ad" size={22} color = "#170c42"/>
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
                        shadowRadius: 3,
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
    )
}

const recipeStyle = StyleSheet.create({
    titleContainer: {
        padding: 10,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius : 20, 
        backgroundColor: "#fb9300",
        alignItems: "center",
        justifyContent:"center",
    },
    title: {
        fontSize : 32,
        fontWeight: "bold", 
        color : "#170c42", 
        alignSelf: "center", 
        fontFamily : "ProximaNova Bold",
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
        fontWeight: "bold", 
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