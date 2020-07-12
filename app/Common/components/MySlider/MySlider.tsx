import React, {Component} from 'react';
import {View, Text, Slider, StyleSheet} from 'react-native';

const MySlider = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>{props.lable}</Text>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          maximumValue={100}
          onValueChange={props.onValueChange}
          value={props.value}
        />
        <Text>{props.value}</Text>
      </View>
    </View>
  );
};

export {MySlider};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  slider: {
    marginTop: 10,
    flex: 1,
  },
  sliderContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
