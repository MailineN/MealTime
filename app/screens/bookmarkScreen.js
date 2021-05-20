import React, { useEffect, useState, Dimensions } from 'react' ;
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Image, FlatList, Share, StatusBar} from 'react-native';
import DropShadow from "react-native-drop-shadow";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Bookmark({ navigation}) {
    let recipeList
    useEffect(async()=> {
        try {
            await AsyncStorage.getItem('recipe');
            console.log(response)
            if (response !== null) {
                console.log(response)
                recipeList = response
            }

          } catch (e) {
            alert('Failed to load recipeList');
            console.log(e)
          }
    }, [])
    return (
        <ScrollView>
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
                <TouchableOpacity style = {styles.backUpperButton} onPress={() => navigation.navigate('Welcome')}>
                    <Icon style={{textAlign: "center"}} name="chevron-left" size={22} color = "#170c42"/>
                </TouchableOpacity>
            </DropShadow>
            <Text>{recipeList.toString()}</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    backUpperButton: {
        marginHorizontal : 10,
        marginVertical : 10,
        padding: 10,
        width : 45,
        height : 45,
        borderRadius : 10, 
    },
})
export default Bookmark