import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Header = props => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.text}>planning poker</Text>
    </View>
  </View>
)

export default Header
