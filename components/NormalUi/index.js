import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import styles from "./styles";

const NormalUi = (props) => {
  const { name, temp, pressure, icon, sunrise, sunset, desc } = props;
  return (
    <View>
      <View>
        <Text>{name}</Text>
        <Text>{temp} </Text>
        <Text>{pressure}</Text>
        <Image
          style={styles.image}
          source={{
            uri: `http://openweathermap.org/img/w/${icon}.png`,
          }}
        />
        <View>
          <Image
            style={styles.image}
            source={require("../../images/sunrise.png")}
          />
          <Text>{sunrise}</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require("../../images/sunset.png")}
          />
          <Text>{sunset}</Text>
        </View>
        <Text>{desc}</Text>
      </View>
    </View>
  );
};

export default NormalUi;
