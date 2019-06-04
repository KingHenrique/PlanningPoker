import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';

const CardItem = ({ value }) => (
  <TouchableOpacity style={styles.container}>
    <View style={styles.content}>
      <Text>{value}</Text>
    </View>
  </TouchableOpacity>
)


const styles = {
  container: {
    height: (Dimensions.get('window').width / 3) + 20,
    width: (Dimensions.get('window').width / 3) - 8, 
    borderColor: 'red',
    borderWidth: 1,
    margin: 4,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default CardItem;
