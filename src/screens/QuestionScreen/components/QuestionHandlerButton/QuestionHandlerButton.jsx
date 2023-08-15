import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styles from './styles'

function QuestionHandlerButton(props) {
  const {question, afterQuestionAnsweredHandler, currentQuestionHandler} = {
    ...props,
  }

  return (
    <TouchableOpacity
      disabled={false}
      style={styles.container}
      onPress={() => {
        if (question?.isCorrect !== null) {
          afterQuestionAnsweredHandler()
        } else {
          currentQuestionHandler()
        }
      }}>
      <Text style={styles.text}>
        {question?.isCorrect !== null ? 'Continue' : 'Answer'}
      </Text>
    </TouchableOpacity>
  )
}

export default QuestionHandlerButton
