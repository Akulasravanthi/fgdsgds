import React, {Component} from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigation from './src/router'

const AppContainer = createAppContainer(AppNavigation)
 class App extends Component {
  render() {
    return (
     <AppContainer/>
    );
  }
}
export default App
