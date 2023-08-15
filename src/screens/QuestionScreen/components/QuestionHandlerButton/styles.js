import {StyleSheet} from 'react-native'
import {typos, colors} from '../../../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: colors['info.800'],
    borderRadius: 15,
  },
  text: {
    ...typos['body.large.bold'],
    textAlign: 'center',
    color: 'white',
  },
})
