// import 'react-native-gesture-handler';
import React, {Fragment} from 'react';
import HomeScreen from './screens/Home';
import Login from './screens/Login';
import loginPhone from './screens/LoginPhone';
import otpScreen from './screens/OtpScreen';
import SignupScreen from './screens/Signup';
import MenuScreen from './screens/Menu';
import SearchAutoparts from './screens/SearchAutoparts';
import foundResult from './screens/foundResult';
//
import leadDetail from './screens/Menu/LeadDetails';
import EditProfile from './screens/Menu/editProfile';

import FindManuals from './screens/FindManual';
// import resultDetail from './screens/resultDetail';
import findAgency from './screens/findAgency';
// import map from './screens/map';
import workspace from './screens/workspace';
import usersRtdb from'./screens/usersRtdb';
import users from './screens/users';
import chatScreen from './screens/chat';
import chatRtdb from './screens/chatRtdb';
import ChangePassword from './screens/changePass';
import PushNote from './screens/pushNotification';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

const Stack= createStackNavigator();
const Root = ()=> {
  // console.log(auth().currentUser);
  let ini = "Home"
  if (auth().currentUser){
    ini="Menu"
  }
  return (
    <Fragment>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ini} screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginPhone" component={loginPhone} />
        <Stack.Screen name="Otp" component={otpScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="SearchAP" component={SearchAutoparts} />
        <Stack.Screen name="LeadDetail" component={leadDetail} />
        <Stack.Screen name='Results' component={foundResult} />
        <Stack.Screen name="FindManuals" component={FindManuals} />
        <Stack.Screen name="FindAgency" component={findAgency} />
        {/* <Stack.Screen name="ResultDetail" component={resultDetail}/> */}
        {/* <Stack.Screen name='Map' component={map}/> */}
        <Stack.Screen name='users' component={users} /> 
        <Stack.Screen name ='usersRtdb' component={usersRtdb} />
         <Stack.Screen name='chat' component={chatScreen} />
         <Stack.Screen name ="chatRtdb" component ={chatRtdb} />
         <Stack.Screen name='Workspace' component={workspace} />
         <Stack.Screen name='EditProfile' component={EditProfile} />
         <Stack.Screen name='ChangePassword' component={ChangePassword} />
      </Stack.Navigator>
      
    </NavigationContainer>
     <PushNote />
     </Fragment>
  );
}



// import React from 'react';
// import {View,Text} from 'react-native';
// const App =() =>{
//   return(
//   <View>
//     <Text>adsfa asdf asdf asdfg asdfgas adsg</Text>
//     <Text>adsfa asdf asdf asdfg asdfgas adsg</Text>
//     <Text>adsfa asdf asdf asdfg asdfgas adsg</Text>
//     <Text>adsfa asdf asdf asdfg asdfgas adsg</Text>
//   </View>
//   );
// }
export default Root;