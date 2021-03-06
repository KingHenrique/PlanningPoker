import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import CardFlip from 'react-native-card-flip'
import RNShake from 'react-native-shake'
import styles from './styles'

class SelectedCard extends Component {
  componentWillMount() {
    RNShake.addEventListener('ShakeEvent', () => {
      this.handleFlipCard()
    })
  }

  componentWillUnmount() {
    RNShake.removeEventListener('ShakeEvent')
  }

  handleFlipCard = () => {
    this.card.flip()
  }

  render() {
    return (
      <View style={styles.container}>
        <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.card}
            onPress={() => this.handleFlipCard()}>
            <View style={styles.content}>
              <Text style={styles.label}>{'tap to flip'}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.card}
            onPress={() => this.handleFlipCard()}>
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
