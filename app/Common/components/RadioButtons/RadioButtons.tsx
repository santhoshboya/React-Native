import * as React from 'react';
import { View } from 'react-native';
import { RadioButton as ReactNativeRadioButton, Text } from 'react-native-paper';

const RadioButtons = () => {
  const [value, setValue] = React.useState('first');

  return (
    <ReactNativeRadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <View>
        <Text>First</Text>
        <ReactNativeRadioButton value="first" />
      </View>
      <View>
        <Text>Second</Text>
        <ReactNativeRadioButton value="second" />
      </View>
    </ReactNativeRadioButton.Group>
  );
};

export {RadioButtons};