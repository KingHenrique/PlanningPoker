import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { CardItem } from '~/components'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <FlatList 
          data={this.props.cards}
          renderItem={({item}) => <CardItem value={item}/>}
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

export default connect(mapStateToProps)(Home)
