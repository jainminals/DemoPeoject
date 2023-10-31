import React from "react";
import Home from "../../src/Home/Home";
import Detail from "../../src/Detail/Detail";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

export default function HomeNavigation() {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
      <HomeStack.Screen name="Detail" component={Detail} />
    </HomeStack.Navigator>
  );
}
