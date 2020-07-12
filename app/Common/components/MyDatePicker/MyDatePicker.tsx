import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import {Text, StyleSheet, View} from 'react-native';

const MyDatePicker = (props: any) => {
  const onDateChange = (date: any) => {
    props.onDateChange(date);
  };
  return (
    <View style={styles.container}>
      <Text>{props.lable}</Text>
      <DatePicker
        style={styles.datePicker}
        date={props.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2026-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={onDateChange}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  datePicker: {
    width: 200,
    marginLeft: 50,
  },
});
export {MyDatePicker};
