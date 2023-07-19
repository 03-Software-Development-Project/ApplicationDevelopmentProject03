import {StyleSheet} from 'react-native'
import {color, typography} from '../../constants'

const answerItemStyle = {
  lowerBodyDefaultAnswerItem: {
    marginBottom: 20,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: color['greyscale.50'],
    borderColor: color['greyscale.200'],
  },
  lowerBodyCorrectAnswerItem: {
    // ...lowerBodyDefaultAnswerItem,
    backgroundColor: color['success.100'],
    borderColor: color['success.500'],
  },
  lowerBodyWrongAnswerItem: {
    // ...lowerBodyDefaultAnswerItem,
    backgroundColor: color['danger.100'],
    borderColor: color['danger.500'],
  },
  lowerBodyDefaultAnswerText: {
    flex: 1,
    ...typography['body.large.medium'],
    color: color['greyscale.900'],
  },
  lowerBodyCorrectAnswerText: {
    // ...lowerBodyDefaultAnswerText,
    ...typography['body.large.medium'],
    color: color['success.500'],
  },
  lowerBodyWrongAnswerText: {
    // ...lowerBodyDefaultAnswerText,
    ...typography['body.large.medium'],
    color: color['danger.500'],
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: color['info.900'],
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: color['info.900'],
  },
  headerBackButton: {
    flex: 0,
    padding: 5,
    marginHorizontal: 15,
    zIndex: 1,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  headerTitleView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    ...typography['heading.h4'],
    textAlign: 'center',
    color: 'white',
  },

  body: {
    flex: 1,
  },
  upperBody: {
    flex: 0,
  },
  upperBodyQuestionText: {
    ...typography['body.xlarge.medium'],
    lineHeight: 30,
    padding: 20,
  },
  upperBodyDivider: {
    borderBottomColor: color['greyscale.400'],
    borderBottomWidth: 1,
  },
  upperBodyQuestionGuide: {
    ...typography['body.large.bold'],
    padding: 20,
  },
  lowerBody: {
    flex: 1,
    paddingHorizontal: 20,
  },
  lowerBodyAnswerList: {
    flex: 1,
  },

  ...answerItemStyle,

  footer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  footerContinueButton: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: color['info.900'],
    borderWidth: 1,
    borderRadius: 15,
  },
  footerContinueButtonText: {
    ...typography['heading.h5'],
    textAlign: 'center',
    color: 'white',
  },
})

export default styles
