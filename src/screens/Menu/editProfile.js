import React,{useState} from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import Styles from '../../Stylesheet/Styles';
import {Avatar} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import { TextInput } from 'react-native-gesture-handler';
const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;

const EditProfile = ({ navigation }) => {
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
            <Avatar source={auth().currentUser.photoURL}
            size={154}
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
                <Image source={require('../../img/pencil.png')} 
                        style={{height:HEIGHT*24, width:WIDTH*24,resizeMode:'contain'}}
                />
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
                    defaultValue={auth().currentUser.location}
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