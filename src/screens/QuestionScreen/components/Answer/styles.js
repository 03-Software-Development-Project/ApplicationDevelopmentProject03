import {StyleSheet} from 'react-native'
import {typos, colors} from '../../../../constants'

const answerTextStyles = {
  defaultAnswerText: {
    flex: 1,
    alignSelf: 'center',
    ...typos['body.large.medium'],
    color: colors['greyscale.900'],
  },
  chosenAnswerText: {
    // ...defaultAnswerText,
    color: colors['greyscale.900'],
  },
  correctAnswerText: {
    // ...defaultAnswerText,
    color: colors['success.500'],
  },
  wrongAnswerText: {
    // ...defaultAnswerText,
    color: colors['danger.500'],
  },
}

const answerIconStyles = {
  defaultAnswerIcon: {
    alignSelf: 'flex-start',
    marginRight: 5,
    fontSize: 24,
    color: colors['greyscale.300'],
  },
  chosenAnswerIcon: {
    // ...defaultAnswerIcon,
    color: colors['greyscale.600'],
  },
  correctAnswerIcon: {
    // ...defaultAnswerIcon,
    color: colors['success.500'],
  },
  wrongAnswerIcon: {
    // ...defaultAnswerIcon,
    color: colors['danger.500'],
  },
}

export default StyleSheet.create({
  answerConent: {
    flex: 0,
    flexDirection: 'row',
  },

  defaultAnswer: {
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 5,
    paddingVertical: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors['greyscale.50'],
    borderColor: colors['greyscale.200'],
  },
  chosenAnswer: {
    // ...defaultAnswer,
    backgroundColor: colors['greyscale.200'],
    borderColor: colors['greyscale.200'],
  },
  correctAnswer: {
    // ...defaultAnswer,
    backgroundColor: colors['success.100'],
    borderColor: colors['success.500'],
  },
  wrongAnswer: {
    // ...defaultAnswer,
    backgroundColor: colors['danger.100'],
    borderColor: colors['danger.500'],
  },
  ...answerTextStyles,
  ...answerIconStyles,
})
