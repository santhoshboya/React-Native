import React, {useState} from 'react';
import {
  View,
  Picker as ReactNativePicker,
  StyleSheet,
  Text,
} from 'react-native';

const Picker = (props: any) => {
  const getItems = (itemsList: any) => {
    return itemsList.map((item: any) => (
      <ReactNativePicker.Item
        label={item.label}
        key={item.label}
        value={item.value}
      />
    ));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{props.lable}</Text>
      <ReactNativePicker
        selectedValue={props.selectedValue}
        style={styles.pickerStyle}
        onValueChange={props.onValueChange}>
        {getItems(props.optionsList)}
      </ReactNativePicker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  lable: {
    marginRight: 30,
  },
  pickerStyle: {
    height: 50,
    width: 150,
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
  },
});

export {Picker};
