import {StyleSheet} from 'react-native'
import {color, typography} from '../../../constants'

const styles = StyleSheet.create({
  viewcontainer: {
    flex: 1,
  },
  safeArea: {
    // backgroundColor: color['info.900'],
    // marginTop: 50,
    flex: 1,
    // marginTop: 50,
  },
  backgroundHeadColor: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color['info.900'],
    // height: 110,
  },
  headerView: {
    // marginBottom: 12,
    marginTop: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  image: {
    // marginStart: -110,
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  question: {
    borderBottomColor: color['Greyscale.200'],
    borderBottomWidth: 1,
  },
  textAnswer: {
    marginLeft: 16,
    ...typography['body.large.medium'],
    paddingVertical: 20,
  },
  buttonAnswer: {
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: color['Greyscale.50'],
    borderColor: color['Greyscale.200'],
    borderWidth: 1,
    borderRadius: 12,
  },
  buttonAnswerSuccess: {
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: color['Success.100'],
    borderColor: color['Success.500'],
    borderWidth: 1,
    borderRadius: 12,
  },
})

export default styles
