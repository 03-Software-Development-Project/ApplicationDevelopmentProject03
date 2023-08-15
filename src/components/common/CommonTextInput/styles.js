import {StyleSheet} from 'react-native'
import {typos, colors} from '../../../constants'

const defaultSize = 16
const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: defaultSize,
    backgroundColor: colors['greyscale.50'],
    borderRadius: defaultSize,
    borderWidth: 1,
    borderColor: colors['greyscale.300'],
  },
  leftIcon: {
    marginRight: 10,
    ...typos['body.xlarge.regular'],
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    ...typos['body.large.regular'],
    color: colors['greyscale.900'],
  },

  compose(
    defaultStyle = 'container' || 'leftIcon' || 'textInput',
    newStyle = null
  ) {
    return StyleSheet.compose(this[defaultStyle], newStyle)
  },

  colors,
})

export default styles
export const presets = {
  medium: StyleSheet.create({
    container: {
      ...styles.container,
      padding: defaultSize * (1 - 0.2),
      borderRadius: defaultSize * (1 - 0.2),
    },
  }),
  small: StyleSheet.create({
    container: {
      ...styles.container,
      padding: defaultSize * (1 - 0.4),
      borderRadius: defaultSize * (1 - 0.4),
    },
  }),
}
