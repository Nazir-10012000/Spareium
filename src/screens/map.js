import React, { useState, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, ImageBackground, Dimensions, Image, ScrollView }
    from 'react-native';
import Styles from '../Stylesheet/Styles';
// import MapView ,{Marker} from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import Carousel from 'react-native-snap-carousel';



const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;

// const origin = { latitude: 37.3318456, longitude: -122.0296002 ,latitudeDelta: 0.05,
//     longitudeDelta: 0.05};
// const destination = { latitude: 25.1707, longitude: -12.4053769 };
// const GOOGLE_MAPS_APIKEY = 'key';

// const AgenciesData = [
//     a={
//         agencyName: 'AGMC - BMW Sharjah',
//         logo: require('../img/bmwLogo.png'),
//         address: 'Industrial Area 12, Road No. 3 Sharjah, United Arab Emirates',
//         ratingBack: require('../img/ratingBack.png'),
//         time: 'Today: 09:00 AM to 6:00 PM - ',
//         openOrNot: 'OPEN',
//         locationIcon: require('../img/locationIcon1.png'),
//         distence: ' 2.6 Km',
//         star: require('../img/star.png'),
//         starHalf: require('../img/starHalf.png'),
//         starEmpty: require('../img/starEmpty.png'),
//         rating: '4.6',
//         coord :{ latitude: 47.3318456, longitude: -122.0296002 }
//     },


//     z={
//         agencyName: 'AGMC - Audi Dubai',
//         logo: require('../img/bmwLogo.png'),
//         address: 'Industrial Area 12, Road No. 3 Dubai, United Arab Emirates',
//         ratingBack: require('../img/ratingBack.png'),
//         time: 'Today: 09:00 AM to 6:00 PM - ',
//         openOrNot: 'OPEN',
//         locationIcon: require('../img/locationIcon1.png'),
//         distence: ' 3.4 Km',
//         star: require('../img/star.png'),
//         starHalf: require('../img/starHalf.png'),
//         starEmpty: require('../img/starEmpty.png'),
//         rating: '4.6',
//         coord :{ latitude: 57.3318456, longitude: -122.0296002 }
//     },
//     c={
//         agencyName: 'Autofirst Car Repair',
//         logo: require('../img/bmwLogo.png'),
//         address: 'Industrial Area 12, Road No. 3 Sharjah, United Arab Emirates',
//         ratingBack: require('../img/ratingBack.png'),
//         time: 'Today: 09:00 AM to 6:00 PM - ',
//         openOrNot: 'OPEN',
//         locationIcon: require('../img/locationIcon1.png'),
//         distence: ' 2.9 Km',
//         star: require('../img/star.png'),
//         starHalf: require('../img/starHalf.png'),
//         starEmpty: require('../img/starEmpty.png'),
//         rating: '4.6',
//         coord :{ latitude: 69.3318456, longitude: -122.0296002 }
//     },
//    d= {
//         agencyName: 'AGMC - TATA Dubai',
//         logo: require('../img/TataLogo.png'),
//         address: 'Industrial Area 12, Road No. 3 Dubai, United Arab Emirates',
//         ratingBack: require('../img/ratingBack.png'),
//         time: 'Today: 09:00 AM to 6:00 PM - ',
//         openOrNot: 'OPEN',
//         locationIcon: require('../img/locationIcon1.png'),
//         distence: ' 3.2 Km',
//         star: require('../img/star.png'),
//         starHalf: require('../img/starHalf.png'),
//         starEmpty: require('../img/starEmpty.png'),
//         rating: '4.6',
//         coord :{ latitude: 85.3318456, longitude: -122.0296002 }
//     },
//     e={
//         agencyName: 'Al Nabooda Automobiles',
//         logo: require('../img/bmwLogo.png'),
//         address: 'Industrial Area 12, Road No. 3 Sharjah, United Arab Emirates',
//         ratingBack: require('../img/ratingBack.png'),
//         time: 'Today: 09:00 AM to 6:00 PM - ',
//         openOrNot: 'OPEN',
//         locationIcon: require('../img/locationIcon1.png'),
//         distence: ' 4.8 Km',
//         star: require('../img/star.png'),
//         starHalf: require('../img/starHalf.png'),
//         starEmpty: require('../img/starEmpty.png'),
//         rating: '4.6',
//         coord :{ latitude: 107.3318456, longitude: -122.0296002 }
//     },
// ]
const map = ({ navigation }) => {
//     const coordinates ={
        
//         0:{
//             latitude: 26.9124, longitude: 75.7873,latitudeDelta: 0.05,
//             longitudeDelta: 0.05
//         },
//         3:{
//             latitude: 19.0760, longitude: 72.8777,latitudeDelta: 0.05,
//             longitudeDelta: 0.05
//         },
//        4: {
//             latitude: 25.2048, longitude: 55.2708,latitudeDelta: 0.05,
//             longitudeDelta: 0.05
//         },
//        1: {
//             latitude: 40.7128, longitude: 74.0060,latitudeDelta: 0.05,
//             longitudeDelta: 0.05
//         },
//         2:{
//             latitude: 40.7128, longitude: 74.0060,latitudeDelta: 0.05,
//             longitudeDelta: 0.05
//         },
//         5:{
//             latitude: 4.3318456, longitude: -122.0296002,latitudeDelta: 0.05,
//             longitudeDelta: 0.05
//         },
// }
    // const [coords, setCoords]=useState(origin)
    // const [cod, setCod]=useState('')
    // const render = ({ item }) => {
    //     return (

    //         <View style={{
    //             backgroundColor: 'white',
    //             borderRadius: HEIGHT * 15,
    //             shadowOffset: {
    //                 width: 0,
    //                 height: 1
    //             },
    //             shadowOpacity: .15,
    //             shadowRadius: 10,
    //             shadowColor: 'rgb(0,0,0)',
    //             height:HEIGHT*203,
    //             width:WIDTH*305
    //         }} >

    //             <View style={{ flexDirection: 'row', margin: HEIGHT * 20,justifyContent:'space-between' }}>
    //                 <Image source={item.logo}
    //                     style={{ height: 42, width: 42, resizeMode: 'contain' }} />
    //                 <View style={{ flexDirection: 'column',flex:1,marginLeft:10,justifyContent:'space-between'}}>
    //                     <Text style={{
    //                         alignSelf:'flex-start',
    //                         letterSpacing: WIDTH * 0.42,
    //                         fontSize: HEIGHT * 15,
    //                         fontWeight: '600',
    //                         lineHeight: HEIGHT * 21,
    //                         color: 'rgb(56,56,56)',
    //                     }}>{item.agencyName}</Text>

    //                     <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
    //                         <View style={{
    //                             flexDirection: 'row',
                                
    //                         }}>
    //                             <Image source={item.locationIcon}
    //                                 style={{ width: WIDTH * 11, height: HEIGHT * 15, resizeMode: 'contain' }} />
    //                             <Text style={{ fontSize: HEIGHT * 11,fontWeight:'500', color: 'rgb(74,74,74)' }}>{item.distence}</Text>
    //                         </View>
    //                         <View style={{
    //                             flexDirection: 'row',width:WIDTH*103,justifyContent:'space-around'
    //                         }}>
    //                             <Image source={item.star}
    //                                style={Styles.star} />
    //                              <Image source={item.star}
    //                                 style={Styles.star} />
    //                              <Image source={item.star}
    //                                  style={Styles.star} />
    //                             <Image source={item.star}
    //                                 style={Styles.star} />
    //                             <Image source={item.starHalf}
    //                                 style={Styles.star} />
    //                             <Text style={{ fontSize: HEIGHT * 11, fontWeight: '600',color:'rgb(248,135,61)', }}>{item.rating}</Text>
    //                         </View> 
    //                    </View>
    //                 </View>
    //             </View>
    //             <View style={{ flexDirection: 'row',marginLeft:WIDTH*20}}>
    //                 <Text style={{
    //                     fontSize: HEIGHT * 11, color: 'rgb(155,155,155)', letterSpacing: WIDTH * 0.31,
    //                     lineHeight: HEIGHT * 16,
    //                 }}>{item.address}</Text>

    //             </View>
    //             <View style={{ flexDirection: 'row',justifyContent:'flex-start',marginLeft:WIDTH*20,marginBottom:WIDTH*20 }}>
    //                 <Text style={{
    //                     letterSpacing: WIDTH * 0.31,
    //                     fontSize: HEIGHT * 11,
    //                     fontWeight: '500',
    //                     lineHeight: HEIGHT * 16,
    //                     color: 'rgb(74,74,74)',
    //                 }}>{item.time}</Text>
    //                 <Text style={{
    //                     letterSpacing: WIDTH * 0.31,
    //                     fontSize: HEIGHT * 11,
    //                     fontWeight: '500',
    //                     lineHeight: HEIGHT * 16,
    //                     color: 'rgb(84,156,4)',
    //                 }}>{item.openOrNot}</Text>
    //             </View>
    //             <View style={{ borderTopWidth: HEIGHT * 1, borderColor: 'rgb(216,216,216)', flexDirection: 'row', justifyContent: 'space-between' }}>
    //                 <View style={{ height: HEIGHT * 50, alignItems: 'center', justifyContent: 'center', width: WIDTH * 152 }}>
    //                     <Text style={Styles.callNow}>Call Now</Text>
    //                 </View>
    //                 <View style={{
    //                     height: HEIGHT * 50, alignItems: 'center',
    //                     justifyContent: 'center', width: WIDTH * 152,
    //                     borderColor: 'rgb(216,216,216)', borderLeftWidth: 1
    //                 }}>
    //                     <Text style={Styles.callNow}>Get Direction</Text>
    //                 </View>
    //             </View>

    //         </View>

    //     );
    // };
    // const onCarouselItemChange = () => {
    //     let a = cod ;
    //     return (
            
    //         setCoords(coordinates.a));
    //     //     console.log(dataRef.current.currentIndex)
    //     // );
    // }
    const dataRef = useRef();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{
                flexDirection: 'row',
                marginTop: HEIGHT * 53,
                marginHorizontal: WIDTH * 19,
                // alignContent:'space-around',
                justifyContent: 'space-between'
            }}

            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../img/backBlack.png')}
                        style={{ height: HEIGHT * 24, width: WIDTH * 14, resizeMode: 'contain' }} />
                </TouchableOpacity>
                <Text style={{
                    fontSize: HEIGHT * 19, letterSpacing: WIDTH * 1,
                    fontWeight: '700', color: 'rgb(74,74,74)',
                    lineHeight: HEIGHT * 27,
                }}>Find Agency</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Image source={require('../img/menu3.png')}
                        style={{ height: HEIGHT * 24, width: WIDTH * 18.1, resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>

            <View style={Styles.AgencyFinder}>
                <TextInput
                    placeholder='Search by name'
                    placeholderTextColor='rgb(155,155,155)'
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    //   onChangeText={(text) => setSearch(text)}
                    //   value={search}
                    //   onSubmitEditing={()=> filterAgencies(search)}
                    //   onChangeText={(oem) => setOem(oem)}
                    //   value={oem}
                    style={{
                        flex: 1, fontSize: HEIGHT * 17,
                        fontWeight: '600',
                        letterSpacing: WIDTH * 0.47,
                    }}
                />
                <TouchableOpacity onPress={() => filterAgencies(search)}>
                    <Image source={require('../img/searchIcon.png')}
                        style={{ height: HEIGHT * 24, width: WIDTH * 23 }} />
                </TouchableOpacity>
            </View>

            <View style={[Styles.AgenciesView]}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: HEIGHT * 20,
                    marginHorizontal: WIDTH * 20,

                }}>
                    <Text style={{
                        letterSpacing: WIDTH * 1,
                        fontSize: HEIGHT * 17,
                        fontWeight: '600',
                        lineHeight: HEIGHT * 24,
                        color: 'rgb(74,74,74)',

                    }}> Nearby Agencies</Text>
                    <TouchableOpacity onPress={() => alert('not ready now!')}>
                        <Image source={require('../img/menu2000.png')}
                            style={{ height: HEIGHT * 24, width: WIDTH * 23 }}
                        /></TouchableOpacity>
                </View>

                
                
                {/* <Carousel
                    layout={"default"}
                      ref={dataRef}
                    data={AgenciesData}
                    sliderWidth={WIDTH * 375}
                    itemWidth={300}
                    renderItem={render}
                    firstItem={0}
                    currentIndex
                    
                    // activeAnimationOptions={console.log('h')}
                    containerCustomStyle={
                        // {marginTop:-259}
                        {marginTop:0}
                    }
                //   onSnapToItem = { (carousel) => setCoords({}) }
                // onSnapToItem={()=>setCoords(coordinates.currentindex)}
                onSnapToItem={() => {onCarouselItemChange(),setCod(dataRef.current.currentIndex)}}
                /> */}

            </View>
        </View>
    );
}

export default map;

{/* <MapView style={Styles.map}
                    region={destination}
                    mapType={'hybrid'}
                    showsUserLocation={true}
                    showsCompass={true}
                    loadingEnabled={true}
                    loadingBackgroundColor='rgb(241,246,255)'
                    loadingIndicatorColor='green'
                >
                    <Marker
                    // key={'name'}
                    // ref={ref => AgenciesData['name'] = ref}
                    onPress={() => {}}
                    coordinate={coords}
                    title={'Apple Campus'}
                    style={{
                        justifyContent:'center',
                        alignContent:'center',
                        alignSelf:'flex-start',
                        alignItems:'center'
                    }}
                    >
                
                
                </Marker> */}
                    

                // </MapView>
