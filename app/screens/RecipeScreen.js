import React, { useState } from 'react' ;
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import getRecipe from '../client/getRecipe';

function Recipe({ navigation }) {
    const [name, setTitle] = useState('')
    setTitle(getRecipe(64).title)

    return (
        <ScrollView>
            <Image source={{uri: "https://spoonacular.com/recipeImages/715420-556x370.jpg"}}/>
            <View style={recipeStyle.titleContainer}>
                <Text style={recipeStyle.title}>
                    {name}
                </Text>
            </View>
            <View style={recipeStyle.partContainer}>
                <Text style={recipeStyle.partTitle}>
                    Ingrédients :
                </Text>
            </View>
            <View style={recipeStyle.partContainer}>
                <Text style={recipeStyle.partTitle}>
                    Instructions :
                </Text>
            </View>
            <View style={recipeStyle.descriptionContainer}>
                <Text style={recipeStyle.description}>
                    Pour des cookies de qualité, il faut surtout bien équilibré la farine en en mettant un peu plus.
                </Text>
            </View>
            <View style={recipeStyle.titleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <Text style={recipeStyle.title}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
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
        fontSize : 25,
        fontWeight: "500", 
        color : "#fffbf5", 
        alignSelf: "center", 
    },
    partContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius : 20,
    },
    partTitle: {
        fontSize : 25,
        fontWeight: "bold",
        color: "black",
    },
    descriptionContainer: {
        marginTop: 5,
        marginHorizontal: 20,
        borderRadius : 20,
    },
    description: {
        fontSize : 20,
        fontWeight: "500",
    },
})

export default Recipe;