import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, Linking, Image} from 'react-native';
import ButtonComponent from '../components/buttonComponent';

const TestScreen = ({route, navigation}) => {
  const {qrData} = route.params;
  console.log(qrData);

  return (
    <View style={styles.container}>
      <View style={styles.txtView}>
        <Text style={styles.txt}>Test Screen</Text>
      </View>

      <View style={styles.rowContainer}>
        <ButtonComponent
          text="Visit website"
          onPressFun={() => {
            Linking.openURL(qrData);
          }}></ButtonComponent>
        <ButtonComponent
          text="Go to home"
          onPressFun={() => {
            navigation.navigate('Home');
          }}></ButtonComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtView: {
    backgroundColor: '#7fffd4',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'black',
    width: '80%',
    aspectRatio: 3,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  txt: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  urlBtn: {},
});

export default TestScreen;
