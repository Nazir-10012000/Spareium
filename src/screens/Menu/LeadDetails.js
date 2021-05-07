import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, Image, TextInput } from 'react-native';
import Styles from '../../Stylesheet/Styles';
import { Dimensions } from 'react-native';



const leadDetail = ({navigation}) => {
  const WIDTH = (Dimensions.get('window').width)/375 ;
  const HEIGHT = (Dimensions.get('window').height)/812;
  return (
   
    <ScrollView style={{ backgroundColor:'rgb(241,246,255)'}}>
    <ImageBackground 
      source={require('../../img/myLeadsBg.png')} 
      style={{flex:1,flexDirection:'row', height:HEIGHT*96,marginTop:HEIGHT* -1}}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../../img/back.png')}
      style={{ marginTop:HEIGHT*50,marginLeft:WIDTH*19,height:HEIGHT*24,width:WIDTH*14}}/>
      </TouchableOpacity>
      <Text style={{
        marginTop:HEIGHT*48, marginLeft:WIDTH*95.5,
        fontSize:HEIGHT*19, letterSpacing:WIDTH*1,
        fontWeight:'700', color:'rgb(255,255,255)',
        lineHeight:HEIGHT*27,
        }}>Lead Detail</Text>
    </ImageBackground>
    <Text style={{ fontSize:HEIGHT*15,lineHeight:HEIGHT*21, marginTop:HEIGHT*29,
      fontWeight:'700',
      letterSpacing:WIDTH*0.47, color:'rgb(0,0,0)',marginLeft:WIDTH*159}}>Nexon, ZXA 2019</Text>
  
  <View style={Styles.leadDetail}>
    <Image
      source={require('../../img/myLeadsBg.png')} 
      style={{ 
        height:HEIGHT*64,width:WIDTH*335,
        borderTopLeftRadius:HEIGHT* 30,borderTopRightRadius:HEIGHT*30
       }}/>
     <ImageBackground
        source={require('../../img/oval.png')} 
        style={{ 
          height:HEIGHT*75,width:WIDTH*75,
          backgroundColor:'white',borderRadius:HEIGHT*50,
          marginTop:HEIGHT* -101,marginLeft:WIDTH*39,
          resizeMode:'contain'
          }}>
        <Image
          source={require('../../img/TataLogo.png')} 
          style={{ 
            height:HEIGHT*48,width:WIDTH*75,marginTop:HEIGHT*12, resizeMode:'contain'}}/>
      </ImageBackground>
      <Text style={{ fontSize:HEIGHT*15, marginTop:HEIGHT* -17,
      fontWeight:'700',lineHeight:HEIGHT*21,
      letterSpacing:WIDTH*0.47, color:'rgb(248,135,61)',marginLeft:WIDTH*161
      }}>Turbo Charger</Text>
      <View style={{ paddingHorizontal:WIDTH*29,marginTop:HEIGHT*19,}}>
        <View style={{borderBottomWidth:1,borderColor:'rgb(230,230,230)',flex:1,height:HEIGHT*139}}>
          <Text style={{ fontSize:HEIGHT*19,letterSpacing:WIDTH*0.59,fontWeight:'600',
            color:'rgb(74,74,74)',marginTop:HEIGHT*23,lineHeight:HEIGHT*27}}>
          Nexon Turbo Charger petrol Engine
          </Text>
          <Text style={{ fontSize:HEIGHT*13,letterSpacing:WIDTH*0.41,fontWeight:'400',
            color:'rgb(45,45,45)',marginTop:HEIGHT*0,lineHeight:HEIGHT*24}}>
          VIN / OEM : 3388ADED4
          </Text>
        </View>
        <View style={{borderBottomWidth:1,borderColor:'rgb(230,230,230)',flex:1,
        height:HEIGHT*185}}>
          <Text style={{ fontSize:HEIGHT*15,letterSpacing:WIDTH*0.44,fontWeight:'600',
            color:'rgb(0,0,0)',marginTop:HEIGHT*18,lineHeight:HEIGHT*30}}>
          Additional Details:
          </Text>
          <Text style={{ fontSize:HEIGHT*15,letterSpacing:WIDTH*0.44,
            color:'rgb(74,74,74)',lineHeight:HEIGHT*25}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus aliquam erat vitae neque porta, nec blandit odio interdum. 
          </Text>
        </View>
        <View style={{borderBottomWidth:1,borderColor:'rgb(230,230,230)',
          flexDirection:'row', flex:1,height:HEIGHT*57,paddingTop:HEIGHT*16,}}>
          <Text style={{ fontSize:HEIGHT*15,letterSpacing:WIDTH*0.44,
            color:'rgb(0,0,0)',lineHeight:HEIGHT*21}}>
          Insurance Required:
          </Text><Text style={{ color:'rgb(248,135,61)',fontSize:HEIGHT*15,
          letterSpacing:WIDTH*0.44,lineHeight:HEIGHT*21}}> Yes</Text>
          
        </View>
        <View style={{borderBottomWidth:1,borderColor:'rgb(230,230,230)',
          flexDirection:'row', flex:1,height:HEIGHT*57,paddingTop:HEIGHT*16,}}>
          <Text style={{ fontSize:HEIGHT*15,letterSpacing:WIDTH*0.44,
            color:'rgb(0,0,0)',lineHeight:HEIGHT*21}}>
          Invoice Required:
          </Text><Text style={{ color:'rgb(248,135,61)',fontSize:HEIGHT*15,
          letterSpacing:WIDTH*0.44,lineHeight:HEIGHT*21}}> Yes</Text>
          
        </View>
        <View style={{borderBottomWidth:1,borderColor:'rgb(230,230,230)',
          flexDirection:'row', flex:1,height:HEIGHT*57,paddingTop:HEIGHT*16,}}>
          <Text style={{ fontSize:HEIGHT*15,letterSpacing:WIDTH*0.44,
            color:'rgb(0,0,0)',lineHeight:HEIGHT*21}}>
          Product Type:
          </Text><Text style={{ color:'rgb(248,135,61)',fontSize:HEIGHT*15,
          letterSpacing:WIDTH*0.44,lineHeight:HEIGHT*21}}> Yes</Text>
          
        </View>

      </View>

   </View>
   <View style={{ flex:1, alignContent:'center',alignItems:'center',justifyContent:'center',
    backgroundColor:'rgb(1,54,176)',height:HEIGHT*73,marginTop:HEIGHT*29,}}> 
           <TouchableOpacity onPress={() => {}}>
            <Text style={{ fontSize:HEIGHT*19, letterSpacing:WIDTH*1,color:'rgb(255,255,255)',
          lineHeight:HEIGHT*27,marginTop:HEIGHT* -21,fontWeight:'700'}}>Show Interest</Text>
          </TouchableOpacity>   
   </View>
   
    
  </ScrollView>
  );
}
export default leadDetail;