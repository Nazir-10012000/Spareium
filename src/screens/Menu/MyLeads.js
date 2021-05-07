import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, Image} from 'react-native';
import Styles from '../../Stylesheet/Styles';
import { Dimensions } from 'react-native';


const myLeads = ({navigation}) => {
  const WIDTH = (Dimensions.get('window').width)/375 ;
  const HEIGHT = (Dimensions.get('window').height)/812;
  return (
   
    <ScrollView>
    <ImageBackground 
      source={require('../../img/myLeadsBg.png')} 
      style={{flex:1,flexDirection:'row', height:HEIGHT*104,marginTop:HEIGHT* -1}}>
        <TouchableOpacity onPress= {() => navigation.openDrawer()}>
      <Image source={require('../../img/menu.png')}
      style={{ marginTop:HEIGHT*57,marginLeft:WIDTH*19,height:HEIGHT*17,width:WIDTH*24}}/>
      </TouchableOpacity>
      <Text style={{
        marginTop:HEIGHT*57, marginLeft:WIDTH*95.5,
        fontSize:HEIGHT*19, letterSpacing:WIDTH*1,
        fontWeight:'700', color:'rgb(255,255,255)',
        lineHeight:HEIGHT*27,
        }}>My Leads</Text>
    </ImageBackground>
    <TouchableOpacity onPress={() => navigation.navigate('LeadDetail')}>
   <View style={Styles.leads}>
     <Image source={require('../../img/carParts3.png')} 
      style={{ height:HEIGHT*50,width:WIDTH*50,resizeMode:'contain'}}/>
      <View style={{paddingLeft:WIDTH*15,}}>
        <Text style={{fontSize:HEIGHT*17,
          color:'rgb(1,54,176)', letterSpacing:WIDTH*0.47,
          fontWeight:'700',lineHeight:HEIGHT*24}}>Turbo Charger
        </Text>
        <Text style={{fontSize:HEIGHT*15,
          color:'rgb(11,11,11)', letterSpacing:WIDTH*0.36,
          fontWeight:'600',lineHeight:HEIGHT*21}}>Tata Nexon Turbo Charger …
        </Text>
        <Text style={{fontSize:HEIGHT*11,
          color:'rgb(74,74,74)', letterSpacing:WIDTH*0.42,
          fontWeight:'500',lineHeight:HEIGHT*16}}>Nexon ZXA 2019
        </Text>
      </View>
   </View>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => navigation.navigate('LeadDetail')}>
   <View style={Styles.leads}>
     <Image source={require('../../img/carParts4.png')} 
      style={{ height:HEIGHT*50,width:WIDTH*50,resizeMode:'contain'}}/>
      <View style={{paddingLeft:WIDTH*15,}}>
        <Text style={{fontSize:HEIGHT*17,
          color:'rgb(1,54,176)', letterSpacing:WIDTH*0.47,
          fontWeight:'700',lineHeight:HEIGHT*24}}>Turbo Charger
        </Text>
        <Text style={{fontSize:HEIGHT*15,
          color:'rgb(11,11,11)', letterSpacing:WIDTH*0.36,
          fontWeight:'600',lineHeight:HEIGHT*21}}>Tata Nexon Turbo Charger …
        </Text>
        <Text style={{fontSize:HEIGHT*11,
          color:'rgb(74,74,74)', letterSpacing:WIDTH*0.42,
          fontWeight:'500',lineHeight:HEIGHT*16}}>Nexon ZXA 2019
        </Text>
      </View>
   </View>
    </TouchableOpacity>
  </ScrollView>
  );
}
export default myLeads;