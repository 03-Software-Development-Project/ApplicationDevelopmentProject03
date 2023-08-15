import {StyleSheet, Dimensions} from 'react-native'
import {typos, colors} from '../../../../constants'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const swiperHeight = windowHeight / 2.5
const styles = StyleSheet.create({
  swiper: {
    height: swiperHeight,
  },
  pagination: {
    bottom: 0,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: windowWidth / 3,
    height: 2,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#007aff',
    width: windowWidth / 3,
    height: 3,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  item: {
    flex: 0,
    height: '98%',
  },
  thumbnail: {
    flex: 8,
    overflow: 'hidden',
    resizeMode: 'stretch',
  },
  content: {
    flex: 3,
    paddingTop: 10,
    justifyContent: 'space-around',
  },
  id: {
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    ...typos['body.xsmall.medium'],
    color: colors['warning.900'],
    backgroundColor: colors['warning.200'],
  },
  title: {
    ...typos['heading.h4'],
    textAlign: 'center',
    color: colors['greyscale.900'],
  },
})

export default styles
