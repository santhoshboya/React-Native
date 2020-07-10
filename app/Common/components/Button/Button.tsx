import React from 'react';
import { StyleSheet, Button as ReactNativeButton} from 'react-native';

const Button=(props:any)=>{
    <ReactNativeButton
        title={props.titie}
        onPress={props.onPress}
      />
}

export {Button}