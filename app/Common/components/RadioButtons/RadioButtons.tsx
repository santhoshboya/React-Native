import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const RadioButtons = (props: any) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.lable}>{props.lable}</Text>
      <RadioForm
        radio_props={props.radioProps}
        initial={0}
        wrapStyle={styles.buttonStyle}
        buttonColor={'grey'}
        selectedButtonColor={'black'}
        onPress={props.onValueChange}
        buttonWrapStyle={{marginLeft: 10}}
        animation={true}
        buttonSize={10}
        buttonOuterSize={20}
        labelStyle={styles.buttonLable}
        formHorizontal={true}
      />
    </View>
  );
};
export {RadioButtons};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  lable: {
    marginRight: 20,
  },
  buttonLable: {
    fontSize: 12,
    marginRight: 18,
  },
  buttonStyle: {},
});
