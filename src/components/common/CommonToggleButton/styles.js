import {StyleSheet} from 'react-native'
import {typos, colors} from '../../../constants'

export default StyleSheet.create({
  btn: {
    flex: 0,
  },
  btnIcon: {
    ...typos['body.xlarge.regular'],
    color: colors['greyscale.900'],
  },
  bgColor: (colorCode) => ({
    backgroundColor: colors[colorCode],
  }),
  iconColor: (colorCode) => ({
    color: colors[colorCode],
  }),

  margin: (margin) => ({
    marginTop: +margin[0] || 0,
    marginRight: +margin[1] || 0,
    marginBottom: +margin[2] || 0,
    marginLeft: +margin[3] || 0,
  }),
})
