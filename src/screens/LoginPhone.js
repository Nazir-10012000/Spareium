import React,{useState} from 'react';
import{ Text,View,TouchableOpacity,ImageBackground,Image,TextInput} from 'react-native';
import Styles from '../Stylesheet/Styles';
import { Dimensions } from 'react-native';
import Toast from 'react-native-easy-toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const loginPhone = ({ navigation })=>{
    const [contact, setContact] = useState('');
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    

    const isContactValid =() => {
        if( contact == '')
            {toast.show('Please enter your 10 digit Mobile Number',1000)}
         else if(contact.length < 10 || contact.length > 11){
            toast.show('Mobile Number should be of 10 or 11 digits',1000)
         }
         else{
             let notp = Math.floor(Math.random() * (9999 - 1000)) + 1000;

             console.log(notp);
            
             navigation.navigate('Otp')
         }
    }
    return(
        <ImageBackground source={require('../img/bg.png')} style={Styles.Image} >
        <KeyboardAwareScrollView>
            <View >
                <TouchableOpacity onPress ={ () => { navigation.goBack()}}>
                <Image source={require('../img/back.png')} style={[Styles.back,
                {marginTop: (HEIGHT / 812) * 60, height: HEIGHT / 812 * 24,}]} />
                </TouchableOpacity>
                <View style={{ paddingHorizontal: (WIDTH / 375) * 60, }}>
                    <Image source={require('../img/logo.png')} style={Styles.logo}/>
                </View>
                <View style={{
                        marginTop:HEIGHT/812*92,
                        paddingHorizontal:WIDTH/375* 39.5,
                        alignItems:'center',
                        height:HEIGHT/812*24,}}>
                    <Text style={{ 
                        fontSize:HEIGHT/812*17, 
                        letterSpacing:0.88, fontWeight:'400',
                        color:'rgb(255,255,255)',}}>Enter your mobile number</Text>
                </View>
                <View style={{ paddingHorizontal: (WIDTH / 375) * 30, marginTop: (HEIGHT / 812) * 37, }}>
                    
                    
                    <View style={[Styles.inputPhone,]}>
                        <TextInput
                            style={{ flex:1,fontSize: HEIGHT / 812 * 17, 
                                color: 'white',
                            paddingHorizontal:30,
                            textAlign:'center', 
                            letterSpacing:2}}
                            onChangeText={(contact) => setContact(contact)}
                            value={contact}
                            maxLength={11}
                            keyboardType="numeric"
                        />
                        
                    </View>
                    <TouchableOpacity
                        onPress={() => isContactValid()}
                        style={[Styles.inputPhone, {
                            backgroundColor: 'rgb(248,115,28)',
                            borderRadius: HEIGHT / 812 * 15,
                            marginTop: HEIGHT / 812 * 69,
                            alignItems:'center'
                        }]} >
                        <Text style={{
                            fontSize: HEIGHT / 812 * 18.5, letterSpacing: 0.53,
                            marginTop: HEIGHT / 812 * 18,
                            fontWeight: 'bold',
                            color: 'rgba(255,255,255,0.7)'
                        }}>
                            Send OTP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
        <Toast ref={(toast) => this.toast = toast}
        positionValue={75}
        style={{backgroundColor:'red', width:'100%',paddingHorizontal:40}}
        position='bottom'
            
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={{fontSize:20,color:'white',}}
        />
    </ImageBackground>
);

}
export default loginPhone;