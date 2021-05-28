import React, { useState,useEffect } from 'react';
import { View, ImageBackground, Image,Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import Styles from '../Stylesheet/Styles';
import { Dimensions } from 'react-native';
import Menu from '../screens/Menu/MenuScr';
import myLeads from '../screens/Menu/MyLeads';
import myConnects from '../screens/Menu/MyConnects';
import settings from '../screens/Menu/settings';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView} from
 '@react-navigation/drawer';
 import auth from '@react-native-firebase/auth';
import PushNotification from 'react-native-push-notification';
// import firebase from '@react-native-firebase/app';
import {firebase} from '@react-native-firebase/firestore';
import  database from '@react-native-firebase/database';
import messaging from '@react-native-firebase/messaging';

const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;
const Drawer = createDrawerNavigator();

const DrawerContent=({navigation}) => {
  const activeUserEmail =auth().currentUser.email;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const subscriber = database()
        .ref('/chat')
        .on('value', snapshot => {
            const user = [];
            snapshot.forEach(childSnapshot => {

                if (activeUserEmail == childSnapshot.val().recieverUid) {
                    
                        user.push({
                            ...childSnapshot.val(),
                            key: childSnapshot.id,

                        });
                    
                }
                
            });
            
        
    setMessages(user);
  
});
// Unsubscribe from events when no longer in use
return () => subscriber();
}, []);

var l =messages.length;
console.log(messages[l -1],"length", l);
const a =l;

  // PushNotification.localNotification({
  //   channelId:'spareium-123',
  //   title:'hello',
  //   message: "Spareium",
  // });
  
  //  const usersCollection = firebase.firestore()
  // .collection('spareium-123')
  // .doc('users')
  // .get();
// useEffect( () => {
//   if (messages.length == a + 1){
//     console.log("hii");
//   }
// });
firebase.messaging().onMessage(message => {
  console.log('Received a message');
});
  function getUserName(documentSnapshot) {
    return documentSnapshot.get('name');
  }
-
firebase.firestore()
.collection('spareium-123')
.doc('users')
.collection('spareiumUsers')
.doc(auth().currentUser.uid)
.get()
.then(documentSnapshot => getUserName(documentSnapshot))
  .then(name => {
    firebase.auth().currentUser.updateProfile({
      displayName: name,
    }) 
  });
  
  return (

    <DrawerContentScrollView >
      <View>
        <View style={Styles.userInfoSection}>
          <ImageBackground
            style={Styles.bell}
            source={require('../img/bellRed.png')}>
            <Image source={require('../img/ovalRed.png')}
            rounded
              style={{
                height: HEIGHT * 13, width: WIDTH * 13,
                marginLeft: WIDTH * 10, marginTop: HEIGHT * 2
              }} />
          </ImageBackground>
          <ImageBackground
            style={Styles.user}
            source={require('../img/oval.png')}

          >
            <Avatar
  rounded
  size={WIDTH*82}
  source={require('../img/char.jpg')}
/>
            </ImageBackground>
          <Text style={Styles.title}>{auth().currentUser.displayName}</Text>
        </View>
        <View>
          <ImageBackground style={{ flex: 1, flexDirection: 'row', height: HEIGHT * 80, width: WIDTH * 260, marginTop: HEIGHT * 39 }}
            source={require('../img/orangeRectangle.png')}>
            <ImageBackground source={require('../img/oRectangle.png')}
              style={{ height: HEIGHT * 60, width: WIDTH * 70,justifyContent:'center',alignItems:'center' }}>
              <Image source={require('../img/car.png')}
                style={{ height: HEIGHT * 28, width: WIDTH * 30,resizeMode:'contain'}}>

              </Image>

            </ImageBackground>
            <Text
              style={{
                fontSize: HEIGHT * 17, lineHeight: HEIGHT * 21,
                letterSpacing: WIDTH * 0.47,
                color: 'rgb(255,255,255)', marginLeft: WIDTH * 12,
                marginTop: HEIGHT * 18
              }}>Sell Parts</Text>
          </ImageBackground>
          <ImageBackground style={{ flex: 1, flexDirection: 'row', height: HEIGHT * 80, width: WIDTH * 260 }}
            source={require('../img/greenRectangle.png')}>
            <ImageBackground source={require('../img/gRectangle.png')}
              style={{ height: HEIGHT * 60, width: WIDTH * 70 ,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('../img/interface.png')}
                style={{ height: HEIGHT * 24, width: WIDTH * 24,resizeMode:'contain'}}>

              </Image>
            </ImageBackground>
            <Text
              style={{
                fontSize: HEIGHT * 17, lineHeight: HEIGHT * 21,
                letterSpacing: WIDTH * 0.47,
                color: 'rgb(255,255,255)', marginLeft: WIDTH * 12,
                marginTop: HEIGHT * 18
              }}>My Enquiry</Text>
          </ImageBackground>
        </View>
        <View style={{ paddingLeft: WIDTH * 14 }}>
          <DrawerItem
            icon={( ) => (
              <Image
                source={require('../img/Home.png')}
                style={{ height: HEIGHT * 21, width: WIDTH * 24 }}
                resizeMode="contain"
              />
            )}
            label={() => (<Text style={Styles.DrawerItem}>Home</Text>)}
            onPress={() => { navigation.navigate('Menu');}}
          />
          <DrawerItem
            icon={( ) => (
              <Image
                source={require('../img/MyLeads.png')}
                style={{ height: HEIGHT * 21, width: WIDTH * 24 }}
                resizeMode="contain"
              />
            )}
            label={() => (<Text style={Styles.DrawerItem}>My Leads</Text>)}
            onPress={() => {navigation.navigate('Leads');
            //  console.log(usersCollection);
            }}
          />
          <DrawerItem
            icon={( ) => (
              <Image
                source={require('../img/Connects.png')}
                style={{ height: HEIGHT * 21, width: WIDTH * 24 }}
                resizeMode="contain"
              />
            )}
            label={() => (<Text style={Styles.DrawerItem}>Connects</Text>)}
            onPress={() => navigation.navigate('Connects')}
          />
          <DrawerItem
            icon={() => (
              <Image
                source={require('../img/Settings.png')}
                style={{ height: HEIGHT * 21, width: WIDTH * 24 }}
                resizeMode="contain"
              />
            )}
            label={() => (<Text style={Styles.DrawerItem}>Settings</Text>)}
            onPress={() => navigation.navigate('Settings')}
          />
          <DrawerItem
            icon={( ) => (
              <Image
                source={require('../img/LogOut.png')}
                style={{ height: HEIGHT * 21, width: WIDTH * 24 }}
                resizeMode="contain"
              />
            )}
            label={() => (<Text style={Styles.DrawerItem}>Log Out</Text>)}
            onPress={() =>{ auth()
              .signOut()
              .then(() => console.log('User signed out!'))
            navigation.navigate('Home')
          }}
          />
        </View>
      </View>
    </DrawerContentScrollView>

  );
}
const MenuScreen = () => {
  
  
  const WIDTH = (Dimensions.get('window').width) / 375;
  
  return (

    

      <Drawer.Navigator initialRouteName='Menu'
        drawerStyle={{ backgroundColor: 'rgb(1,54,176)', width: WIDTH * 260, }}
        drawerType='back'
        edgeWidth={40}
        header={false}
        hideStatusBar={false}
        statusBarAnimation='none'
        minSwipeDistance={100}
        overlayColor='transparent'
        backBehavior='history'
        //lazy='8000'
        drawerContent={({navigation}) => <DrawerContent navigation={navigation} />}

      >
        
        <Drawer.Screen name='Menu' component={Menu} />
        <Drawer.Screen name="Leads" component={myLeads} />
        <Drawer.Screen name="Connects" component={myConnects} />
        <Drawer.Screen name="Settings" component={settings} />
      </Drawer.Navigator>


 
  );
}
export default MenuScreen;