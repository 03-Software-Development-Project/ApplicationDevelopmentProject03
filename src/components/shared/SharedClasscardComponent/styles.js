import {StyleSheet} from 'react-native'
import {color} from '../../../../constants'

const styles = StyleSheet.create({
  classCard: {
    width: 260,
    paddingHorizontal: 16,
    marginRight: 16,
  },
  classCardImage: {
    width: 260,
    height: 175,
    borderRadius: 12,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  classCardTitle: {
    color: color['Greyscale.900'],
  },
  classCardDate: {
    color: color['Primary.500'],
  },
})

export default styles
