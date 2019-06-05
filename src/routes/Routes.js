import React from "react"
import * as views from "~/views"
import { createStackNavigator, createAppContainer } from "react-navigation"

const AppNavigator = createStackNavigator({
  Home: { screen: views.Home},
  SelectedCard: { screen: views.SelectedCard }
})

export default createAppContainer(AppNavigator)