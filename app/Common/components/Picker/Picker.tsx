import React, { useState } from "react";
import { View, Picker as ReactNativePicker, StyleSheet } from "react-native";

const Picker = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <ReactNativePicker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <ReactNativePicker.Item label="Java" value="java" />
        <ReactNativePicker.Item label="JavaScript" value="js" />
      </ReactNativePicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export  {Picker};