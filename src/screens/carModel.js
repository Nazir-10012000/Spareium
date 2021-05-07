import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, Image}
  from 'react-native';
import Styles from '../Stylesheet/Styles';
import Swiper from 'react-native-swiper'



const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;

const DATA = [
  {
    id: 'Braking',
    image: require('../img/brakeDisc2.png'),

  },
  {
    id: 'Electrical',
    image: require('../img/electrical.png'),

  },
  {
    id: 'Engine',
    image: require('../img/engine.png'),

  },
  {
    id: 'Transmission',
    image: require('../img/transmission.png'),

  },
  {
    id: 'Turbo Charger',
    image: require('../img/turbo.png'),

  },
  {
    id: 'Heating & Cooling',
    image: require('../img/heat.png'),

  },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <View>
    <TouchableOpacity onPress={onPress} style={[Styles.item,]}>
      <View style={[backgroundColor, {
        height: HEIGHT * 70, width: WIDTH * 70, borderRadius: HEIGHT * 10,
        justifyContent: 'center', alignItems: 'center'
      }]}>
        <Image source={item.image}
          style={{
            height: HEIGHT * 50,
            width: WIDTH * 50,
            resizeMode: 'contain'
          }}
        />
      </View>
      <Text style={[Styles.txt, textColor]}>{item.id}</Text>
    </TouchableOpacity>

  </View>
);

const carModel = () => {
  const [selected, setSelected] = useState('null');

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selected ? "rgb(248,135,61)" : "white";
    const color = item.id === selected ? 'rgb(248,135,61)' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelected(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}

      />
    );
  };


  return (
    <View>
      <View style={Styles.carTable}>
        <View style={{
          flexDirection: 'row', paddingVertical: HEIGHT * 14,
          borderBottomWidth: 1, borderColor: 'rgb(227,227,227)',
        }}>
          <View style={{
            height: HEIGHT * 60, width: WIDTH * 155,
          }}>
            <Text style={{
              color: 'rgb(155,155,155)', lineHeight: HEIGHT * 21,
              letterSpacing: WIDTH * 0.5, fontSize: HEIGHT * 13, fontWeight: '700',
            }}>Car Maker</Text>
            <Text style={{
              letterSpacing: WIDTH * 0.5, fontSize: HEIGHT * 19,
              lineHeight: HEIGHT * 27, fontWeight: '600',
            }}>Tata</Text>
          </View>
          <View style={{
            height: HEIGHT * 60, width: WIDTH * 155,

            borderLeftWidth: 1, borderColor: 'rgb(227,227,227)',
            paddingLeft: WIDTH * 16

          }}>
            <Text style={{
              color: 'rgb(155,155,155)', lineHeight: HEIGHT * 21,
              letterSpacing: WIDTH * 0.5, fontSize: HEIGHT * 13, fontWeight: '700',
            }}>Model</Text>
            <Text style={{
              letterSpacing: WIDTH * 0.5, fontSize: HEIGHT * 19,
              lineHeight: HEIGHT * 27, fontWeight: '600',
            }}>Nexon</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: HEIGHT * 14, }}>

          <View style={{
            height: HEIGHT * 60, width: WIDTH * 155,

          }}>
            <Text style={{
              color: 'rgb(155,155,155)', lineHeight: HEIGHT * 21,
              letterSpacing: WIDTH * 0.5, fontSize: HEIGHT * 13, fontWeight: '700',
            }}>Varient</Text>
            <Text style={{
              letterSpacing: WIDTH * 0.5, fontSize: HEIGHT * 19,
              lineHeight: HEIGHT * 27, fontWeight: '600',
            }}>ZXA</Text>
          </View>
          <View style={{
            height: HEIGHT * 60, width: WIDTH * 155,
            paddingLeft: WIDTH * 16, borderLeftWidth: 1, borderColor: 'rgb(227,227,227)',

          }}>
            <Text style={{
              color: 'rgb(155,155,155)', lineHeight: HEIGHT * 21,
              letterSpacing: WIDTH * 0.5, fontSize: HEIGHT * 13, fontWeight: '700',
            }}>Year</Text>
            <Text style={{
              letterSpacing: WIDTH * 0.5, fontSize: HEIGHT * 19,
              lineHeight: HEIGHT * 27, fontWeight: '600',
            }}>2019</Text>
          </View>
        </View>
      </View>

      <Text style={{
        fontSize: HEIGHT * 15,
        letterSpacing: WIDTH * 1, color: 'rgb(74,74,74)',
        lineHeight: HEIGHT * 21, marginTop: HEIGHT * 23,
        marginHorizontal: HEIGHT * 21, fontWeight: '700'
      }}>Select Parts Catalogue</Text>

      <View style={{ height: HEIGHT * 290, width: WIDTH * 345 }}>
        <Swiper style={Styles.wrapper}
          showsButtons={false}
          loop={false}
          index={0}
          bounces={false}
          pagingEnabled={true}

        >

          <View style={Styles.Data}>
            <FlatList
              data={DATA}
              // horizontal={true}
              numColumns={3}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selected}
            />
          </View>


          <View style={Styles.Data}>
            <FlatList
              data={DATA}
              // horizonta={true}
              numColumns={3}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selected}
            />

          </View>

          <View style={Styles.Data}>
            <FlatList
              data={DATA}
              // horizonta={true}
              numColumns={3}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selected}
            />
          </View>
          <View style={Styles.Data}>
            <FlatList
              data={DATA}
              // horizonta={true}
              numColumns={3}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selected}
            />
          </View>
          <View style={Styles.Data}>
            <FlatList
              data={DATA}
              // horizonta={true}
              numColumns={3}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selected}
            />
          </View>
        </Swiper>
      </View>

      <TouchableOpacity onPress={() => { }}
        style={Styles.searchBtn}>
        <Text style={{
          fontSize: HEIGHT * 19, letterSpacing: WIDTH * 1,
          color: 'white', lineHeight: HEIGHT * 21, fontWeight: '600'
        }}>Search</Text>
      </TouchableOpacity>

    </View>

  );
}
export default carModel;