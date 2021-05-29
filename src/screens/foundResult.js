import React,{useState} from 'react';
import { View, Text,FlatList, TouchableOpacity, ImageBackground, Dimensions, Image,ScrollView }
  from 'react-native';
import Styles from '../Stylesheet/Styles';
import noResults from './noResult';
import store from '../store';
import {connect} from 'react-redux';
const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;
// console.log(store.getState());
const DATA=[
    {
      vin:'380183',
      title:'Tata Nexon Turbo Charger petrol Engine',
      sar:'244.55',
      img:require('../img/carParts3.png'),
      age:'NEW',
      imgBg:require('../img/turboBg.png')
    },
    {
      vin:'-',
      title:'Tata Nexon Turbo Charger petrol Engine',
      sar:'33.00',
      img:require('../img/carParts4.png'),
      age:'After Market',
      imgBg:require('../img/turboBg2.png')
    },
    {
      vin:'380184',
      title:'Tata Nexon Turbo Charger petrol Engine',
      sar:'48.00',
      img:require('../img/carParts4.png'),
      age:'After Market',
      imgBg:require('../img/turboBg2.png')
    },
    {
      vin:'38',
      title:'Tata Nexon Turbo Charger petrol Engine',
      sar:'60.33',
      img:require('../img/carParts3.png'),
      age:'NEW',
      imgBg:require('../img/turboBg.png')
    }, 
    {
      vin:'380173',
      title:'Tata Nexon Turbo Charger petrol Engine',
      sar:'244.55',
      img:require('../img/carParts3.png'),
      age:'NEW',
      imgBg:require('../img/turboBg.png')
    },
    {
      vin:'255',
      title:'Tata Nexon Turbo Charger diesel Engine',
      sar:'330.50',
      img:require('../img/carParts4.png'),
      age:'After Market',
      imgBg:require('../img/turboBg2.png')
    },
    {
      vin:'380584',
      title:'Tata Nexon Turbo Charger petrol Engine',
      sar:'480.00',
      img:require('../img/carParts4.png'),
      age:'After Market',
      imgBg:require('../img/turboBg2.png')
    },
    {
      vin:'380',
      title:'Tata Nexon Turbo Charger diesel Engine',
      sar:'600.33',
      img:require('../img/carParts3.png'),
      age:'NEW',
      imgBg:require('../img/turboBg.png')
    }, 
  ]
  

  
  const Item = ({ item}) => (
    <ImageBackground source={item.imgBg} 
      style={[Styles.foundData,{ shadowOffset:{
        width: 0,
        height: 1
      },
      shadowOpacity:.15,
      shadowRadius:10,
      shadowColor:'rgb(0,0,0)'}]}>
    <Text style={[Styles.cardTitle]}>{item.title}</Text>
      <View style={[Styles.cardView,{ }]}>
        <View style={{ justifyContent:'space-around'}}>
          <Text style={{fontSize:HEIGHT*17,fontWeight:'600',letterSpacing:WIDTH*0.47,
            lineHeight:HEIGHT*24, color:'rgb(128,128,128)',}}>VIN {item.vin}</Text>
          <Text style={[{fontSize:HEIGHT*21,letterSpacing:WIDTH*0.58,
            lineHeight:HEIGHT*29,fontWeight:'700', color:'rgb(0,115,217)',}]}>SAR {item.sar}</Text>
          <View style={{backgroundColor:'rgb(248,115,28)', 
            borderRadius:HEIGHT*4,alignItems:'center',}}>
              <Text style={[{fontSize:HEIGHT*14,letterSpacing:WIDTH*0.39,color:'white',
            lineHeight:HEIGHT*25,fontWeight:'600'}]}>{item.age}</Text>
            </View>
        </View>
        <Image source={item.image}
                style={{ 
                  height: HEIGHT * 101,
                  width: WIDTH * 101,
                  resizeMode:'contain',
                borderRadius:HEIGHT*14}}
        />
      </View>
      </ImageBackground>
  );

    
const foundResult =({ navigation },state) =>{
  const [selected,setSelected]=useState('null');
  const oem= store.getState();
 const search=oem.oem.oem;
  function res(vin){
     
      // vin.vin = oem ? vin.vin :'';
      return vin.vin.indexOf(search) > -1;
         
      
   
   
  }
let DATA2 =DATA.filter(res);

    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selected ? "rgb(248,135,61)" : "white";
        const Color = item.id === selected ? 'white' : 'black';
        return (
          <Item
            item={item}
            onPress={() => setSelected(item.id)}
            // backgroundColor={{ backgroundColor }}
            titleColor={{ Color }}
            
          />
        );
      };
      let dataCount =DATA2.length;
      return(
          <View>
            <View style={{ flexDirection: 'row',marginTop: HEIGHT * 54, }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../img/backBlack.png')}
                        style={{  marginLeft: WIDTH * 19, height: HEIGHT * 24, width: WIDTH * 14 }} />
                </TouchableOpacity>
                <Text style={{
                    marginLeft: WIDTH * 72.8,
                    fontSize: HEIGHT * 19, letterSpacing: WIDTH * 1,
                    fontWeight: '700', color: 'rgb(74,74,74)',
                    lineHeight: HEIGHT * 27,
                    }}>{dataCount} Results Found</Text>
            </View>
            
            <FlatList
                data={DATA2}
                // horizontal={true}
                // numColumns={3}
                renderItem={renderItem}
                keyExtractor={(item) => item.vin}
                ListEmptyComponent={noResults}
                // getItemCount={data => data.length}
                // extraData={selected}
            />  
          </View>
      );
    
}

export default connect(null)(foundResult);