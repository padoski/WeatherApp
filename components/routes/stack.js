import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/firstScreen";
import ReviewDetails from "../screens/secondScreen";

const Stack = createStackNavigator();

export default Navigator = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title: "",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
