import React from 'react';
import {TextInput as ReactNativeTextInput} from 'react-native';

const TextInput = (props: any) => {
  const onChangeTextInput = (text: string) => {
    props.onChangeText(text);
  };

  return (
    <>
      <ReactNativeTextInput
        value={props.inputValue}
        onChangeText={text => onChangeTextInput(text)}
        style={props.inputStyles}
        placeholder={props.placeHolder}
      />
    </>
  );
};
export {TextInput};
