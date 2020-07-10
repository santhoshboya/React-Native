import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {TextInput} from '../../components/TextInput/TextInput';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
class SignInFormScene extends Component {
  @observable firstName!: string;
  onChangeFirstName = (value: string) => {
    this.firstName = value;
  };
  render() {
    return (
      <>
        <Text>SignInForm</Text>
        <TextInput
          onChangeText={this.onChangeFirstName}
          inputValue={this.firstName}
          inputStyles={styles.inputFiled}
        />
      </>
    );
  }
}
export {SignInFormScene};

const styles = StyleSheet.create({
  inputFiled: {
    backgroundColor: '#f5f5f5',
  },
});
