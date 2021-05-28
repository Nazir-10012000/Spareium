import React,{useCallback, useState} from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, ImageBackground,TextInput,Button } from 'react-native';
import Styles from '../../Stylesheet/Styles';
import {Avatar} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
// import { utils } from '@react-native-firebase/app';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;

// const url =  storage()
//   .ref('jason.jpg')
//   .getDownloadURL();

const EditProfile = ({ navigation }) => {
const [loc,setLoc] = useState('');
    const [filePath, setFilePath] = useState({});
    const [userName,setUserName] =useState('');
    const [mail,setMail] =useState('');
    




   const imgPicker =() =>{
    var options = {
        mediaType:'photo',
        includeBase64:false,
        
     };
     launchImageLibrary(options, response => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else {
          setFilePath(response);

        }
     });
     
//      firebase.auth().currentUser.updateProfile({
//         photoURL:filePath.url,
//      });
   }
  const a = firebase.firestore()
        .collection('spareium-123')
        .doc('users')
        .collection('spareiumUsers')
        .doc(auth().currentUser.uid)
        .get()
  .then(documentSnapshot => {
    
    //   console.log('User data: ', documentSnapshot.data());
      setLoc(documentSnapshot.data().location);
    
})
        // console.log(location,"location");

//   console.log(filePath.uri,"name ******* ",filePath.fileName);
//   console.log(auth().currentUser.photoURL);
//   const reference = storage().ref(filePath.uri);
//   // path to existing file on filesystem
//   const pathToFile = '../../img/logo.png';
//   // uploads file ${utils.FilePath.PICTURES_DIRECTORY}/${filePath.fileName}
//    reference.putFile(pathToFile);
    return(
        <View style={[Styles.settingsbody,{ } ]}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: 'white' }}>
                    <Image source={require('../../img/backBlack.png')}
                        style={{

                            marginLeft: WIDTH * 19, width: WIDTH * 14,
                            height: HEIGHT * 24, resizeMode: 'contain'
                        }}
                    />
                </TouchableOpacity>
                <Text style={Styles.settings}>Edit Profile</Text>
                
            </View>
            <View style={{
                  marginTop:HEIGHT*47,
                  width:WIDTH* 154,
                  height:WIDTH* 154,
                  
                  backgroundColor:'rgb(0,115,216)',
                  borderRadius:100,
                  justifyContent:'center',
                  alignItems:'center',
                  alignSelf:'center'
              }}>
            <Avatar 
            // source={auth().currentUser.photoURL}
            source={{uri:filePath.uri}}
            size={WIDTH*151.5}
            rounded
                />
                </View>
                
                <View style={{
                  
                  width:WIDTH* 44,
                  height:WIDTH* 44,
                  marginTop:WIDTH* -143,
                  marginLeft:WIDTH *230,
                  backgroundColor:'rgb(0,115,216)',
                  borderRadius:100,
                  justifyContent:'center',
                  alignItems:'center',
                  
              }}>
                  <TouchableOpacity onPress={()=>{console.log("click");imgPicker();}}>
                <Image source={require('../../img/pencil.png')} 
                        style={{height:HEIGHT*24, width:WIDTH*24,resizeMode:'contain'}}
                />
                </TouchableOpacity>
                </View>
                
                <View style={{
                    paddingHorizontal:WIDTH*20,
                    marginTop:HEIGHT*140,
                }}>
                <Text style={Styles.fieldName}>Full Name</Text>
                <TextInput 
                    style={Styles.field}
                    defaultValue={auth().currentUser.displayName}
                />
                <Text style={Styles.fieldName}>Email ID</Text>
                <TextInput 
                    style={Styles.field}
                    defaultValue={auth().currentUser.email}
                />
                <Text style={Styles.fieldName}>Location</Text>
                <TextInput 
                    style={Styles.field}
                    defaultValue={loc}
                />
                </View>
                
                <TouchableOpacity onPress={()=>{}}
                    style={{ backgroundColor:'rgb(1,54,176)',
                            marginTop:HEIGHT*93,
                            flex:1,alignItems:'center'
                    }}>
                        <Text style={[Styles.cardTitle,{color:'white',marginTop:HEIGHT*21,}]}>Next</Text>
                    </TouchableOpacity>
            
        </View>
    );
}
export default EditProfile;