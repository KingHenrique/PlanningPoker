import React from "react"
import * as views from "~/views"
import { createStackNavigator, createAppContainer } from "react-navigation"

const AppNavigator = createStackNavigator({
  Home: { screen: views.Home}
})

export default createAppContainer(AppNavigator)