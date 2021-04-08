import React, { useState } from "react";
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import ApiCall from "../ApiCall/index";

export default function Home({ navigation }) {
  const [isFirst, setIsFirst] = useState(true);
  const goToSecond = () => {
    navigation.navigate("ReviewDetails");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../images/daybackground.jpeg")}
        style={styles.image}
      />

      <View style={styles.weatherContainer}>
        <ApiCall isFirst={isFirst} />
        <View style={styles.buttonParent}>
          <Button
            style={styles.button}
            title="Change View to General"
            onPress={goToSecond}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  weatherContainer: {
    width: "100%",
    height: "100%",
    marginLeft: "20%",
    marginTop: "20%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonParent: {
    marginLeft: 50,
    width: 210,
    marginTop: 10,
  },
});
