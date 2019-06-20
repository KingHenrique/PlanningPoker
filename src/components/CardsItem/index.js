import React from 'react'
import { Text, View, Dimensions, TouchableOpacity } from 'react-native'

const CardItem = ({ index, value, cardSelection }) => (
  <TouchableOpacity
    onPress={() => cardSelection(index)}
    style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.text}>{value}</Text>
    </View>
  </TouchableOpacity>
)

const styles = {
  container: {
    width: Dimensions.get('window').width / 3 - 28,
    height: Dimensions.get('window').width / 3 + 20,
    borderRadius: 4,
    margin: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#f37321'
  }
}

export default CardItem
