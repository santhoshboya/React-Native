import * as React from 'react';

import {View, Text, CheckBox, StyleSheet} from 'react-native';

const MyCheckBox = (props: any) => {
  return (
    <CheckBox
      value={props.isSelected}
      onValueChange={props.setSelection}
      style={styles.checkbox}
    />
  );
};

export {MyCheckBox};
const styles = StyleSheet.create({
  checkbox: {
    width: 10,
    height: 10,
  },
});
