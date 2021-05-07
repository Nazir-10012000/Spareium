import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, Image, TextInput,FlatList } from 'react-native';
import Styles from '../../Stylesheet/Styles';
import { Dimensions } from 'react-native';
const Menu = ({ navigation }) => {
  const WIDTH = (Dimensions.get('window').width) / 375;
  const HEIGHT = (Dimensions.get('window').height) / 812;

  const cardsData = [
    {
      title:'Autoparts',
      bg:require('../../img/autopartsBg.png'),
      img:require('../../img/brakeDisc.png'),
      text1:'Marketplace for ',
      text2:'New & Used ',
      text3:'Car Parts',
      nav:'SearchAP'
    },
    {
      title:'Manuals',
      bg:require('../../img/manualsBg.png'),
      img:require('../../img/miscellaneous.png'),
      text1:'Find ',
      text2:'Car Manual',
      text3:' ',
      nav:'FindManuals'
    },
    {
      title:'Agency',
      bg:require('../../img/AgencyBg.png'),
      img:require('../../img/percent.png'),
      text1:'Get ',
      text2:'Best Deals',
      text3:'from the Car Agencies',
      nav:'FindAgency'
    },
    {
      title:'Workshop',
      bg:require('../../img/workshopBg.png'),
      img:require('../../img/group9.png'),
      text1:'Find car ',
      text2:'Workshop',
      text3:'near your location',
      nav:'Workspace'
    }
  ]

    return (
    <ImageBackground source={require('../../img/menuCarBg.png')} style={Styles.Image} >
      <View>
        <View style={{ height: HEIGHT * 40,}}>
          </View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={require('../../img/menuIcon.png')}
              style={{
                marginTop: HEIGHT * 5,
                marginLeft: WIDTH * 20, width: WIDTH * 24,
                alignSelf:'flex-start',
                height: HEIGHT * 17, resizeMode: 'contain',
              }}
            />
            {/* <Text>drawer</Text> */}
            </TouchableOpacity>
          <Image source={require('../../img/speruiemMenu.png')}
            style={{
              marginTop: HEIGHT * 40,
              alignSelf:'center',
               width: WIDTH * 132,
              height: HEIGHT * 25, resizeMode: 'contain',position:'absolute'
            }}
          />
          <Image source={require('../../img/bellIcon.png')}
            style={{
              marginRight: WIDTH * 15,
              marginTop:HEIGHT*-25,
              alignSelf:'flex-end',
               width: WIDTH * 24,
              height: HEIGHT * 30, resizeMode: 'contain',
              
            }}
          />
        
        
        <View style={Styles.cardMenu}>
        <FlatList
                data={cardsData}
                keyExtractor={(item) => item.title}
                
                
                renderItem={({ item,index }) => {
                  if(index == 0 || index == 1)
                  return(
                  <View style={{ flexDirection: 'row',}} >
                  <Text style={[Styles.cardName, {}]}>{item.title}</Text>
                  <TouchableOpacity onPress={() => navigation.navigate(item.nav)}>
                    <ImageBackground source={item.bg} style={Styles.card}>
                      <Image source={item.img}
                        style={{
                          marginTop: HEIGHT * 20,
                          marginLeft: WIDTH * 207, width: WIDTH * 48,
                          height: HEIGHT * 48, resizeMode: 'contain'
                        }}
                      />
      
                      <Text style={[Styles.cardData, { marginTop: HEIGHT * 19, marginLeft: WIDTH * 29, }]}>
                        {item.text1}</Text>
                      <View style={{ flexDirection: 'row', marginLeft: WIDTH * 29, }}>
      
                        <Text style={[Styles.cardData, { color: 'rgb(248,180,28)' }]}>{item.text2}</Text>
                        <Text style={Styles.cardData}>{item.text3}</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
      );
      else
      return(
        <View style={{ flexDirection: 'row', }} >
                  <Text style={[Styles.cardName, {}]}>{item.title}</Text>
                  <TouchableOpacity onPress={() => navigation.navigate(item.nav)}>
                    <ImageBackground source={item.bg} style={Styles.card}>
                      <Image source={item.img}
                        style={{
                          marginTop: HEIGHT * 20,
                          marginLeft: WIDTH * 207, width: WIDTH * 48,
                          height: HEIGHT * 48, resizeMode: 'contain'
                        }}
                      />
      
                      <View style={{ flexDirection: 'row',marginTop: HEIGHT * 19, }}>
      
                      <Text style={[Styles.cardData, {  marginLeft: WIDTH * 29, }]}>
                        {item.text1}</Text>
                        <Text style={[Styles.cardData, { color: 'rgb(248,180,28)' }]}>{item.text2}</Text>
                        
                      </View>
                      <Text style={[Styles.cardData,{marginLeft: WIDTH * 29,}]}>{item.text3}</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
      );
                }}
            />
            
        </View>
      </View>
    </ImageBackground>
  );
}
export default Menu;