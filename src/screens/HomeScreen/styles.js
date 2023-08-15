import {StyleSheet} from 'react-native'
import {typos, colors} from '../../constants'

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    flex: 0,
  },

  section: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 24,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    flex: 1,
    ...typos['heading.h6'],
    fontWeight: '700',
  },
  sectionSeeMore: {
    ...typos['body.medium.regular'],
    fontWeight: '500',
    color: colors['info.500'],
  },
})
