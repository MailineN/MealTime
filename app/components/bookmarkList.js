import React from "react"; 
import{StyleSheet,Text,View,TouchableOpacity} from "react-native";
import DropShadow from "react-native-drop-shadow";
const listStyles = StyleSheet.create(
    {
      listTitle :{
        fontSize : 18,
        fontWeight: "500", 
        color : "#170c42", 
        alignSelf: "flex-start", 
        paddingVertical : 5,
        fontFamily : "ProximaNova-Regular",
      } ,
  
      listContainer: {
        paddingVertical : 10, 
        paddingHorizontal : 10, 
        borderRadius : 10, 
        alignItems: "center", 
        width : 350,
        alignSelf: "center", 
        marginVertical: 10, 
        backgroundColor: "#e2e2ec",
        borderRadius: 10,
      },
  
    }
  )

const BookmarkList = ({item}) => {
  return (
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
    
    <View style ={[listStyles.listContainer]}>
    <Text style = {listStyles.listTitle}> {item.title} </Text>
    </View>
    
    </DropShadow>
  
  );
  }
export default BookmarkList;