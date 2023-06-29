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
    marginTop: -150,
  },
  imagePrize: {
    height: 80,
    height: 80,
    marginTop: 28,
  },
  subMainView: {},
  textQuizCompleted: {
    marginTop: 12,
  },
  timeQuiz: {
    // marginBottom: 12,
  },

  bottomView: {
    borderTopColor: 'rgba(255, 255, 255, 1)',
    borderTopWidth: 0.2,
    paddingHorizontal: 20,
  },
})

export default styles
