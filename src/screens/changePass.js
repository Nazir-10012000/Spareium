import React from 'react';
import {View,Text,TextInput,Dimensions,TouchableOpacity,Image} from 'react-native';
import Styles from '../Stylesheet/Styles';
const ChangePassword = ({navigation}) =>{
    const WIDTH = (Dimensions.get('window').width) / 375;
    const HEIGHT = (Dimensions.get('window').height) / 812;

    return(
        <View style={[Styles.settingsbody,{ } ]}>
             <View style={Styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: 'white' }}>
                    <Image source={require('../img/backBlack.png')}
                        style={{

                            marginLeft: WIDTH * 19, width: WIDTH * 14,
                            height: HEIGHT * 24, resizeMode: 'contain'
                        }}
                    />
                </TouchableOpacity>
                <Text style={Styles.cp}>Change Password</Text>
                
            </View>
            <View style={{
                    paddingHorizontal:WIDTH*20,
                    marginTop:HEIGHT*40,
                }}>
                <Text style={Styles.fieldName}>Old Password</Text>
                <TextInput 
                    style={Styles.field}
                    
                />
                <Text style={Styles.fieldName}>New Password</Text>
                <TextInput 
                    style={Styles.field}
                    
                />
                <Text style={Styles.fieldName}>Confirm Password</Text>
                <TextInput 
                    style={Styles.field}
                    
                />
               
                </View>
                <TouchableOpacity onPress={()=>{}}
                    style={{ backgroundColor:'rgb(1,54,176)',
                            marginTop:HEIGHT*279,
                            alignItems:'center',
                            justifyContent:'center',
                            height:HEIGHT*100
                    }}
                    >
                        <Text style={[Styles.cardTitle,{color:'white'}]}>Next</Text>
                    </TouchableOpacity>
        </View>
    );
}
export default ChangePassword;