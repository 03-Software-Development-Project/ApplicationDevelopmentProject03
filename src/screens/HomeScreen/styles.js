import {StyleSheet} from 'react-native'
import {color, typography} from '../../../constants'

const styles = StyleSheet.create({
  viewcontainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    marginTop: 50,
  },
  childView: {
    margintop: 20,
    flex: 1,
  },
  headerView: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  classimage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },

  section: {
    height: 42,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingHorizontal: 16,
    // backgroundColor: 'blue',
  },
  sectionTitle: {
    flex: 1,
    fontWeight: 700,
  },
  sectionSeeMore: {
    fontWeight: 400,
    color: color['info.500'],
  },
  categoryCell: {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  categoryName: {
    color: color['Greyscale.900'],
  },
  categoryDescription: {
    color: color['Greyscale.600'],
  },
})

export default styles
