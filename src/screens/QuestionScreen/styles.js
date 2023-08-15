import {StyleSheet} from 'react-native'
import {typos, colors} from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: colors['info.900'],
  },
  mainContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
  },
  upperBody: {
    flex: 0,
  },
  upperBodyQuestionText: {
    ...typos['body.xlarge.medium'],
    lineHeight: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  upperBodyDivider: {
    borderBottomColor: colors['greyscale.200'],
    borderBottomWidth: 1,
  },
  upperBodyQuestionGuide: {
    ...typos['body.large.bold'],
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  lowerBody: {
    flex: 1,
    paddingHorizontal: 20,
  },
  lowerBodyAnswerList: {
    flex: 1,
  },

  footer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
})
