import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class SelectedCard extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  selectedCard: state.cards.selectedCard
})

export default connect(mapStateToProps)(SelectedCard)
