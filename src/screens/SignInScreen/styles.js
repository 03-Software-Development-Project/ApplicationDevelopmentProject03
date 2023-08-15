import {StyleSheet} from 'react-native'
import {typos, colors} from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  form: {
    marginTop: 10,
    marginBottom: 5,
  },

  title: {
    ...typos['heading.h4'],
    color: colors['greyscale.900'],
  },
  subtitle: {
    ...typos['body.large.regular'],
    color: colors['greyscale.500'],
  },
  tfLabel: {
    ...typos['body.large.semibold'],
    marginHorizontal: 5,
    marginVertical: 5,
  },
  signUplabel: {
    ...typos['body.large.regular'],
    color: colors['greyscale.900'],
  },
  signUpBtn: {
    marginLeft: 5,
  },
  signUpBtnText: {
    ...typos['body.large.semibold'],
    color: colors['primary.700'],
  },
})
