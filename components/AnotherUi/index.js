import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import styles from "./styles";

const AnotherUi = (props) => {
  const { name, temp, pressure, icon, sunrise, sunset, desc } = props;
  return (
    <View>
      <View>
        <View style={styles.tempAndPress}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.temp}>
            {temp} C {pressure} hp
          </Text>
        </View>
        <Image
          style={{ height: 100, width: 100, marginLeft: 100 }}
          source={{
            uri: `http://openweathermap.org/img/w/${icon}.png`,
          }}
        />
        {/* <View
          style={{
            flexDirection: "row",
          }}
        >
          <View>
            <Image
              style={styles.image}
              source={require("../../images/sunrise.png")}
            />
            <Text style={styles.sunrise}>{sunrise}</Text>
          </View>
          <View>
            <Image
              style={styles.image}
              source={require("../../images/sunset.png")}
            />
            <Text style={styles.sunset}>{sunset}</Text>
          </View>
        </View>
        <View style={styles.center}>
          <Text style={styles.desc}>{desc}</Text>
        </View> */}
      </View>
    </View>
  );
};

export default AnotherUi;
