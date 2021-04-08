import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containter: {},
  image: {
    height: 80,
    width: 80,
    marginRight: 50,
    marginLeft: 40,
  },
  name: {
    // textAlignVertical: "center",
    marginTop: 20,
    marginLeft: 70,
    fontSize: 50,
    fontWeight: "bold",
  },
  temp: {
    marginLeft: 60,
    marginTop: 10,
    fontSize: 40,
  },
  tempAndPress: {
    width: "100%",
  },
  sunrise: { fontSize: 16, marginRight: 50, marginLeft: 40 },
  sunset: { fontSize: 16, marginRight: 50, marginLeft: 40 },
  desc: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  center: {
    marginLeft: 105,
  },
});
export default styles;
