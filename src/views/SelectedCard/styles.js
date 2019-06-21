import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f37321'
  },
  cardContainer: {
    width: 320,
    height: 470,
    marginBottom: 88
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
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.5,
    backgroundColor: 'white'
  },
  label: {
    textAlign: 'center',
    fontSize: 48,
    fontFamily: 'avenir',
    fontWeight: 'bold',
    color: '#f37321',
    backgroundColor: 'transparent'
  },
  labelTwo: {
    textAlign: 'center',
    fontSize: 144,
    fontWeight: 'bold',
    fontFamily: 'avenir',
    color: '#f37321',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: 'transparent'
  }
})

export default styles
