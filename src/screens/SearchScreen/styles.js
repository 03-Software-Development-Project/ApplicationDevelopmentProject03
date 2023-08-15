import {StyleSheet} from 'react-native'
import {typos, colors} from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  contentContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: colors['Greyscale.200'],
  },
  sectionTitle: {
    ...typos['heading.h6'],
    color: colors['Greyscale.800'],
    fontWeight: 700,
    marginTop: 16,
    marginBottom: 4,
    paddingHorizontal: 16,
  },
  searchSuggestion: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlign: 'center',
    ...typos['body.medium.regular'],
    backgroundColor: colors['Greyscale.100'],
    color: colors['Greyscale.600'],
    borderRadius: 999,
  },
})
