import {StyleSheet} from 'react-native'
import {typos, colors} from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    justifyContent: 'center',
    paddingHorizontal: 20,
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
})
