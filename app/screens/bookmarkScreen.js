import React, { useEffect, useState, Dimensions } from 'react' ;
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Image, FlatList,Linking} from 'react-native';
import DropShadow from "react-native-drop-shadow";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookmarkList from '../components/bookmarkList'

function Bookmark({ navigation}) {
    const [recipeList, setRL] = useState([]);
    useEffect(async()=> {
        try {
            response = await AsyncStorage.getItem('recipe');
            if (response !== null) {
                setRL(JSON.parse(response))
                console.log(recipeList)
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
            
            <Text style={styles.titleStyle}>Saved Recipes</Text>
            <View style={{ marginVertical: 10 }}></View>
            <FlatList
                data={recipeList}
                renderItem={({item}) => <TouchableOpacity onPress={()=>{ Linking.openURL(item.sourceUrl)}}>
                    <BookmarkList item={item}/>
                    </TouchableOpacity>}/>    
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
    titleStyle :{
        fontSize : 42,
        fontWeight: '900', 
        fontFamily : "PlayfairDisplay-Regular",
        color : '#170c42', 
        textAlign: 'left',
        paddingVertical : 5,
        marginHorizontal : 70,
        
      } ,
})
export default Bookmark