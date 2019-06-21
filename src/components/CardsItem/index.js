import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'

const CardItem = ({ index, value, cardSelection }) => (
  <TouchableOpacity
    onPress={() => cardSelection(index)}
    style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.text}>{value}</Text>
    </View>
  </TouchableOpacity>
)

export default CardItem
