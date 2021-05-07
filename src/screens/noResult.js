import React from 'react';
import {View,Text} from 'react-native';
const noResults = () => {
    
    return (
        <View style={{ justifyContent: 'center',flex:1,
         alignItems: 'center' }}>
            <Text style={{
                fontSize:25,
                color: 'rgb(111,111,111)',
                fontWeight: '600', letterSpacing:1
            }}>
                No Data Found!
          </Text>
        </View>

    );
}
export default noResults;