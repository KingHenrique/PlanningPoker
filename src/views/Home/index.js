import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { CardItem } from '~/components'
import { Creators as cardsActions } from '~/redux/reducers/cards'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  cardSelection = (index) => {
    //save index
    this.props.navigation.navigate('SelectedCard')
    this.props.cardSelection(index)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList 
          data={this.props.cards}
          renderItem={({item, index}) => <CardItem index={index} value={item} cardSelection={this.cardSelection} />}
          keyExtractor={(item => String(item))}
          numColumns={3}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards.cards
})

export default connect(mapStateToProps, cardsActions)(Home)
