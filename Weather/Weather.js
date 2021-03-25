import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { KeyWeather } from "./utils";

export class Weather extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}> Weather </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
