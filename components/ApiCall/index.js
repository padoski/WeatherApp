import React, { useState, useEffect } from "react";
import { Button, Text, TextInput, View, Alert } from "react-native";
import { KeyWeather } from "./utils";
import styles from "./styles";
import NormalUi from "../NormalUi/index";
import AnotherUi from "../AnotherUi/index";
import { AntDesign } from "@expo/vector-icons";

const ApiCall = (props) => {
  const [name, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [pressure, setPressure] = useState("");
  const [icon, setIcon] = useState("");
  const [sunrise, setSunrise] = useState(0);
  const [sunset, setSunset] = useState(0);
  const [desc, setDesc] = useState("");

  const { isFirst } = props;

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

      <View
        style={{
          flexDirection: "row",
          marginLeft: 30,
        }}
      >
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={{
            marginRight: 20,
            marginTop: 15,
          }}
        />
        <TextInput
          placeholder="Podaj miasto"
          style={styles.input}
          onChangeText={(text) => setCity(text)}
        />
      </View>

      <View style={styles.buttonParent}>
        <Button
          style={styles.button}
          title="Check Weather"
          onPress={() => getWeather(name)}
        />
      </View>
      <Hello
        isFirst={isFirst}
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

const Hello = (props) => {
  const { isFirst, name, temp, pressure, icon, sunrise, sunset, desc } = props;
  if (isFirst) {
    return (
      <NormalUi
        name={name}
        temp={temp}
        pressure={pressure}
        icon={icon}
        sunrise={sunrise}
        sunset={sunset}
        desc={desc}
      />
    );
  } else {
    return (
      <AnotherUi name={name} temp={temp} pressure={pressure} icon={icon} />
    );
  }
};

export default ApiCall;
