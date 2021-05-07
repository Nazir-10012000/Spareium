import React,{useState} from 'react';
import { View, Text,FlatList,TextInput, TouchableOpacity, ImageBackground, Dimensions, Image,ScrollView }
  from 'react-native';
  import {Avatar} from 'react-native-elements';
import Styles from '../Stylesheet/Styles';
import noResults from './noResult';

const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;

const AgenciesData=[
    {
        car:require('../img/bmwCar1.webp'),
        agencyName:'AGMC - BMW Sharjah',
        logo:require('../img/bmwLogo.png'),
        address:'Industrial Area 12, Road No. 3 Sharjah, United Arab Emirates',
        ratingBack:require('../img/ratingBack.png'),
        time:'Today: 09:00 AM to 6:00 PM - ',
        openOrNot:'OPEN',
        locationIcon:require('../img/locationIcon.png'),
        distence:'2.6 Km',
        star:require('../img/star.png'),
        starHalf:require('../img/starHalf.png'),
        starEmpty:require('../img/starEmpty.png'),
        rating:'4.6'
    },
   
    
    {
        car:require('../img/audiCar1.jpg'),
        agencyName:'AGMC - Audi Dubai',
        logo:require('../img/AudiLogo.png'),
        address:'Industrial Area 12, Road No. 3 Dubai, United Arab Emirates',
        ratingBack:require('../img/ratingBack.png'),
        time:'Today: 09:00 AM to 6:00 PM - ',
        openOrNot:'OPEN',
        locationIcon:require('../img/locationIcon.png'),
        distence:'3.4 Km',
        star:require('../img/star.png'),
        starHalf:require('../img/starHalf.png'),
        starEmpty:require('../img/starEmpty.png'),
        rating:'4.6'
    },
    {
        car:require('../img/bmwCar2.jpg'),
        agencyName:'Autofirst Car Repair',
        logo:require('../img/bmwLogo.png'),
        address:'Industrial Area 12, Road No. 3 Sharjah, United Arab Emirates',
        ratingBack:require('../img/ratingBack.png'),
        time:'Today: 09:00 AM to 6:00 PM - ',
        openOrNot:'OPEN',
        locationIcon:require('../img/locationIcon.png'),
        distence:'2.9 Km',
        star:require('../img/star.png'),
        starHalf:require('../img/starHalf.png'),
        starEmpty:require('../img/starEmpty.png'),
        rating:'4.6'
    },
    {
        car:require('../img/bmwCar1.webp'),
        agencyName:'AGMC - BMW Sharjah',
        logo:require('../img/bmwLogo.png'),
        address:'Industrial Area 12, Road No. 3 Sharjah, United Arab Emirates',
        ratingBack:require('../img/ratingBack.png'),
        time:'Today: 09:00 AM to 6:00 PM - ',
        openOrNot:'OPEN',
        locationIcon:require('../img/locationIcon.png'),
        distence:'2.8 Km',
        star:require('../img/star.png'),
        starHalf:require('../img/starHalf.png'),
        starEmpty:require('../img/starEmpty.png'),
        rating:'4.6'
    },
   
    
    {
        car:require('../img/audiCar1.jpg'),
        agencyName:'Autofirst Car Repair',
        logo:require('../img/bmwLogo.png'),
        address:'Industrial Area 12, Road No. 3 Dubai, United Arab Emirates',
        ratingBack:require('../img/ratingBack.png'),
        time:'Today: 09:00 AM to 6:00 PM - ',
        openOrNot:'OPEN',
        locationIcon:require('../img/locationIcon.png'),
        distence:'3.8 Km',
        star:require('../img/star.png'),
        starHalf:require('../img/starHalf.png'),
        starEmpty:require('../img/starEmpty.png'),
        rating:'4.6'
    },
    {
        car:require('../img/tataCar1.jpg'),
        agencyName:'AGMC - TATA Dubai',
        logo:require('../img/TataLogo.png'),
        address:'Industrial Area 12, Road No. 3 Dubai, United Arab Emirates',
        ratingBack:require('../img/ratingBack.png'),
        time:'Today: 09:00 AM to 6:00 PM - ',
        openOrNot:'OPEN',
        locationIcon:require('../img/locationIcon.png'),
        distence:'3.2 Km',
        star:require('../img/star.png'),
        starHalf:require('../img/starHalf.png'),
        starEmpty:require('../img/starEmpty.png'),
        rating:'4.6'
    },
    {
        car:require('../img/bmwCar2.jpg'),
        agencyName:'Al Nabooda Automobiles',
        logo:require('../img/bmwLogo.png'),
        address:'Industrial Area 12, Road No. 3 Sharjah, United Arab Emirates',
        ratingBack:require('../img/ratingBack.png'),
        time:'Today: 09:00 AM to 6:00 PM - ',
        openOrNot:'OPEN',
        locationIcon:require('../img/locationIcon.png'),
        distence:'4.8 Km',
        star:require('../img/star.png'),
        starHalf:require('../img/starHalf.png'),
        starEmpty:require('../img/starEmpty.png'),
        rating:'4.6'
    },
]



const findAgency =({navigation}) =>{
    const[search,setSearch] =useState('');
    const[filteredAgencies,setFilteredAgencies] = useState(AgenciesData);
    const Item =({item}) =>(
        <View style={{
            backgroundColor:'white',
            borderRadius:HEIGHT*15,
            shadowOffset:{
                width: 0,
                height: 1
              },
              shadowOpacity:.15,
              shadowRadius:10,
              shadowColor:'rgb(0,0,0)',
              marginBottom:HEIGHT*30,
        }} >
            <Image source={item.car} 
                style={Styles.car}/>
            <ImageBackground source={item.ratingBack} 
                style={{height:HEIGHT*23,width:WIDTH*121,resizeMode:'contain',
                    justifyContent:'space-evenly',alignItems:'center',
                    alignSelf:'flex-end',marginTop:HEIGHT * -192,flexDirection:'row'}}
            >
                <Image source={item.star} 
                style={Styles.star}/>
                <Image source={item.star} 
                style={Styles.star}/>
                <Image source={item.star} 
                style={Styles.star}/>
                <Image source={item.star} 
                style={Styles.star}/>
                <Image source={item.starHalf} 
                style={Styles.star}/>
                <Text style={{fontSize:HEIGHT*11,color:'white',fontWeight:'600'}}>{item.rating}</Text>
            </ImageBackground>
            <View style={{flexDirection:'row',marginTop:HEIGHT*138,justifyContent:'space-around'}}>
            <Avatar
                size={65}
                rounded
                avatarStyle={{resizeMode:'contain'}}
                source={item.logo}
            />
                <View style={{flexDirection:'column', justifyContent:'space-around'}}>
                    <Text style={{letterSpacing: WIDTH * 0.47,
                            fontSize:HEIGHT*17,
                            fontWeight:'600',
                            lineHeight:HEIGHT*24,
                            color: 'rgb(255,255,255)',
                            
                            }}>{item.agencyName}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{letterSpacing: WIDTH * 0.37,
                            fontSize:HEIGHT*12,
                            fontWeight:'500',
                            lineHeight:HEIGHT*17,
                            color: 'rgb(74,74,74)',
                            
                            }}>{item.time}</Text>
                        <Text style={{ letterSpacing: WIDTH * 0.37,
                            fontSize:HEIGHT*12,
                            fontWeight:'500',
                            lineHeight:HEIGHT*17,
                            color: 'rgb(84,156,4)',}}>{item.openOrNot}</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:HEIGHT*18,}}>
                <Text style={{
                    fontSize:HEIGHT*13, color:'rgb(155,155,155)',letterSpacing:WIDTH*0.36,
                    width:WIDTH*202,lineHeight:HEIGHT*15,
                }}>{item.address}</Text>
                <View style={{flexDirection:'row',backgroundColor:'rgb(248,115,28)',
                        borderRadius:HEIGHT*13,justifyContent:'space-evenly',alignItems:'center'
                        ,width:WIDTH*72,height:HEIGHT*30
                }}>
                    <Image source={item.locationIcon} 
                        style={{width:WIDTH*11,height:HEIGHT*15,resizeMode:'contain'}}/>
                    <Text style={{fontSize:HEIGHT*11,color:'white'}}>{item.distence}</Text>
                </View>
            </View>
            <View style={{ borderTopWidth:HEIGHT*1, borderColor:'rgb(216,216,216)',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{height:HEIGHT*50,alignItems:'center',justifyContent:'center',width:WIDTH*167 }}>
                    <Text style={Styles.callNow}>Call Now</Text>
                </View>
                <View style={{height:HEIGHT*50,alignItems:'center',
                    justifyContent:'center',width:WIDTH*167,
                    borderColor:'rgb(216,216,216)',borderLeftWidth:1
                 }}>
                    <Text style={Styles.callNow}>Get Direction</Text>
                </View>
            </View>
    
        </View>
    );
    
    
    const renderItem = ({ item }) => {
        return (
          <Item
            item={item} 
          />
        );
      };

      const filterAgencies =(text) =>{
        if(text){
            const filtered = AgenciesData.filter(
                function res(item){
                    const itemData = item.agencyName.toLowerCase(); 
                    const searchData = text.toLowerCase();
                    return itemData.indexOf(searchData) > -1;
                }
            );
            setFilteredAgencies(filtered);
            setSearch(text);
      
        }
        else{
            setFilteredAgencies(AgenciesData)
            setSearch(text);
        }
      }

    return(
    <View style={{flex:1,backgroundColor:'white'}}>

        <View style={{ 
            flexDirection: 'row',
            marginTop: HEIGHT * 53,
            marginHorizontal: WIDTH * 19,
            // alignContent:'space-around',
            justifyContent:'space-between'
            }}
            
        >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../img/backBlack.png')}
            style={{  height: HEIGHT * 24, width: WIDTH * 14,resizeMode:'contain' }} />
        </TouchableOpacity>
        <Text style={{
          fontSize: HEIGHT * 19, letterSpacing: WIDTH * 1,
          fontWeight: '700', color: 'rgb(74,74,74)',
          lineHeight: HEIGHT * 27,
        }}>Find Agency</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Map' )}>
          <Image source={require('../img/mapIcon.png')}
            style={{  height: HEIGHT * 24, width: WIDTH * 18,resizeMode:'contain' }} />
        </TouchableOpacity>
      </View>

      <View style={Styles.AgencyFinder}>
          <TextInput 
          placeholder='Search by name'
          placeholderTextColor='rgb(155,155,155)'
          autoCorrect={false}
          clearButtonMode="while-editing"
          onChangeText={(text) => setSearch(text)}
          value={search}
          onSubmitEditing={()=> filterAgencies(search)}

          style={{flex:1,fontSize:HEIGHT*17,
            fontWeight:'600',
            letterSpacing:WIDTH*0.47,}}
          />
          <TouchableOpacity onPress={()=> filterAgencies(search)}>
          <Image source={require('../img/searchIcon.png')} 
            style={{height:HEIGHT*24,width:WIDTH*23,resizeMode:'contain'}}/>
            </TouchableOpacity>
      </View>
      
      <View style={Styles.AgenciesView}>
          <View style={{flexDirection:'row',
                    justifyContent:'space-between',
                    marginVertical:HEIGHT*20,
                    marginHorizontal:WIDTH*20,
                    
                    }}>
              <Text style={{letterSpacing: WIDTH * 1,
                        fontSize:HEIGHT*17,
                        fontWeight:'600',
                        lineHeight:HEIGHT*24,
                        color: 'rgb(74,74,74)',
                        
                        }}> Nearby Agencies</Text>
              <TouchableOpacity onPress={()=> alert('not ready now!')}>
              <Image source={require('../img/menu2000.png')} 
                    style={{height:HEIGHT*24,width:WIDTH*23}}
              /></TouchableOpacity>
          </View>
            
            <FlatList
            data={filteredAgencies}
            renderItem={renderItem}
            keyExtractor={(item) => item.distence}
            ListEmptyComponent={noResults}
            style={{paddingHorizontal:WIDTH*20}}
            />
      </View>
    </View>
    );
}

export default findAgency;
