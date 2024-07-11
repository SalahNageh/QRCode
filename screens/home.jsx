import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  const handleCamer = () => {
    navigation.navigate('Camera');
  };
  const handleQrCode = () => {
    navigation.navigate('QRCode');
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          <Text style={{color: 'red'}}>QR</Text> Code Reader
        </Text>
      </View>
      <View style={styles.cameraContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={handleCamer}>
            <AntDesign name="camera" size={60} color="white"></AntDesign>
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              onPress={handleQrCode}
              name="qrcode"
              size={60}
              color="white"></AntDesign>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {fontSize: 30, textAlign: 'center', marginTop: '5%'},
  cameraContainer: {flex: 1, marginTop: '10%'},
  rowContainer: {
    flexDirection: 'row',

    justifyContent: 'space-around',
  },
});

export default Home;
