import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";
import DisplayLovePercentage from "./components/DisplayLovePercentage";
export default class App extends React.Component {
  state = {
    fname: "",
    sname: "",
    result: "loading"
  };

  Submitit = () => {
    // console.log("call ho rha ha");
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${
        this.state.fname
      }&sname=${this.state.sname}`,
      {
        headers: {
          "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
          "X-RapidAPI-Key": "378e416a3cmsh59cde3128b51ddbp1883b2jsndbe88d20ab06"
        }
      }
    )
      .then(data => data.json())
      .then(data => this.setState({ result: data }));
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Header */}
        <Appbar.Header>
          <Appbar.Content
            title="Love % Calculator"
            style={{ alignItems: "center" }}
          />
        </Appbar.Header>

        <TextInput
          label="Fname"
          style={styles.textInput}
          value={this.state.fname}
          onChangeText={text => this.setState({ fname: text })}
        />

        <TextInput
          label="Sname"
          style={styles.textInput}
          value={this.state.sname}
          onChangeText={text => this.setState({ sname: text })}
        />

        <Button
          style={{ margin: 10 }}
          icon="mood"
          mode="contained"
          onPress={this.Submitit}
        >
          Click Me
        </Button>
        <DisplayLovePercentage data={this.state.result} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue"
    // justifyContent: "center",
    // alignItems: "center"
  },
  textInput: {
    margin: 5
  }
});
