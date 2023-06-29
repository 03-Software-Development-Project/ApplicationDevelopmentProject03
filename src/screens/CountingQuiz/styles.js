import {StyleSheet} from 'react-native'
import {color, typography} from '../../../constants'

const styles = StyleSheet.create({
  viewcontainer: {
    flex: 1,
  },
  safeArea: {
    backgroundColor: color['info.900'],
    flex: 1,
    // marginTop: 50,
  },
  headerView: {
    // marginEnd: 110,
    marginTop: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    borderBottomWidth: 0.2,
  },

  image: {
    // marginStart: -110,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  mainView: {
    padding: 20,
  },
  timeQuiz: {
    marginBottom: 12,
  },
  // descriptionQuiz: {
  //   alignItems: 'center',
  // },
  imageFeature: {
    width: 18.1,
    height: 20,
    marginRight: 12,
  },
  totalQuiz: {
    marginTop: 12,
    flexDirection: 'row',
  },
  bottomView: {
    borderTopColor: 'rgba(255, 255, 255, 1)',
    borderTopWidth: 0.2,
    paddingHorizontal: 20,
  },
})

export default styles
