
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainView from './src/ui/screen/Main/MainView';

const App = (): JSX.Element => {

  return <>
  <Provider store={store}>
    <View style={{flex:3}}/>
      <View style={{flex:3}}>
        <MainView />
      </View>
    <View style={{flex:3}}/>
  </Provider>
  </>
}

export default App;
