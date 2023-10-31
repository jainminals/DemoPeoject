

import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from './src/store';
// import Home from "./src/Home/Home"
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/MainTab/HomeNavigation"

const AppWrapper = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>
)
const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigation />    
    </NavigationContainer>
  );
};
export default AppWrapper;