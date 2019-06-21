import React, { Component } from 'react'
import { Text, View, TouchableOpacity, I } from 'react-native'
import { connect } from 'react-redux'
import CardFlip from 'react-native-card-flip'
import styles from './styles'

class SelectedCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.card}
            onPress={() => this.card.flip()}>
            <View style={styles.content}>
              <Text style={styles.label}>{'tap to flip'}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.card}
            onPress={() => this.card.flip()}>
            <View style={styles.content}>
              <Text style={styles.labelTwo}>{this.props.selectedCard}</Text>
            </View>
          </TouchableOpacity>
        </CardFlip>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  selectedCard: state.cards.selectedCard
})

export default connect(mapStateToProps)(SelectedCard)
