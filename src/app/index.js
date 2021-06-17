import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './rootNavigation';
import store from './configureStore';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
