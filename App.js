import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import ApiCall from "./components/ApiCall/index";
import Navigator from "./components/routes/stack";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <ImageBackground
    //     source={require("./images/daybackground.jpeg")}
    //     style={styles.image}
    //   />
    //   <View style={styles.weatherContainer}>
    //     <ApiCall />
    //     <StatusBar style="auto" />
    //   </View>
    // </View>
    <Navigator />
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
    marginTop: "30%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
  },
});
