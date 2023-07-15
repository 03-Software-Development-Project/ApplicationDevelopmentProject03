import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    height: Dimensions.get('window').height / 4,
    width: '90%',
    paddingTop: 10,
    elevation: 20,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  textView: {
    flex: 1,
    alignItems: 'center',
  },
  errorName: {
    flex: 0,
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EC5f67',
  },
  errorCode: {
    flex: 0,
    margin: 5,
    fontSize: 14,
    color: 'gray',
  },
  errorMessageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    margin: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    marginVertical: 10,
    marginRight: 10,
    paddingVertical: 15,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    backgroundColor: 'black',
  },
  firstButton: {
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default styles
