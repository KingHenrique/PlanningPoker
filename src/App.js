import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native'
import Routes from './routes/Routes'
import store from './redux/store'
import { Provider } from 'react-redux'

StatusBar.setBarStyle('light-content', true)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
