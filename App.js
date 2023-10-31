import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { persistor } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './src/MainTab/HomeNavigation';

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
};

export default AppWrapper;
