import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import TestScreen from '../screens/TestScreen';
import {requireNativeComponent} from 'react-native';
import RNCameraComponent from '../components/rnCameraComponent';
import QRCodeScanner from '../components/qrCodeScanner';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Camera"
          component={RNCameraComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QRCode"
          component={QRCodeScanner}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Test"
          component={TestScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
