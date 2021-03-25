import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import KeyWeather from "./utils";
import styles from "./styles";

const ApiCall = () => {
  const [data, setData] = useState("");
  const [name, setCity] = useState("");
  const getWeather = async (name) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8e9dc3f6ca6ab3d137177b31875b9a30`
      );
      const data = response.json();
      setData(data);
      console.log("seiaaaa");
    } catch (error) {
      throw Error(error);
    }
    console.log(data);
  };
  return (
    <View>
      <Text style={styles.title}> Weather </Text>
      <TextInput onChangeText={(text) => setCity(text)} />
      <Button title="Press me" onPress={() => getWeather(name)} />
    </View>
  );
};

export default ApiCall;
