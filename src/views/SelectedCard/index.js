// import React, { Component } from 'react'
// import { View, Text, TouchableOpacity } from 'react-native'
// import { connect } from 'react-redux'
// import CardFlip from 'react-native-card-flip'

// class SelectedCard extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor:"black" }}>
//          <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
//           <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text>AB</Text></TouchableOpacity>
//           <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text>CD</Text></TouchableOpacity>
//         </CardFlip>
//       </View>
//     );
//   }
// }

// const styles = {
//   cardContainer: {
//     flex:1
//   },
//   card: {
//     backgroundColor:'red',
//     height: 100,
//     width: 100,
//   }
// }

// const mapStateToProps = state => ({
//   selectedCard: state.cards.selectedCard
// })
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
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
          <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card1]} onPress={() => this.card.flip()} >
            <Text style={styles.label}>Planning Poker</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card2]} onPress={() => this.card.flip()} >
            <Text style={styles.label}>{this.props.selectedCard}</Text>
          </TouchableOpacity>
        </CardFlip>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer:{
    width: 320,
    height: 470,
  },
  card:{
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

const mapStateToProps = state => ({
  selectedCard: state.cards.selectedCard
})

export default connect(mapStateToProps)(SelectedCard)