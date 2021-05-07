import React,{useState} from 'react';
import{ Text,View,TouchableOpacity,ImageBackground,Image,} from 'react-native';
import Styles from '../Stylesheet/Styles';
import { Dimensions } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OTPInputView from '@twotalltotems/react-native-otp-input'


const otpScreen = ({  navigation })=>{
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    // var { notp } = route.params;
    const [code, setCode] = useState('');
    const [otp, setOtp] = useState('');
    // alert("your OTP is ",notp)
    const isOtpValid =() => {
        if( code == otp ){
        navigation.navigate('Menu')
        } else{

            toast.show('Please check OTP',1000)
        }
    }
    return(
        <ImageBackground source={require('../img/bg.png')} style={Styles.Image} >
        <KeyboardAwareScrollView>
            
                <TouchableOpacity onPress ={ () => { navigation.navigate('LoginPhone')}}>
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
                        color:'rgb(255,255,255)',}}>Enter OTP</Text>
                </View>

                <View style={{ paddingHorizontal: (WIDTH / 375) * 30,
                     marginTop: (HEIGHT / 812) * 45, }}>
                 {/* <OTPInputView
                    style={{width:300 , height: 53,marginHorizontal:7.5}}
                    pinCount={4}
                    // autoFocusOnLoad
                    codeInputFieldStyle={Styles.otpBox}
                    codeInputHighlightStyle={Styles.otpBox}
                    onCodeFilled = {(code) => {
                        setCode(code)
                    }}
                /> */}
                    <Text style={{ 
                        fontSize:HEIGHT/812*21,
                        letterSpacing:0.88, fontWeight:'400',
                        color:'rgb(255,255,255)',}}>The OTP input view is generating issue in android</Text>

                    <TouchableOpacity
                        onPress={() => isOtpValid()}
                        style={[Styles.inputPhone, {
                            backgroundColor: 'rgb(248,115,28)',
                            borderRadius: HEIGHT / 812 * 15,
                            marginTop: HEIGHT / 812 * 68,
                            alignItems:'center'
                        }]} >
                        <Text style={{
                            fontSize: HEIGHT / 812 * 19, letterSpacing: 0.53,
                            marginTop: HEIGHT / 812 * 17,
                            fontWeight: 'bold',
                            color: 'rgba(255,255,255,0.7)'
                        }}>
                            Verify
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                        flex: 1, flexDirection: 'row',
                        alignItem: 'center',
                        justifyContent: 'center',
                        marginTop: HEIGHT / 812 * 32
                    }}>
                        <Text style={{
                            fontSize: (HEIGHT / 812) * 15, 
                            color: 'rgba(255, 255, 255, 0.75)', letterSpacing: 0.44,

                        }}>Didn't receive a code?
                </Text>

                        <TouchableOpacity
                            onPress={()=> {
                                var a;
                                a= Math.floor(Math.random() * (9999 - 1000)) + 1000;
                                console.log(a);
                                setOtp(a);
                               
                            }}
                        >
                            <Text style={{
                                color: 'rgba(255, 255, 255, 0.8)', fontWeight: 'bold',
                                letterSpacing: 0.44, fontSize: (HEIGHT / 812) * 15,
                            }}> Resend</Text>
                        </TouchableOpacity>
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
export default otpScreen;