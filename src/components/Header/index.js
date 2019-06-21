import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

const DefineStyle = (view, navigation) => {
  if (view == 'Home') {
    return (
      <View style={styles.contentInformations}>
        <View style={styles.contentInformation}>
          <Text style={styles.text}>planning poker</Text>
        </View>
        <TouchableOpacity style={styles.contentInformation}>
          <Icon name="info-outline" style={styles.icon} size={24} />
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View animation={'fadeInRight'} style={styles.contentInformations}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.contentInformation}>
          <Icon name="arrow-back" style={styles.icon} size={30} />
        </TouchableOpacity>
        <View style={styles.contentInformation}>
          <Text style={styles.text}>planning poker</Text>
        </View>
      </View>
    )
  }
}

const Header = ({ view, navigation }) => (
  <View style={styles.container}>
    <View style={styles.content}>{DefineStyle(view, navigation)}</View>
  </View>
)

export default Header
