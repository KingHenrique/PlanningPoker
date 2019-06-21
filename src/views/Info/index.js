import React, { Component } from 'react'
import { Text, TouchableOpacity, ScrollView } from 'react-native'
import { View } from 'react-native-animatable'
import { connect } from 'react-redux'
import CardFlip from 'react-native-card-flip'
import styles from './styles'

class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message:
        'Planning poker, also called Scrum poker, is a consensus-based, gamified technique for estimating, mostly used to estimate effort or relative size of development goals in software development.\n\nIn planning poker, members of the group make estimates by playing numbered cards face-down to the table, instead of speaking them aloud.\n\nThe cards are revealed, and the estimates are then discussed.\n\nBy hiding the figures in this way, the group can avoid the cognitive bias of anchoring, where the first number spoken aloud sets a precedent for subsequent estimates.'
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View animation={'fadeInUp'} style={styles.textContainer}>
          <Text style={styles.text}>{this.state.message}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default Info
