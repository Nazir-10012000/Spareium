// import 'react-native-gesture-handler';
import React, {Fragment} from 'react';
import HomeScreen from './src/screens/Home';
import Login from './src/screens/Login';
import loginPhone from './src/screens/LoginPhone';
import otpScreen from './src/screens/OtpScreen';
import SignupScreen from './src/screens/Signup';
import MenuScreen from './src/screens/Menu';
import SearchAutoparts from './src/screens/SearchAutoparts';
import foundResult from './src/screens/foundResult';
//
import leadDetail from './src/screens/Menu/LeadDetails';
import EditProfile from './src/screens/Menu/editProfile';

import FindManuals from './src/screens/FindManual';
// import resultDetail from './src/screens/resultDetail';
import findAgency from './src/screens/findAgency';
// import map from './src/screens/map';
import workspace from './src/screens/workspace';
import usersRtdb from'./src/screens/usersRtdb';
import users from './src/screens/users';
import chatScreen from './src/screens/chat';
import chatRtdb from './src/screens/chatRtdb';
import ChangePassword from './src/screens/changePass';
import PushNote from './src/screens/pushNotification';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

const Stack= createStackNavigator();
const App = ()=> {
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

export default App;

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
// export default App;