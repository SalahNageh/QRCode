import * as React from 'react';
import {Button} from 'react-native-paper';

const ButtonComponent = ({text, onPressFun}) => (
  <Button icon="link" mode="contained" onPress={onPressFun}>
    {text}
  </Button>
);

export default ButtonComponent;
