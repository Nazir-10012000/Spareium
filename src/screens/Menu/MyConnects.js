import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, Image, TextInput, Touchable } from 'react-native';
import Styles from '../../Stylesheet/Styles';
import { Dimensions } from 'react-native';



const myConnects = ({navigation}) => {
  const WIDTH = (Dimensions.get('window').width)/375 ;
  const HEIGHT = (Dimensions.get('window').height)/812;
  return (
      <ScrollView>
    <ImageBackground 
    source={require('../../img/myConnectsBg.png')} 
    style={{flex:1, height:HEIGHT*323,alignItems:'center'}}>
        <View style={{ flexDirection:'row',}}>
      <TouchableOpacity onPress= {() => navigation.openDrawer()}>
    <Image source={require('../../img/menu.png')}
    style={{ marginTop:HEIGHT*59,marginLeft:WIDTH*-100,height:HEIGHT*17,width:WIDTH*24}}/>
    </TouchableOpacity>
    <Text style={{
      marginTop:HEIGHT*53,
      fontSize:HEIGHT*19, letterSpacing:WIDTH*1,
      fontWeight:'700', color:'rgb(255,255,255)',
      lineHeight:HEIGHT*27,
      }}>My Connects</Text>
      </View>
      <Text style={{ fontSize:HEIGHT*48, letterSpacing:WIDTH*2.53,
      color:'rgb(255,255,255)',
      lineHeight:HEIGHT*67, marginTop:HEIGHT*24,}}>273</Text>
      <Text style={{fontSize:HEIGHT*14,color:'white',letterSpacing:WIDTH*0.74,
    }}>Present balance</Text>
    <TouchableOpacity onPress={() => alert('not ready now') }
        style={{
            borderWidth:1, borderColor:'rgb(248,135,61)',
            borderRadius:HEIGHT*23,marginTop:HEIGHT*32,
            height:HEIGHT*46, width:WIDTH*220,alignItems:'center',justifyContent:'center'
        }}>
        <Text style={{ fontSize:HEIGHT*17,letterSpacing:WIDTH*0.89,color:'white',
        lineHeight:HEIGHT*24, fontWeight:'600',}} >+ Add More</Text>
    </TouchableOpacity>
  </ImageBackground>
 
            <View style={{ borderBottomColor:'rgb(233,233,233)',
        borderBottomWidth:1, justifyContent:'center',
        height:HEIGHT*100,paddingHorizontal:WIDTH*31,}}>
        <View style={{ flexDirection:'row', }}> 
            <Text style={Styles.connects} >Tata Nexon Turbo Charger petrol Engine</Text>
            <Text style={[Styles.connects,{marginLeft:WIDTH*30,fontSize:HEIGHT*23 }] }>-3</Text>
        </View>
        <View style={{ flexDirection:'row', marginTop:HEIGHT*10}}> 
            <Text style={[Styles.orders,{ color:'rgb(0,115,216)',}]} >order id: 39393</Text>
            <Text style={[Styles.orders,{marginLeft:WIDTH*124,color:'rgb(155,155,155)',}] }>24 Jan 2020</Text>
        </View>
        </View>

        <View style={{ borderBottomColor:'rgb(233,233,233)',paddingHorizontal:WIDTH*31,
        borderBottomWidth:1, justifyContent:'center',height:HEIGHT*110}}>
        <View style={{ flexDirection:'row', }}> 
            <Text style={Styles.connects} >Tata Nexon Turbo Charger petrol Engine</Text>
            <Text style={[Styles.connects,{marginLeft:WIDTH*30,fontSize:HEIGHT*23 }] }>-1</Text>
        </View>
        <View style={{ flexDirection:'row', marginTop:HEIGHT*10}}> 
            <Text style={[Styles.orders,{ color:'rgb(0,115,216)',}]} >order id: 39393</Text>
            <Text style={[Styles.orders,{marginLeft:WIDTH*124,color:'rgb(155,155,155)',}] }>24 Jan 2020</Text>
        </View>
        </View>

        <View style={{ borderBottomColor:'rgb(233,233,233)',paddingHorizontal:WIDTH*31,
        borderBottomWidth:1, justifyContent:'center',height:HEIGHT*120,
        backgroundColor:'rgb(92,172,0)',}}>
        <View style={{ flexDirection:'row', }}> 
            <Text style={Styles.connects} >Tata Nexon Turbo Charger petrol Engine</Text>
            <Text style={[Styles.connects,{marginLeft:WIDTH*22,fontSize:HEIGHT*23 }] }>+30</Text>
        </View>
        <View style={{ flexDirection:'row', marginTop:HEIGHT*10}}> 
            <Text style={[Styles.orders,{ color:'rgb(0,115,216)',}]} >order id: 39393</Text>
            <Text style={[Styles.orders,{marginLeft:WIDTH*124,color:'rgb(155,155,155)',}] }>24 Jan 2020</Text>
        </View>
        </View>
  
  </ScrollView>
  );
}
export default myConnects;