import React from 'react'
import * as views from '../views'
import { Header } from '../components'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
  Home: {
    screen: views.Home,
    navigationOptions: ({ navigation }) => ({
      header: <Header view={'Home'} navigation={navigation} />
    })
  },
  SelectedCard: {
    screen: views.SelectedCard,
    navigationOptions: ({ navigation }) => ({
      header: <Header view={'Selected'} navigation={navigation} />
    })
  },
  Info: {
    screen: views.Info,
    navigationOptions: ({ navigation }) => ({
      header: <Header view={'Info'} navigation={navigation} />
    })
  }
})

export default createAppContainer(AppNavigator)
