import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './rootNavigation';
import configureStore from './configureStore';
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
