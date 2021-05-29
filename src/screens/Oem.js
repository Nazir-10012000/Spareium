import React,{useState} from 'react';
import { View, Text,TextInput, TouchableOpacity, ImageBackground, Dimensions, Image,ScrollView }
  from 'react-native';
import Styles from '../Stylesheet/Styles'
import { KeyboardAwareScrollView } 
from 'react-native-keyboard-aware-scroll-view';
import store from '../store';
import {OEM1} from '../actions';
import { connect } from 'react-redux';

const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;

const OEM = ({navigation}) => {
    const [oem,setOem] = useState('');
    return (
        <KeyboardAwareScrollView> 
        <View>
      <View style={Styles.oem}>
        
          <TextInput 
          placeholder='Search by OEM/VIN'
          placeholderTextColor='rgb(155,155,155)'
          keyboardType="numeric"
          onChangeText={(oem) => {setOem(oem);}}
          value={oem}
          onSubmitEditing={ (oem) => { store.dispatch(OEM1(oem));navigation.navigate('Results')}}
          style={{fontSize:HEIGHT*17,color:'black',letterSpacing:WIDTH*0.47,width:WIDTH*260}}
          />
          <Image source={require('../img/searchIcon.png')} 
            style={{height:HEIGHT*24,width:WIDTH*23,resizeMode:'contain',marginVertical:HEIGHT*16}}/>
      </View>
      
      <TouchableOpacity onPress={() =>{ store.dispatch(OEM1(oem)); navigation.navigate('Results')}} 
      style={[Styles.searchBtn,{marginTop:HEIGHT*320}]}>
        <Text style={{fontSize:HEIGHT*19,letterSpacing:WIDTH*1,
          color:'white',lineHeight:HEIGHT*21, fontWeight:'600'}}>Search</Text>
      </TouchableOpacity>
      </View>
      </KeyboardAwareScrollView>
    );
  }
  const mapStateToProps = state => {
  
    const oem =state.oem.oem;
    return { oem };
  };
 export default connect(mapStateToProps) (OEM);
  
 