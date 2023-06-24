import {StyleSheet} from 'react-native'
import {typography, color} from '../../../constants'

const styles = StyleSheet.create({
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
    borderColor: color['Greyscale.200'],
  },
  sectionTitle: {
    ...typography['heading.h6'],
    color: color['Greyscale.800'],
    fontWeight: 700,
    marginTop: 16,
    marginBottom: 4,
    paddingHorizontal: 16,
  },
  searchSuggestion: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlign: 'center',
    ...typography['body.medium.regular'],
    backgroundColor: color['Greyscale.100'],
    color: color['Greyscale.600'],
    borderRadius: 999,
  },
})

export default styles
