import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const QRCodeScanner = ({navigation}) => {
  const onBarCodeRead = dataObject => {
    navigation.navigate('Test', {qrData: dataObject.data});
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        onBarCodeRead={onBarCodeRead}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        captureAudio={false}>
        <View style={styles.overlay}>
          <View style={[styles.edge, styles.top]} />
          <View style={[styles.edge, styles.bottom]} />
          <View style={[styles.edge, styles.left]} />
          <View style={[styles.edge, styles.right]} />
          <View style={styles.qrFrame}>
            <Text style={styles.qrText}>Scan QR Code</Text>
          </View>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrFrame: {
    borderWidth: 4,
    borderColor: '#FFFFFF',
    width: '80%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrText: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  edge: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  top: {
    top: 0,
    left: 0,
    right: 0,
    height: '25%',
  },
  bottom: {
    bottom: 0,
    left: 0,
    right: 0,
    height: '25%',
  },
  left: {
    top: '25%',
    bottom: '25%',
    left: 0,
    width: '10%',
  },
  right: {
    top: '25%',
    bottom: '25%',
    right: 0,
    width: '10%',
  },
});

export default QRCodeScanner;
