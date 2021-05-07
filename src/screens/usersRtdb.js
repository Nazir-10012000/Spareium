import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList,ActivityIndicator, Image, TextInput, } from 'react-native';
import Styles from '../Stylesheet/Styles';
import { Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';
import noResults from './noResult';
import auth from '@react-native-firebase/auth';
import database  from '@react-native-firebase/database';
// import {firebase} from '@react-native-firebase/app';
// import AsyncStorage from '@react-native-community/async-storage';
const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;


        
const usersRtdb = ({ navigation }) => {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users

    // const reference = database().ref('users/123');
    const activeUserEmail = auth().currentUser.email;
    
    
        
       useEffect(() => {
        const subscriber = database()
        .ref('/users')
        .once('value')
        .then(function(snapshot){ 
            let user = [];
            snapshot.forEach( function(childSnapshot){
                if(activeUserEmail != childSnapshot.val().email)
                user.push(childSnapshot.val());
                
            });
            
                setUsers(user);
                setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);


    if (loading) {
        return <ActivityIndicator 
            style={{ backgroundColor:'white',flex:1,}}
        />;
    }
    const Item = ({ item,}) => (
        <TouchableOpacity onPress={() =>{ navigation.navigate('chatRtdb',{na:item.name,Email:item.email})}}>
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                paddingHorizontal: WIDTH * 20,
                paddingVertical: HEIGHT * 20,
                height: HEIGHT * 106,
                shadowRadius: 10,
                shadowColor: 'rgb(0,0,0)',
                //   marginVertical:HEIGHT*10,
                borderTopWidth: HEIGHT * 2,
                borderColor: 'rgb(242,242,242)',
                justifyContent: 'space-between',
                alignContent: 'space-between',
            }}
        >
            <View style={Styles.userImgStyle}>
                
                    <Avatar
                        size={65}
                        rounded
                        source={
                            require('../img/char.jpg')
                    }
                    />
            </View>
    
            <View style={{
                alignContent: 'space-around',
                justifyContent: 'space-between',
                width: WIDTH * 165,
                // paddingHorizontal: WIDTH * 15,
    
            }}>
    
                <Text style={{
                    fontSize: HEIGHT * 15, letterSpacing: WIDTH * 0.44,
                    color: 'rgb(0,0,0)', lineHeight: HEIGHT * 21,
                    fontWeight: '700',
                }}>{item.name}</Text>
                <Text style={{
                    fontSize: HEIGHT * 13, fontWeight: '500', letterSpacing: WIDTH * 0.38,
                    lineHeight: HEIGHT * 17, color: 'rgb(117,117,117)',
                }}>{item.lastMsg}</Text>
    
    
            </View>
            <View style={{
                alignItems: 'flex-end',
                justifyContent: 'space-around'
            }}>
                <View style={{
                    backgroundColor: 'rgb(216,86,102)',
                    height: HEIGHT * 22,
                    width: WIDTH * 22, borderRadius: HEIGHT * 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={[, {
                        fontSize: HEIGHT * 13,
                        color: 'white',
                        fontWeight: '600',
                    }]}>{item.unreadMsg}</Text>
                </View>
                <Text style={[, {
                    fontSize: HEIGHT * 13, letterSpacing: WIDTH * 0.38,
                    lineHeight: HEIGHT * 17, color: 'rgb(117,117,117)',
                }]}>? min ago</Text>
    
            </View>
        </View>
        </TouchableOpacity>
      );
    
    
 
    const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
           
          />
        );
      };

        return (
        <View style={{ backgroundColor: 'rgb(255,255,255)', flex: 1 }}>
            <View style={{
                flexDirection: 'row',
                marginTop: HEIGHT * 53,
                marginHorizontal: WIDTH * 30,
            }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../img/backBlack.png')}
                        style={{ height: HEIGHT * 24, width: WIDTH * 13, resizeMode: 'contain' }} />
                </TouchableOpacity>
                <Text style={{
                    fontSize: HEIGHT * 23, letterSpacing: WIDTH * 0.68,
                    fontWeight: '700', color: 'rgb(74,74,74)',
                    lineHeight: HEIGHT * 31, marginLeft: WIDTH * 28,
                }}>Messages</Text>
            </View>

            <TextInput
                style={{
                    backgroundColor: 'rgb(240,240,240)', height: HEIGHT * 40,
                    borderRadius: HEIGHT * 8, marginHorizontal: WIDTH * 20,
                    marginVertical: HEIGHT * 16, fontSize: HEIGHT * 13,
                    letterSpacing: WIDTH * 0.38,
                    paddingHorizontal: WIDTH * 20,
                }}
                placeholderTextColor='rgb(117,117,117)'
                placeholder='Search'

            />
            
            <FlatList
                data={users}
                ListEmptyComponent={noResults}
                keyExtractor={(item) => item.email}
                renderItem={renderItem}
                  
            />
        </View>
        
    );
}
export default usersRtdb;