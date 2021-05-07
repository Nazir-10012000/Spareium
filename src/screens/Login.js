import React,{useState} from 'react';
import { 
    Text,
    View,
    TouchableOpacity, 
    ImageBackground, 
    Image, 
    TextInput,
    Dimensions } from 'react-native';
import Styles from '../Stylesheet/Styles';

// import Icon from 'react-native-vector-icons';
import Toast from 'react-native-easy-toast';
import { KeyboardAwareScrollView } 
from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    
    
    const isEmailValid = () => {
       
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(email.trim()==''){
            toast.show('Email block should not be empty.',1000);
        }
        else if(pattern.test(String(email).toLowerCase())){
            if(password == ''){
                toast.show('Please enter Password',1000);
            }
            else if(password.length < 8){
                toast.show('Password should be of minimum 8 characters',1000);
            }
            else{
                if( contact == '')
                    toast.show('Please enter Contact Number',1000);
                else if( contact.length == 10){
                  
                    auth()
                        .signInWithEmailAndPassword(email, password)
                        .then(() => {
                             console.log('User signed in!');
                             navigation.navigate('Menu')
                             
                          })
                        .catch(error => {
                         if (error.code === 'auth/user-not-found') {
                            console.log('wrong email!');
                            alert('Wrong email or password!')
                         }
                         if (error.code === 'auth/wrong-password'){
                             console.log('wrong password');
                             alert('Wrong email or password!')
                         }
                        });
                    // navigation.navigate('Menu')
                }
                else
                toast.show('contact should be 10 charaters',1000); 
            }
        }
        else{
        toast.show('Please Enter Right Email Address.',1000);
        }
        
    }

   

    return (
        
        <ImageBackground source={require('../img/bg.png')} style={Styles.Image} >
            <KeyboardAwareScrollView>
                <View >
                    <TouchableOpacity onPress ={ () => { navigation.goBack()}}>
                    <Image source={require('../img/back.png')} style={Styles.back} />
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: (WIDTH / 375) * 60, }}>
                        <Image source={require('../img/logo.png')} style={Styles.logo}
                            style={{ 
                                marginTop: HEIGHT / 812 * 17, 
                                height: HEIGHT / 812 * 225, 
                                resizeMode: 'contain' }}
                            />
                    </View>
                    
                    <View style={{ paddingHorizontal: (WIDTH / 375) * 30, marginTop: (HEIGHT / 812) * 57, }}>
                        <View style={[Styles.input, { flexDirection: 'row' }]}>
                            <TextInput
                                style={{ flex: 1, fontSize: HEIGHT / 812 * 17, color: 'white' }}
                                placeholder='Email ID'
                                placeholderTextColor='rgb(255,255,255)'
                                onChangeText={(email) => setEmail(email)}
                                value={email}
                                keyboardType='email-address'

                            />
                            {/* <Icon
                                style={{ marginTop: HEIGHT / 812 * 16.5 }}
                                name='mail-outline'
                                color='#fff'
                                size={18}
                            /> */}
                        </View>
                        <View style={[Styles.input, { flexDirection: 'row' }]}>
                            <TextInput
                                style={{ flex: 1, fontSize: HEIGHT / 812 * 17, color: 'white' }}
                                placeholder="Password"
                                placeholderTextColor='rgb(255,255,255)'
                                onChangeText={(password) => setPassword(password)}
                                value={password}
                                secureTextEntry
                            />
                            {/* <Icon
                                style={{marginTop: HEIGHT / 812 * 16.5 }}
                                name='lock-open'
                                color='#fff'
                                size={18}
                            /> */}
                        </View>
                        <View style={[Styles.input, { flexDirection: 'row' }]}>
                            <TextInput
                                style={{ flex: 1, fontSize: HEIGHT / 812 * 17, color: 'white'}}
                                placeholder="Contact"
                                placeholderTextColor='rgb(255,255,255)'
                                onChangeText={(contact) => setContact(contact)}
                                value={contact}
                                keyboardType="numeric"
                            />
                            {/* <Icon
                                style={{ marginTop: HEIGHT / 812 * 16.5 }}
                                name='smartphone'
                                color='#fff'
                                size={18}
                            /> */}
                        </View>
                        <Text style={{
                            fontSize: (HEIGHT / 812) * 13,
                            letterSpacing: 0.36,
                            color: 'rgb(255,255,255)',

                        }}>Forgot Password?</Text>

                        <TouchableOpacity
                            onPress={() => isEmailValid()}
                            style={[Styles.input, {
                                backgroundColor: 'rgb(248,115,28)',
                                borderRadius: HEIGHT / 812 * 15,
                                marginTop: HEIGHT / 812 * 23,
                            }]} >
                            <Text style={{
                                fontSize: HEIGHT / 812 * 19, letterSpacing: 0.53,
                                marginTop: HEIGHT / 812 * 14,
                                marginHorizontal: WIDTH / 375 * 111,
                                fontWeight: 'bold',
                                color: 'rgba(255,255,255,0.7)'
                            }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flex: 1, flexDirection: 'row',
                        alignItem: 'center',
                        justifyContent: 'center', marginTop: HEIGHT / 812 * 16
                    }}>
                        <Text style={{
                            fontSize: (HEIGHT / 812) * 15, fontWeight: 'bold',
                            color: 'rgba(255, 255, 255, 0.5)', letterSpacing: 0.42,

                        }}>New User
                </Text>

                        <TouchableOpacity
                            onPress={()=> navigation.navigate('SignUp')}
                        >
                            <Text style={{
                                color: 'rgba(255, 255, 255, 0.75)', fontWeight: 'bold',
                                letterSpacing: 0.42, fontSize: (HEIGHT / 812) * 15,
                            }}> Signup</Text>
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
export default Login;