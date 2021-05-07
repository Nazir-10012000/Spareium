import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import Styles from '../Stylesheet/Styles';
import { Dimensions } from 'react-native';


const HomeScreen = ({ navigation }) => {
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;

  
  return (
    <ImageBackground source={require('../img/bg.png')} style={Styles.Image}>
      

          <View style={{ paddingHorizontal: (WIDTH / 375) * 60, }}>
            <Image source={require('../img/logo.png')} style={[Styles.logo, { marginTop: 102 }]} />
          </View>
          <View style={{ alignItems:'center' }}>
            <TouchableOpacity
              onPress={() => alert('Apple Login page is not raedy. Please try to login with other options.')}
              style={Styles.signinApple}>
              <Image source={require('../img/signbtn.png')}
                style={Styles.icon} />
            </TouchableOpacity>
          </View>
          <Text style={Styles.text}>- or sign in with -</Text>

          <View style={Styles.loginWith}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Image source={require('../img/mail.png')} style={Styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginPhone')}>
              <Image source={require('../img/phone.png')} style={Styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('not ready now!')}>
            <Image source={require('../img/facebook.png')} style={Styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{ 
              alert('not ready now!')
              // navigation.navigate('Menu')
          }}>
            <Image source={require('../img/google.png')} style={Styles.icons} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginTop: HEIGHT / 812 * 40, justifyContent: 'center' }}>
            <Text style={{
              fontSize: (HEIGHT / 812) * 15, fontWeight: 'bold',
              color: 'rgba(255, 255, 255, 0.5)', letterSpacing: 0.42,

            }}>New User
                </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={{
                color: 'rgba(255, 255, 255, 0.8)', fontWeight: 'bold',
                letterSpacing: 0.42, fontSize: (HEIGHT / 812) * 15,
              }}> Signup</Text>
            </TouchableOpacity>
          </View>

       
    
    </ImageBackground>
  );
}
export default HomeScreen;