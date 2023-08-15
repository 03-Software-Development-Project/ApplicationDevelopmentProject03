import {StyleSheet, Dimensions} from 'react-native'
import {typos, colors} from '../../../constants'

const windowWidth = Dimensions.get('window').width
const classCardWith = windowWidth / 1.5
const classCardHeight = classCardWith * 1
export default StyleSheet.create({
  classCard: {
    width: classCardWith,
    height: classCardHeight,
    borderColor: colors['greyscale.300'],
    borderWidth: 1,
    borderRadius: 12,
  },
  thumbnail: {
    width: '100%',
    height: '70%',
    borderRadius: 12,
    overflow: 'hidden',
    resizeMode: 'stretch',
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },

  title: {
    ...typos['body.large.medium'],
    color: colors['Greyscale.900'],
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  dateIcon: {
    ...typos['body.large.regular'],
    color: colors['primary.500'],
    marginRight: 10,
  },
  date: {
    ...typos['body.medium.regular'],
    color: colors['primary.500'],
  },
})
