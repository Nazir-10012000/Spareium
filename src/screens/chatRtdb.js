import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, ScrollView, Image, TextInput, FlatList } from 'react-native';
import Styles from '../Stylesheet/Styles';
import { Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view';
// import { ActivityIndicator } from 'react-native';
const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;

const chatRtdb = ({ route, navigation }) => {
    const { na } = route.params;
    const { Email } = route.params;
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [messages, setMessages] = useState([]); // Initial empty array of users

    let date = new Date();
    const activeUserEmail = auth().currentUser.email;
    //   console.log(auth().currentUser);
    useEffect(() => {
        const subscriber = database()
            .ref('/chat')
            .on('value', snapshot => {
                const user = [];
                snapshot.forEach(childSnapshot => {

                    if (activeUserEmail == childSnapshot.val().senderUid) {
                        if (childSnapshot.val().senderUid == activeUserEmail && childSnapshot.val().recieverUid == Email) {
                            user.push({
                                ...childSnapshot.val(),
                                key: childSnapshot.id,

                            });
                        }
                    }
                    else {
                        if (childSnapshot.val().senderUid == Email && childSnapshot.val().recieverUid == activeUserEmail) {
                            user.push({
                                ...childSnapshot.val(),
                                key: childSnapshot.id,

                            });
                        }
                    }

                });
            
        setMessages(user);
        setLoading(false);
    });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
}, []);


if (loading) {
    return <ActivityIndicator />;
}

const noResults = () => {
    return (
        <View style={{
            justifyContent: 'center', alignContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: HEIGHT * 25,
                color: 'rgb(111,111,111)', marginTop: HEIGHT * 200,
                fontWeight: '600', letterSpacing: WIDTH * 1
            }}>
                No Messages Yet!
              </Text>
        </View>

    );
}

const sendMsg = () => {
    setText('');
    if (text != "") {
        const newRef = database()
            .ref('/chat')
            .push();

        newRef
            .set({
                senderUid: auth().currentUser.email,
                recieverUid: Email,
                msg: text,
                createdAt: date,
            })
            .then(() => console.log('massege set to database.'));

            firebase.messaging().sendMessage({
                MSG:text,
              });

    }
}
return (

    <View style={{ backgroundColor: 'white', flex: 1 }}>

        <View style={{
            flexDirection: 'row',
            marginTop: HEIGHT * 54,
            marginHorizontal: WIDTH * 30,
        }}
        >
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../img/backBlack.png')}
                        style={{ height: HEIGHT * 24, width: WIDTH * 13, resizeMode: 'contain' }} />
                </TouchableOpacity>
                <View style={Styles.userImgStyle}>

                    <Avatar
                        size={60}
                        rounded
                        source={require('../img/char.jpg')}
                    />
                </View>

                <View style={{
                    alignContent: 'space-around',
                    justifyContent: 'space-between',
                    width: WIDTH * 180,
                    marginRight: WIDTH * 15,

                }}>
                    <Text style={{
                        fontSize: HEIGHT * 15, letterSpacing: WIDTH * 0.44,
                        color: 'rgb(0,0,0)', lineHeight: HEIGHT * 21,
                        fontWeight: '700',
                    }}>{na}</Text>
                    <Text style={{
                        fontSize: HEIGHT * 13, fontWeight: '500', letterSpacing: WIDTH * 0.38,
                        lineHeight: HEIGHT * 17, color: 'rgb(1,54,176)',
                    }}>Tata Nexon Turbo Charger petrol Engine</Text>
                </View>
            </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: HEIGHT * 25, alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'rgb(228,228,228)' }} />
            <View>
                <Text style={{
                    fontSize: HEIGHT * 13, fontWeight: '500',
                    letterSpacing: WIDTH * 0.38, lineHeight: HEIGHT * 18,
                    color: 'rgb(117,117,117)', alignSelf: 'center',

                }}>
                    Today {date.getDate()} {date.toLocaleString('default', { month: 'short' })} {date.getFullYear()}
                </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'rgb(228,228,228)' }} />
        </View>



        <FlatList
            data={messages}
            ListEmptyComponent={noResults}
            style={{
                marginTop: HEIGHT * 13,
                paddingHorizontal: WIDTH * 20,
            }}

            renderItem={({ item }) => {
                // let tt = item.createdAt.toDate().toDateString();
                if (item.senderUid == auth().currentUser.email) return (
                    <View>
                        <View style={Styles.sentmsgView}>
                            <Text style={Styles.sentmsgText}>{item.msg}</Text>
                        </View>

                        <Text style={{
                            marginVertical: HEIGHT * 7,
                            fontSize: HEIGHT * 14, letterSpacing: WIDTH * 0.38,
                            color: 'rgb(117,117,117)', alignSelf: 'flex-end',
                            lineHeight: HEIGHT * 16,
                        }}>{item.senderUid}</Text>
                    </View>
                );
                else
                    return (
                        <View>
                            <View style={Styles.recievedMsgView}>
                                <Text style={Styles.recievedMsgText}>{item.msg}</Text>
                            </View>

                            <Text style={{
                                marginVertical: HEIGHT * 7,
                                fontSize: HEIGHT * 14, letterSpacing: WIDTH * 0.38,
                                color: 'rgb(117,117,117)', alignSelf: 'flex-start',
                                lineHeight: HEIGHT * 16,
                            }}>{item.senderUid}</Text>
                        </View>
                    );

            }}
        />

        {/* <KeyboardAwareScrollView> */}

        <View style={Styles.sendMsgView}>
            <View style={{
                flexDirection: 'row', backgroundColor: 'rgb(240,240,240)',
                borderRadius: HEIGHT * 8, height: HEIGHT * 40,
                width: '100%', paddingHorizontal: WIDTH * 18.5,
                justifyContent: 'space-between',
                alignItems: 'center',
            }} >
                <TextInput
                    placeholder='Write your message… '
                    placeholderTextColor='rgb(117,117,117)'
                    clearButtonMode='while-editing'
                    onChangeText={(value) => setText(value)}
                    value={text}
                    onSubmitEditing={() => sendMsg()}
                    style={{
                        fontSize: HEIGHT * 15,
                        letterSpacing: WIDTH * 0.38,
                        width: WIDTH * 237,
                        height: HEIGHT * 40,
                    }}
                />
                <TouchableOpacity onPress={() => console.log('hello')}>
                    <Image source={require('../img/attech.png')}
                        style={{ height: HEIGHT * 23, width: WIDTH * 23, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sendMsg()}>
                    <Image source={require('../img/send.png')}
                        style={{ height: HEIGHT * 23, width: WIDTH * 23, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
            </View>

        </View>

        {/* </KeyboardAwareScrollView> */}
    </View>

);
}
export default chatRtdb;