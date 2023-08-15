import {StyleSheet} from 'react-native'
import {typos, colors} from '../../../../constants'

const styles = StyleSheet.create({
  column: {
    flex: 0,
    marginRight: 20,
  },
  cell: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 12,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  content: {
    paddingHorizontal: 12,
  },
  title: {
    ...typos['body.medium.semibold'],
    color: colors['Greyscale.900'],
  },
  description: {
    ...typos['body.small.regular'],
    color: colors['Greyscale.600'],
  },
})

export default styles
