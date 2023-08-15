import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  button: {
    flexGrow: 0,
    flexBasis: '30%',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
