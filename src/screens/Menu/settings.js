import React,{useState} from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import Styles from '../../Stylesheet/Styles';
import {Avatar,Switch} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;

const settings = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    return (
        <View style={Styles.settingsbody}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ backgroundColor: 'white' }}>
                    <Image source={require('../../img/menuIcon.png')}
                        style={{

                            marginLeft: WIDTH * 20, width: WIDTH * 24,
                            height: HEIGHT * 17, resizeMode: 'contain'
                        }}
                    />
                </TouchableOpacity>
                <Text style={Styles.settings}>Settings</Text>
            </View>
            <View style={{
                height: HEIGHT * 121,
                marginTop: HEIGHT * 10,
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems:'center'

            }}>
                <View style={{
                  
                    width:WIDTH* 81,
                    height:WIDTH* 81,
                    marginLeft: WIDTH * 22,
                    backgroundColor:'rgb(0,115,216)',
                    borderRadius:50,justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Image
                        source={require('../../img/char.jpg')}
                        rounded
                        style={{
                            height: WIDTH * 79,
                            width: WIDTH * 79,
                            borderRadius: 50,
                        }}
                    />
                </View>
                <View style={{
                    marginLeft: WIDTH * 20,
                    width:WIDTH*219,
                }}>
                    <Text style={Styles.displayName}>{auth().currentUser.displayName}</Text>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image source={require('../../img/location.png')} 
                            style={{ height:HEIGHT*22.5,width:WIDTH*15.7,resizeMode:'contain'}}
                            />
                        <Text style={Styles.city}>New York City</Text>
                    </View>
                </View>
                <View style={{
                   
                }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
                    <Image 
                        source={require('../../img/carret.png')} 
                        style={{ height:HEIGHT*11,width:WIDTH*16,resizeMode:'contain'}}
                    />
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={{
                        flexDirection:'row',backgroundColor:'white',
                        height:HEIGHT*50, justifyContent:'space-between',marginVertical:HEIGHT*10,
                        alignItems:'center',paddingHorizontal:WIDTH*20,
                }}>
                    <Text style={{fontSize:HEIGHT*17, fontWeight:'600',
                          color:'rgb(74,74,74)', letterSpacing:WIDTH*0.47,  
                        }}>Change Password</Text>
                        <TouchableOpacity onPress={()=>{}}>
                    <Image 
                        source={require('../../img/carret.png')} 
                        style={{ height:HEIGHT*11,width:WIDTH*16,resizeMode:'contain'}}
                    />
                    </TouchableOpacity>
                </View>
                <View style={{
                        flexDirection:'row',backgroundColor:'white',
                        height:HEIGHT*50, justifyContent:'space-between',marginVertical:HEIGHT*10,
                        alignItems:'center',paddingHorizontal:WIDTH*20,
                }}>
                    <Text style={{fontSize:HEIGHT*17, fontWeight:'600',
                          color:'rgb(74,74,74)', letterSpacing:WIDTH*0.47,  
                        }}>Payments</Text>
                        <TouchableOpacity onPress={()=>{}}>
                    <Image 
                        source={require('../../img/carret.png')} 
                        style={{ height:HEIGHT*11,width:WIDTH*16,resizeMode:'contain'}}
                    />
                    </TouchableOpacity>
                </View>
                <View style={{
                        flexDirection:'row',backgroundColor:'white',
                        height:HEIGHT*50, justifyContent:'space-between',marginVertical:HEIGHT*10,
                        alignItems:'center',paddingHorizontal:WIDTH*20,
                }}>
                    <Text style={{fontSize:HEIGHT*17, fontWeight:'600',
                          color:'rgb(74,74,74)', letterSpacing:WIDTH*0.47,  
                        }}>Notification</Text>
                        <Switch
        trackColor={{ false: "rgba(0,0,0,0.1)", true: "rgb(6,217,100)" }}
        thumbColor="white"
        // ios_backgroundColor="blue"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
                </View>
                <View style={{
                        flexDirection:'row',backgroundColor:'white',
                        height:HEIGHT*50, justifyContent:'space-between',marginVertical:HEIGHT*10,
                        alignItems:'center',paddingHorizontal:WIDTH*20,
                }}>
                    <Text style={{fontSize:HEIGHT*17, fontWeight:'600',
                          color:'rgb(74,74,74)', letterSpacing:WIDTH*0.47,  
                        }}>Arebic Version</Text>
                        <Switch
                         disabled
        trackColor={{ false: "rgba(0,0,0,0.1)", true: "rgb(6,217,100)" }}
        thumbColor="white"
        // ios_backgroundColor="blue"
        onValueChange={toggleSwitch1}
        value={isEnabled1}
      />
                </View>
                <View style={{
                        flexDirection:'row',backgroundColor:'white',
                        height:HEIGHT*50, justifyContent:'space-between',marginVertical:HEIGHT*10,
                        alignItems:'center',paddingHorizontal:WIDTH*20,
                }}>
                    <Text style={{fontSize:HEIGHT*17, fontWeight:'600',
                          color:'rgb(74,74,74)', letterSpacing:WIDTH*0.47,  
                        }}>Location Services</Text>
                        <Switch
        trackColor={{ false: "rgba(0,0,0,0.1)", true: "rgb(6,217,100)" }}
        thumbColor="white"
        // ios_backgroundColor="blue"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      />
                </View>

        </View>
    );
};
export default settings;