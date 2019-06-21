import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { CardItem } from '~/components'
import { Creators as cardsActions } from '~/redux/reducers/cards'
import { connect } from 'react-redux'
import styles from './styles'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  cardSelection = index => {
    this.props.navigation.navigate('SelectedCard')
    this.props.cardSelection(index)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <FlatList
            contentContainerStyle={styles.list}
            style
            data={this.props.cards}
            renderItem={({ item, index }) => (
              <CardItem
                index={index}
                value={item}
                cardSelection={this.cardSelection}
              />
            )}
            keyExtractor={item => String(item)}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards.cards
})

export default connect(
  mapStateToProps,
  cardsActions
)(Home)
