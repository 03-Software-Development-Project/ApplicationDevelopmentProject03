import {StyleSheet} from 'react-native'
import {typos, colors} from '../../../constants'

const defaultSize = 18
export default StyleSheet.create({
  button: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: defaultSize,
    backgroundColor: colors['greyscale.900'],
    borderRadius: defaultSize,
  },
  buttonText: {
    ...typos['body.large.bold'],
    fontWeight: 'bold',
    color: colors['greyscale.50'],
  },
  size: (size) => {
    switch (size) {
      case 'medium':
        return {
          paddingVertical: defaultSize * (1 - 0.25),
          borderRadius: defaultSize * (1 - 0.25),
        }
      case 'small':
        return {
          paddingVertical: defaultSize * (1 - 0.5),
          borderRadius: defaultSize * (1 - 0.5),
        }
      default:
        return {}
    }
  },
  bgColor: (colorCode) => ({
    backgroundColor:
      colorCode === 'transparent' ? colorCode : colors[colorCode],
  }),
  textColor: (colorCode) => ({
    color: colors[colorCode],
  }),

  margin: (margin) => ({
    marginTop: +margin[0] || 0,
    marginRight: +margin[1] || 0,
    marginBottom: +margin[2] || 0,
    marginLeft: +margin[3] || 0,
  }),
})
