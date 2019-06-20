import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import CardFlip from 'react-native-card-flip'

class SelectedCard extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.card}
            onPress={() => this.card.flip()}>
            <View style={styles.content}>
              <Text style={styles.label}>{'planning\npoker'}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.card}
            onPress={() => this.card.flip()}>
            <View style={styles.content}>
              <Text style={styles.label}>{this.props.selectedCard}</Text>
            </View>
          </TouchableOpacity>
        </CardFlip>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f37321'
  },
  cardContainer: {
    width: 320,
    height: 470
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: 320,
    height: 470,
    borderRadius: 5,
    borderColor: 'red',
    borderWidth: 9,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: 'white'
  },
  label: {
    textAlign: 'center',
    fontSize: 48,
    fontFamily: 'avenir',
    color: '#111',
    backgroundColor: 'transparent'
  }
})

const mapStateToProps = state => ({
  selectedCard: state.cards.selectedCard
})

export default connect(mapStateToProps)(SelectedCard)
