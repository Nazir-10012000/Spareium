import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import Styles from '../Stylesheet/Styles';
import { Dimensions } from 'react-native';
import Toast from 'react-native-easy-toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
// function onResult(QuerySnapshot) {
//   console.log('result.');
// }

// function onError(error) {
//   console.error(error);
// }

// firestore()
//   .collection('spareium-123')
//   .onSnapshot(onResult, onError);

const SignupScreen = ({ navigation }) => {
    const WIDTH = (Dimensions.get('window').width) / 375;
    const HEIGHT = (Dimensions.get('window').height) / 812;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [Cpassword, setCpassword] = useState('');
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState('');

    const isDataValid = () => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (name.trim() == '') {
            toast.show('Please enter your full Name.', 1000);
        }
        else if (email.trim() == '') {
            toast.show('Email should not be empty.', 1000);
        }
        else if (pattern.test(String(email).toLowerCase())) {
            if (password == '') {
                toast.show('Please enter password', 1000);
            }
            else if (password.length < 8) {
                toast.show('Password should be of minimum 8 characters', 1000);
            }
            else {
                if (Cpassword == '')
                    toast.show('Please enter Confirm Password', 1000);
                else if (Cpassword === password) {



                    auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(() => {
                            // console.log('User account created & signed in!');
                            
                             database()
                                .ref(`/users/${auth().currentUser.uid}`)
                                .set({
                                    name: name,
                                    email: email,
                                    lastMsg: '',
                                })
                                .then(() => {
                                    console.log("user added to Database!", newRef.key);
                                });

                                firestore()
                                .collection('spareium-123')
                                .doc('users')
                                .collection('spareiumUsers')
                                .doc(auth().currentUser.uid)
                                .set({
                                    email: email,
                                    name: name,
                                    password: password,
                                })
                                .then(() => {
                                    console.log('User added to fireStore!');
                                });
                                
                                navigation.navigate('Menu')

                        })
                        .catch(error => {
                            if (error.code === 'auth/email-already-in-use') {
                                console.log('That email address is already in use!');
                            }
                        });


                }
                else
                    toast.show('Password doesn\'t match', 1000);
            }
        }
        else
            toast.show('Please enter correct email address.', 1000);
    }

    // function onAuthStateChanged(user) {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    // }, []);

    // if (initializing) return null;

    //   if (!user) {
    //     return (
    //       <View>
    //         <Text>Login</Text>
    //       </View>
    //     );
    //   }

    return (
        <ImageBackground source={require('../img/bgcar.png')} style={Styles.Image} >
            <KeyboardAwareScrollView>

                <View >
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image source={require('../img/back000.png')} style={{
                            marginTop: HEIGHT * 60, marginLeft: WIDTH * 22,
                            height: HEIGHT * 24,
                        }} />
                    </TouchableOpacity>

                    <View style={{ paddingHorizontal: WIDTH * 30, marginTop: HEIGHT * 36, }}>
                        <Image source={require('../img/spareium.png')} style={{
                            height: HEIGHT * 51, resizeMode: 'contain', width: WIDTH * 190
                        }} />
                        <Text style={{
                            fontSize: HEIGHT * 25, letterSpacing: 0.69,
                            color: 'rgb(74,74,74)', marginTop: 0, marginBottom: 31
                        }}>Create an account</Text>
                        <View style={[Styles.input, {
                            flexDirection: 'row',
                            borderColor: 'rgb(1,54,176)', alignItems: 'center', marginVertical: HEIGHT * 10, height: HEIGHT * 60
                        }]}>
                            <TextInput
                                style={{ flex: 1, fontSize: HEIGHT * 17, color: 'rgb(0,0,0)', }}
                                placeholder='Full Name'
                                placeholderTextColor='rgb(155,155,155)'
                                onChangeText={(name) => setName(name)}
                                value={name}

                            />
                            <Image source={require('../img/user.png')} style={{
                                width: WIDTH * 24, height: HEIGHT * 24, marginLeft: WIDTH * 15, resizeMode: 'contain'
                            }} />
                        </View>
                        <View style={[Styles.input, {
                            flexDirection: 'row',
                            borderColor: 'rgb(1,54,176)', alignItems: 'center', marginVertical: HEIGHT * 10, height: HEIGHT * 60
                        }]}>
                            <TextInput
                                style={{ flex: 1, fontSize: HEIGHT * 17, color: 'rgb(0,0,0)', }}
                                placeholder='Email'
                                placeholderTextColor='rgb(155,155,155)'
                                onChangeText={(email) => setEmail(email)}
                                value={email}
                                keyboardType='email-address'

                            />
                            <Image source={require('../img/mailIcon.png')} style={{
                                width: WIDTH * 24, height: HEIGHT * 19, marginLeft: WIDTH * 15
                            }} />
                        </View>
                        <View style={[Styles.input, {
                            flexDirection: 'row',
                            borderColor: 'rgb(1,54,176)', alignItems: 'center',
                            marginVertical: HEIGHT * 10, height: HEIGHT * 60
                        }]}>
                            <TextInput
                                style={{ flex: 1, fontSize: HEIGHT * 17, color: 'rgb(0,0,0)' }}
                                placeholder="Password"
                                placeholderTextColor='rgb(155,155,155)'
                                onChangeText={(password) => setPassword(password)}
                                value={password}
                                secureTextEntry
                            />
                            <Image source={require('../img/lockIcon.png')} style={{
                                width: WIDTH * 24, height: HEIGHT * 32, marginLeft: WIDTH * 15, resizeMode: 'contain'
                            }} />
                        </View>
                        <View style={[Styles.input, {
                            flexDirection: 'row',
                            borderColor: 'rgb(1,54,176)', alignItems: 'center',
                            marginVertical: HEIGHT * 10, height: HEIGHT * 60
                        }]}>
                            <TextInput
                                style={{ flex: 1, fontSize: HEIGHT * 17, color: 'rgb(0,0,0)' }}
                                placeholder="Confirm Password"
                                placeholderTextColor='rgb(155,155,155)'
                                onChangeText={(Cpassword) => setCpassword(Cpassword)}
                                value={Cpassword}
                                secureTextEntry
                            />
                            <Image source={require('../img/lockIcon.png')} style={{
                                width: WIDTH * 24, height: HEIGHT * 32, marginLeft: WIDTH * 15, resizeMode: 'contain'
                            }} />
                        </View>

                        <TouchableOpacity
                            onPress={() => isDataValid()}
                            style={[Styles.input, {
                                backgroundColor: 'rgb(248,115,28)', alignItems: 'center', justifyContent: 'center',
                                marginTop: HEIGHT * 19, height: HEIGHT * 60, width: WIDTH * 180,
                            }]} >
                            <Text style={{
                                fontSize: HEIGHT * 19, letterSpacing: 0.53,

                                fontWeight: 'bold',
                                color: 'rgb(255,255,255)'
                            }}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flex: 1, flexDirection: 'row',
                        alignItem: 'center',
                        justifyContent: 'center', marginTop: HEIGHT * 80
                    }}>
                        <Text style={{
                            fontSize: (HEIGHT) * 15, fontWeight: 'bold',
                            color: 'rgb(74,74,74)', letterSpacing: 0.42,

                        }}>Already have an account?
                </Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={{
                                color: 'rgb(1,54,176)', fontWeight: 'bold',
                                letterSpacing: 0.42, fontSize: (HEIGHT) * 15,
                            }}> Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAwareScrollView>
            <Toast ref={(toast) => this.toast = toast}
                positionValue={75}
                style={{ backgroundColor: 'red', width: '100%', paddingHorizontal: 40 }}
                position='bottom'

                fadeInDuration={750}
                fadeOutDuration={1000}
                opacity={0.8}
                textStyle={{ fontSize: 20, color: 'white', }}
            />
        </ImageBackground>
    );
}
export default SignupScreen;