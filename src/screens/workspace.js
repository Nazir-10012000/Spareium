import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { INCREAMENT1,DECREAMENT1 } from '../actions';
import store from '../store'
const workspace = ({navigation}) => {
    const goBack= '<  Go Back.'
   
    store.dispatch(INCREAMENT1);
    store.dispatch(function (dispatch,getState) {
        // ... which themselves may dispatch many times
        dispatch(INCREAMENT1)
        dispatch(INCREAMENT1)
        dispatch(INCREAMENT1)
        const as =getState();
      console.log(as,"asdfsd");
        setTimeout(() => {
          // ... even asynchronously!
          dispatch(DECREAMENT1)
        }, 1000)
      })
    // store.dispatch(incremented())
    return (
        <View style= {{ justifyContent:'center', alignItems:'center',backgroundColor:'white',flex:1}}>
            
            <TouchableOpacity 
            onPress={()=>navigation.goBack()}
            style={{ 
                justifyContent:'center',height:35,backgroundColor:'black',flex:0.2,
               width:'100%',alignItems:'center'
            }}>
                <Text style={{ color:'white',fontSize:18,fontWeight:'600'}}>
                  {goBack}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('users')}
            style={{
                justifyContent:'center',height:35,backgroundColor:'red',flex:0.4,
               width:'100%',alignItems:'center'
            }}>
                <Text style={{ color:'white',fontSize:18,fontWeight:'600'}}>
                    Chat using "Cloud Firestore".
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('usersRtdb')}
            style={{ 
                justifyContent:'center',height:35,backgroundColor:'blue',flex:0.4,
                width:'100%',alignItems:'center'
            }}>
                <Text style={{ color:'white',fontSize:18,fontWeight:'600'}}>
                    Chat using "Realtime Database".
                </Text>
            </TouchableOpacity>

        </View>
    )
}
export default workspace;