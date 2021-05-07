import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions, Image }
  from 'react-native';
// import Styles from '../Stylesheet/Styles';
import carModel from './carModel'
import OEM from './Oem';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;

const Tab = createMaterialTopTabNavigator();



const SearchAutoparts = ({ navigation }) => {

  return (
    <View style={{flex:1}}>
    <ImageBackground source={require('../img/searchAPBg.png')}
      style={[{ 
          height: HEIGHT * 173,
          width:WIDTH*375,
          resizeMode: 'contain',
          marginBottom:HEIGHT * -67}]} >
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../img/back.png')}
            style={{ marginTop: HEIGHT * 54, marginLeft: WIDTH * 19, height: HEIGHT * 24, width: WIDTH * 14 }} />
        </TouchableOpacity>
        <Text style={{
          marginTop: HEIGHT * 52, marginLeft: WIDTH * 61.5,
          fontSize: HEIGHT * 19, letterSpacing: WIDTH * 1,
          fontWeight: '700', color: 'rgb(255,255,255)',
          lineHeight: HEIGHT * 27,
        }}>SearchAutoparts</Text>
      </View>
      
    </ImageBackground>
    
     <Tab.Navigator
        sceneContainerStyle={{ backgroundColor:'white'}}

        tabBarOptions={{
          activeTintColor: 'white',
          tabStyle: { backgroundColor: 'transparent' },
          indicatorStyle: {
            backgroundColor: 'rgb(255,255,255)',
            height: HEIGHT * 5,
            
          },
          labelStyle: { fontSize: HEIGHT * 17, fontWeight: '600', },
          style: {
            backgroundColor: 'transparent',
            marginHorizontal: WIDTH * 35
          }
        }}



      >
        <Tab.Screen name="carModel" component={carModel} 
          options={{ tabBarLabel: 'By Car Model' }} />
        <Tab.Screen name="Oem" component={OEM} 
          options={{ tabBarLabel: 'By OEM/VIN' }} />
      </Tab.Navigator> 
</View>


  );
}
export default SearchAutoparts;