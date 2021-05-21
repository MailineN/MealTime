import React, { Component } from 'react' ;
import { Text, TouchableWithoutFeedback, StyleSheet, View, TouchableOpacity,ImageBackground,Animated,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

class Panda extends Component {
    state = {
        animation: new Animated.Value(0),
    
      };
      startAnimation = () => {
        Animated.timing(this.state.animation, {
          toValue: 5040,
          duration: 3000,
        }).start()
      };
    render(){
    const { navigate } = this.props.navigation;
    const rotateInterPolate = this.state.animation.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "-360deg"],
    })
    const animatedStyles = {
    transform: [{ rotate: rotateInterPolate }],
    };
    return (
      <ImageBackground 
      style={styles.background}
      source={require('../assets/background2.jpg')}
      blurRadius={50}>
        
        <View style={{ flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%' }}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} >
            <Image style={{ width: 250, height: 250 }} source={require('../assets/panda.png')}></Image>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableOpacity style = {styles.backButton} onPress={() => navigate('Welcome')}>
            
              <Text style = {[styles.backStyle]} >Back</Text> 
              
          </TouchableOpacity>
          </View>
      </ImageBackground>
  );}
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
      },
    backUpperButton: {
        marginHorizontal : 10,
        marginVertical : 10,
        padding: 10,
        width : 45,
        height : 45,
        borderRadius : 10, 
    },
    backButton: {
        margin : 10,
        padding: 10,
        width : 280,
        borderRadius : 30, 
        //backgroundColor:'#faf9fb',
        borderWidth: 2,
        borderColor:'#fff',
        position: 'absolute',
        bottom: 20,
    
      },
      backStyle :{
        fontSize : 22,
        fontWeight: 'bold', 
        color : "#ffff", 
        fontFamily : "ProximaNova-Regular",
        alignSelf: "center", 
        margin :5
      } ,
})

export default Panda