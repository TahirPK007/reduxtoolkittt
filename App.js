import {View, Text} from 'react-native';
import React from 'react';
import Counter from './components/Counter';
import {Provider} from 'react-redux';
import {store} from './app/store';
import Global from './components/Global';
import Theme from './components/Theme';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Global />
      <Theme />
    </Provider>
  );
};

export default App;
