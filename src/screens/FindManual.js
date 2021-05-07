import React,{useState,useEffect} from 'react';
import { View, Text,TextInput, TouchableOpacity,
  Animated, ImageBackground, Dimensions, Image,ScrollView,FlatList }
  from 'react-native';
  import {Avatar} from 'react-native-elements';
import Styles from '../Stylesheet/Styles'
import noResults from './noResult';
const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;

const DATA=[
    { id:'1',
      disc:'sDrive20d M Sport(Diesel) - 2021',
      title:'Maintenance',
      car:'Audi- Q3',
      img:require('../img/AudiLogo.png'),
      pdf:require('../img/book.png')
    },
    {   id:'2',
        disc:'vDrive24d M Sport(Diesel) - 2019',
        title:'Maintenance Manual',
        car:'Bmw- X3',
        img:require('../img/bmwLogo.png'),
        pdf:require('../img/pdf.png')
      },
      { id:'11',
        disc:'sDrive20d M Sport(Patrol) - 2018',
        title:'Manual',
        car:'Toyota ',
        img:require('../img/toyota.jpeg'),
        pdf:require('../img/pdf.png')
      },
      { id:'3',
        disc:'gDrive20d L Sport(Diesel) - 2019',
        title:'Maintenance Manual',
        car:'Bmw- X7',
        img:require('../img/bmwLogo.png'),
        pdf:require('../img/pdf.png')
      },
      { id:'4',
        disc:'sDrive20d M Sport(Patrol) - 2018',
        title:'Manual',
        car:'Audi- A5',
        img:require('../img/AudiLogo.png'),
        pdf:require('../img/book.png')
      },
      { id:'12',
        disc:'sDrive20d M Sport(Patrol) - 2018',
        title:'Maintenance Manual',
        car:'Tesla -T5',
        img:require('../img/tesla.png'),
        pdf:require('../img/pdf.png')
      },
      { id:'13',
        disc:'sDrive20d M Sport(Patrol) - 2018',
        title:'Maintenance Manual',
        car:'Tata - Nexon',
        img:require('../img/TataLogo.png'),
        pdf:require('../img/pdf.png')
      },
      { id:'8',
      disc:'sDrive20d M Sport(Patrol) - 2021',
      title:'Maintenance',
      car:'Ford- f3',
      img:require('../img/ford.png'),
      pdf:require('../img/book.png')
    },
      { id:'5',
        disc:'sDrive20d M Sport(Diesel) - 2020',
        title:'Maintenance Manual',
        car:'Bmw- X3',
        img:require('../img/bmwLogo.png'),
        pdf:require('../img/pdf.png')
      },
      { id:'6',
        disc:'sDrive20d M Sport(Diesel) - 2019',
        title:'Maintenance Manual',
        car:'Audi- A4',
        img:require('../img/AudiLogo.png'),
        pdf:require('../img/book.png')
      },
      { id:'7',
        disc:'sDrive20d M Sport(Patrol) - 2018',
        title:'Manual',
        car:'Audi- A5',
        img:require('../img/AudiLogo.png'),
        pdf:require('../img/book.png')
      },
      {
      id:'14',
      disc:'sDrive20d M Sport(Patrol) - 2020',
      title:'Maintenance Manual',
      car:'Tata - Nexon',
      img:require('../img/TataLogo.png'),
      pdf:require('../img/pdf.png')
    },
      { id:'9',
        disc:'sDrive20d M Sport(Patrol) - 2018',
        title:'Maintenance Manual',
        car:'Tesla',
        img:require('../img/tesla.png'),
        pdf:require('../img/book.png')
      },
      { id:'10',
        disc:'sDrive20d M Sport(Patrol) - 2018',
        title:'Manual',
        car:'Toyota ',
        img:require('../img/toyota.jpeg'),
        pdf:require('../img/pdf.png')
      },
            
]

const Item = ({ item,}) => (
    <View 
    style={{
      flex:1,
      flexDirection:'row',
      paddingHorizontal:WIDTH*20,
      height:HEIGHT*100,
      borderRadius:HEIGHT*7,
      shadowOpacity:.10,
      shadowRadius:10,
      shadowColor:'rgb(0,0,0)',
      marginVertical:HEIGHT*10,
      shadowOffset:{
        width: 0,
        height: 1}


        }}>
    <View style={[Styles.manualImgView]}>
        <Avatar
  size={65}
  rounded
  avatarStyle={{resizeMode:'contain',}}
  source={item.img}
/>
      </View>
        <View style={{ 
            justifyContent:'space-around',
            backgroundColor:'rgb(255,255,255)',
            borderTopRightRadius:HEIGHT*7,
            borderBottomRightRadius:HEIGHT*7,
            paddingHorizontal:WIDTH*12,
            flex:1}}>

        <Text style={[Styles.manualTitle]}>{item.title}</Text>
          <View style={{ flexDirection:'row',alignItems:'center'}}>
          <Image source={item.pdf}
                style={{ 
                  height: HEIGHT * 21,
                  width: WIDTH * 18.5,
                  resizeMode:'contain',
                  marginRight:WIDTH*10
                }}
        />
          <Text style={{fontSize:HEIGHT*15,fontWeight:'500',letterSpacing:WIDTH*0.47,
            lineHeight:HEIGHT*21, color:'rgba(1,54,176,0.80)',}}>{item.car}</Text>
          </View>
          <Text style={[,{fontSize:HEIGHT*13,letterSpacing:WIDTH*0.41,
            lineHeight:HEIGHT*24, color:'rgba(0,0,0,0.50)',}]}>{item.disc}</Text>
          
        </View>
        
     </View>
  );


const FindManuals =({navigation})=> {
  const [search, setSearch] = useState('');
  const [DATA2, setFilteredDataSource] = useState(DATA);
  const [masterDataSource, setMasterDataSource] = useState(DATA);

  animatedTopMargin = new Animated.Value( HEIGHT * -170); 
  animatedBottomMargin = new Animated.Value( HEIGHT * 130);
  animate = (value) => {    
    Animated.timing(
      animatedTopMargin,
      {
        toValue: value,
        duration: 700,
        useNativeDriver: false
      }
      
    ).start()
  }
  animat = (val) => {    
    Animated.timing(
      animatedBottomMargin,
      {
        toValue: val,
        duration: 700,
        useNativeDriver: false
      }
      
    ).start()
  }

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function res(item) {
          let itemData = item.car + item.title+ item.disc
           itemData=itemData.toUpperCase();
           
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      }
      
      );
      setFilteredDataSource(newData);
      setSearch(text);
      
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
    
  };

    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selected ? "rgb(248,135,61)" : "white";
        // const color = item.id === selected ? 'rgb(248,135,61)' : 'black';
        return (
          <Item
            item={item}
            // onPress={() => setSelected(item.id)}
            // backgroundColor={{ backgroundColor }}
            // textColor={{ color }}
            
          />
        );
      };

      
    return(
        <View style={{backgroundColor:'rgb(241,241,241)',flex:1}}>
            
            <ImageBackground source={require('../img/findManualsBg.png')}
      style={[{ 
          height: HEIGHT * 103,
          width:WIDTH*375,
          resizeMode: 'contain',
          }]} >
      <View style={{ 
            flexDirection: 'row',
            marginTop: HEIGHT * 53,
            marginHorizontal: WIDTH * 18,
            alignContent:'space-around',
            justifyContent:'space-between'
            }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../img/back.png')}
            style={{  height: HEIGHT * 24, width: WIDTH * 14,resizeMode:'contain' }} />
        </TouchableOpacity>
        <Text style={{
          fontSize: HEIGHT * 19, letterSpacing: WIDTH * 1,
          fontWeight: '700', color: 'rgb(255,255,255)',
          lineHeight: HEIGHT * 27,
        }}>Find Manual</Text>
        <TouchableOpacity onPress={() => {input.focus()}}>
          <Image source={require('../img/funnel.png')}
            style={{  height: HEIGHT * 22, width: WIDTH * 24,resizeMode:'contain' }} />
        </TouchableOpacity>
      </View>
      
      
    </ImageBackground>
    
    <Animated.View 
          style={{ 
                marginTop: animatedTopMargin, 
                marginBottom:animatedBottomMargin,
                borderBottomWidth:2,borderColor:'rgb(1,54,176)',
                flexDirection:'row',justifyContent:'space-between',
                marginHorizontal:WIDTH*10,
                paddingHorizontal:WIDTH*10,
                }}>    
    <TextInput    
      
      onFocus={() => {this.animat(HEIGHT* 5), this.animate(0)}}
      onBlur={() => {this.animate(HEIGHT * -140),this.animat(HEIGHT * 100)}}
      blurOnSubmit={true}
      autoCorrect={false}
      clearTextOnFocus={true}
      clearButtonMode='while-editing'
      ref={input => this.input = input}
      placeholder='Search Something'
      placeholderTextColor='rgb(1,54,176)'
      onChangeText={(text) => searchFilterFunction(text)}
      value={search}
      
      style={{ color:'rgb(1,54,176)', fontSize:HEIGHT* 20,
      // marginHorizontal:WIDTH*15,
      // paddingHorizontal:WIDTH*10,
      marginBottom:HEIGHT*5,
      // width:WIDTH*270,
      flex:1,
      backgroundColor:'transparent',
     

      }}
      />
      {/* <TouchableOpacity onPress={()=>{}}>
        <Text style={{ fontSize:HEIGHT*20,color:'rgb(1,54,176)'}}>Search</Text>
      </TouchableOpacity> */}
      </Animated.View>
    <FlatList
                data={DATA2}
                
                // horizontal={true}
                // numColumns={3}
                renderItem={renderItem}
                // keyExtractor={(item) => item.id}
                ListEmptyComponent={noResults}
                // getItemCount={data => data.length}
                // extraData={selected}
            />  
        </View>
    );
} 
export default FindManuals;