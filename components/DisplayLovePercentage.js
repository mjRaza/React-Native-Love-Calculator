import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";
const DisplayLovePercentage = ({ data }) => {
  console.log(data);
  if (data == "loading") {
    return (
      <Text
        style={{
          textAlign: "center",
          fontSize: 30
        }}
      >
        Wait
      </Text>
    );
  }
  if (data.message) {
    return (
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          backgroundColor: "red"
        }}
      >
        Try Again
      </Text>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>{data.percentage}</Text>
        <Text style={{ fontSize: 30 }}>{data.result}</Text>
      </View>
    );
  }
};

export default DisplayLovePercentage;
styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center"
  }
});
