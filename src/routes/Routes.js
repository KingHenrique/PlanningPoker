import React from 'react'
import * as views from '../views'
import { Header } from '../components'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
  Home: {
    screen: views.Home,
    navigationOptions: ({ navigation }) => ({
      header: <Header />
    })
  },
  SelectedCard: {
    screen: views.SelectedCard,
    navigationOptions: ({ navigation }) => ({
      header: <Header />
    })
  }
})

export default createAppContainer(AppNavigator)
