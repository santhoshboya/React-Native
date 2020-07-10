import * as React from 'react';
import { Checkbox as RectNativeCheckBox } from 'react-native-paper';

const CheckBox = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <RectNativeCheckBox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export {CheckBox};