import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TextInput as AddressField,
  View,
  ScrollView,
} from 'react-native';
import {TextInput} from '../../components/TextInput/TextInput';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import I18n from '../../i18n/i18n';
import {
  SignInFormWrapper,
  FormTitle,
  FormTitleTag,
  HeaderPart,
  NamesView,
  FormView,
} from './styledComponents';
import {RadioButtons} from '../../components/RadioButtons';
import {Picker} from '../../components/Picker';
import {MyDatePicker} from '../../components/MyDatePicker';
import {MySlider} from '../../components/MySlider';
import {MyCheckBox} from '../../components/MyCheckBox';
import {Button} from '../../components/Button';

@observer
class SignInFormScene extends Component {
  @observable firstName!: string;
  @observable lastName!: string;
  @observable mobileNumber!: string;
  @observable email!: string;
  @observable password!: string;
  @observable confirmPassword!: string;
  @observable gender!: string;
  @observable branch!: string;
  @observable dob!: string;
  @observable address!: string;
  @observable typingSpeed: number = 50;
  @observable acceptance: boolean = true;
  onChangeFirstName = (value: string) => {
    this.firstName = value;
  };
  onChangeLastName = (value: string) => {
    this.lastName = value;
  };
  onChangeMobileNumber = (value: string) => {
    this.mobileNumber = value;
  };
  onChangeEmail = (value: string) => {
    this.email = value;
  };
  onChangePassword = (value: string) => {
    this.password = value;
  };
  onChangeConfirmPassword = (value: string) => {
    this.confirmPassword = value;
  };
  onChangeGender = (value: string) => {
    this.gender = value;
  };
  onChangeBranch = (value: string) => {
    this.branch = value;
  };
  onChangeDob = (value: string) => {
    this.dob = value;
  };
  onChangeAddress = (value: string) => {
    this.address = value;
  };
  onChangeTypingSpeed = (value: number) => {
    this.typingSpeed = Math.floor(value);
  };
  onChangeAcceptance = (value: boolean) => {
    this.acceptance = value;
  };
  onSubmit = () => {};
  render() {
    return (
      <SignInFormWrapper>
        <HeaderPart style={styles.headerPart}>
          <FormTitle>{I18n.t('SignUpForm.signUp')}</FormTitle>
          <FormTitleTag>{I18n.t('SignUpForm.titleTag')}</FormTitleTag>
        </HeaderPart>

        <FormView>
          <NamesView>
            <TextInput
              onChangeText={this.onChangeFirstName}
              inputValue={this.firstName}
              inputStyles={styles.nameFiled}
              placeHolder={I18n.t('SignUpForm.firstName')}
            />
            <TextInput
              onChangeText={this.onChangeLastName}
              inputValue={this.lastName}
              inputStyles={styles.nameFiled}
              placeHolder={I18n.t('SignUpForm.lastName')}
            />
          </NamesView>
          <TextInput
            onChangeText={this.onChangeMobileNumber}
            inputValue={this.mobileNumber}
            inputStyles={styles.inputFiled}
            placeHolder={I18n.t('SignUpForm.mobileNumber')}
          />
          <TextInput
            onChangeText={this.onChangeEmail}
            inputValue={this.email}
            inputStyles={styles.inputFiled}
            placeHolder={I18n.t('SignUpForm.email')}
          />
          <TextInput
            onChangeText={this.onChangePassword}
            inputValue={this.password}
            inputStyles={styles.inputFiled}
            placeHolder={I18n.t('SignUpForm.password')}
          />
          <TextInput
            onChangeText={this.onChangeConfirmPassword}
            inputValue={this.confirmPassword}
            inputStyles={styles.inputFiled}
            placeHolder={I18n.t('SignUpForm.confirmPassword')}
          />
          <RadioButtons
            radioProps={genderProps}
            onValueChange={this.onChangeGender}
            lable={I18n.t('SignUpForm.selectYourGender')}
          />
          <Picker
            optionsList={branchProps}
            selectedValue={this.branch}
            onValueChange={this.onChangeBranch}
            lable={I18n.t('SignUpForm.selectYourBranch')}
          />
          <MyDatePicker
            onDateChange={this.onChangeDob}
            date={this.dob}
            lable={I18n.t('SignUpForm.dob')}
          />

          <View style={styles.addressFieldContainer}>
            <Text>{I18n.t('SignUpForm.enterYourAddress')}</Text>
            <AddressField
              onChangeText={this.onChangeAddress}
              value={this.address}
              style={styles.addressField}
              placeholder={I18n.t('SignUpForm.typeYourAddressHere')}
              numberOfLines={4}
            />
          </View>
          <MySlider
            value={this.typingSpeed}
            lable={I18n.t('SignUpForm.selectYourTypingSpeed')}
            onValueChange={this.onChangeTypingSpeed}
          />
          <View style={styles.addressFieldContainer}>
            <MyCheckBox
              isSelected={this.acceptance}
              setSelection={this.onChangeAcceptance}
            />
            <Text style={styles.normalText}>
              {I18n.t('SignUpForm.iAcceptThe')}
              <Text style={styles.colorText}>
                {I18n.t('SignUpForm.termsOfUse')}
              </Text>
              &
              <Text style={styles.colorText}>
                {I18n.t('SignUpForm.privacyPolicy')}
              </Text>
            </Text>
          </View>
          <View style={styles.submitBtnWrapper}>
            <Button
              title={I18n.t('SignUpForm.signUp')}
              onPress={this.onSubmit}
            />
          </View>
        </FormView>
      </SignInFormWrapper>
    );
  }
}
export {SignInFormScene};

const genderProps = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Others', value: 'Others'},
];

const branchProps = [
  {label: 'CSE', value: 'CSE'},
  {label: 'ECE', value: 'ECE'},
  {label: 'Others', value: 'Others'},
];

const styles = StyleSheet.create({
  nameFiled: {
    backgroundColor: '#f5f5f5',
    width: '48%',
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  inputFiled: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  headerPart: {
    borderBottomColor: 'grey',
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  addressFieldContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressField: {
    borderColor: 'grey',
    borderWidth: 1,
    marginLeft: 10,
    flex: 1,
    justifyContent: 'flex-start',
  },
  colorText: {
    color: 'blue',
    paddingLeft: 10,
  },
  normalText: {
    color: 'grey',
    marginLeft: 25,
  },
  submitBtnWrapper: {
    width: '30%',
    marginLeft: '35%',
    marginTop: 15,
    marginBottom: 15,
  },
});
