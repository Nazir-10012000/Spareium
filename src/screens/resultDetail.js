import React from 'react';
import { View, Text, Dimensions }
  from 'react-native';
import Styles from '../Stylesheet/Styles';

const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;

const resultDetail = () =>{
    return( 
        <View style={{ justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Text style={{ fontSize:HEIGHT*25,
          color:'rgb(111,111,111)',marginTop:HEIGHT*200,
          fontWeight:'600',letterSpacing:WIDTH*1}}>
          No Data Found!
        </Text>
      </View>
    );
}
export default resultDetail;