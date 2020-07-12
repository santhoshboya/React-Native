import React from 'react';
import {StyleSheet, Button as ReactNativeButton} from 'react-native';

const Button = (props: any) => {
  return <ReactNativeButton title={props.title} onPress={props.onPress} />;
};

export {Button};
