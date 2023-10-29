import React from "react";
import Home from "../../src/Home/Home";
import Detail from "../../src/Detail/Detail";
import { createStackNavigator } from "@react-navigation/stack";
const HomeStack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
      <HomeStack.Screen name="Detail" component={Detail} />
    </HomeStack.Navigator>
  );
}
