import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';

const CardItem = ({ index, value, cardSelection }) => (
  <TouchableOpacity onPress={() => cardSelection(index)} style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.text}>{value}</Text>
    </View>
  </TouchableOpacity>
)


const styles = {
  container: {
    height: (Dimensions.get('window').width / 3) + 20,
    width: (Dimensions.get('window').width / 3) - 16, 
    borderColor: 'red',
    borderWidth: 1,
    margin: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20
  }
}

export default CardItem;
