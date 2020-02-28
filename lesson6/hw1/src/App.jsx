import './app.scss';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Weather from './weather/Weather';

function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

export default App;