import React, { useState } from "react";
import { Button, Text, TextInput, View, Alert } from "react-native";
import { KeyWeather } from "./utils";
import styles from "./styles";
import NormalUi from "../NormalUi/index";

const ApiCall = () => {
  const [name, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [pressure, setPressure] = useState("");
  const [icon, setIcon] = useState("");
  const [sunrise, setSunrise] = useState(0);
  const [sunset, setSunset] = useState(0);
  const [desc, setDesc] = useState("");

  const getWeather = async (name) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${KeyWeather.apiKey}`
      )
        .then((res) => res.json())
        .then((json) => {
          setTemp(round(json.main.temp - 272.15));
          setPressure(json.main.pressure);
          setIcon(json.weather[0].icon);
          const unixTimeSunrise = json.sys.sunrise;
          const dateSunrise = new Date(unixTimeSunrise * 1000);
          setSunrise(dateSunrise.toLocaleTimeString("pl"));
          const unixTimeSunset = json.sys.sunset;
          const dateSunset = new Date(unixTimeSunset * 1000);
          setSunset(dateSunset.toLocaleTimeString("pl"));
          setDesc(json.weather[0].description);
        });
      console.log("seiaaaa");
    } catch (error) {
      Alert.alert("Nie ma takiego miasta");
      throw Error(error);
    }
    console.log(name);
    console.log(temp);
    console.log(pressure);
    console.log(icon);
    console.log(sunrise);
    console.log(sunset);
    console.log(desc);
  };

  const round = (temp) => {
    let a = temp * 100 + 0.5;
    let finalTemp = Math.trunc(a / 100);
    return finalTemp;
  };

  return (
    <View>
      <Text style={styles.title}> Weather </Text>
      <TextInput onChangeText={(text) => setCity(text)} />
      <Button title="Press me" onPress={() => getWeather(name)} />
      <NormalUi
        name={name}
        temp={temp}
        pressure={pressure}
        icon={icon}
        sunrise={sunrise}
        sunset={sunset}
        desc={desc}
      />
    </View>
  );
};

export default ApiCall;
