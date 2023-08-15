import {Dimensions, StyleSheet} from 'react-native'
import {typos, colors} from '../../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    height: Dimensions.get('window').height / 3,
    width: '90%',
    padding: 20,
    elevation: 20,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
  },
  cancelBtn: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
  },
  cancelBtnIcon: {
    ...typos['heading.h4'],
    color: colors['greyscale.500'],
  },
  title: {
    ...typos['heading.h4'],
    color: '#23262F',
  },
  subtitle: {
    ...typos['body.medium.medium'],
    color: colors['greyscale.600'],
  },
  errorLabel: {
    ...typos['body.medium.medium'],
    color: colors['danger.600'],
  },
})
