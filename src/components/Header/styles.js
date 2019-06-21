import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 88,
    backgroundColor: '#f37321'
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  contentInformations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    marginHorizontal: 24
  },
  contentInformation: {
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    fontFamily: 'avenir',
    fontWeight: 'bold',
    color: 'white'
  },
  icon: {
    color: 'white'
  }
})

export default styles
