import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

function Answer(props) {
  const {answer, isChosen, isCorrect, isQuestionAnswered, onPress} = props

  const answerItemStyle = [styles.defaultAnswer]
  const answerTextStyle = [styles.defaultAnswerText]
  const answerIcon = {
    name: 'checkbox-blank-circle-outline',
    style: [styles.defaultAnswerIcon],
  }

  if (!isQuestionAnswered) {
    if (isChosen) {
      answerItemStyle.push(styles.chosenAnswer)
      answerTextStyle.push(styles.chosenAnswerText)
      answerIcon.name = 'checkbox-marked-circle-outline'
      answerIcon.style.push(styles.chosenAnswerIcon)
    }
  } else if (isCorrect) {
    answerItemStyle.push(styles.correctAnswer)
    answerTextStyle.push(styles.correctAnswerText)
    answerIcon.name = 'checkbox-marked-circle'
    answerIcon.style.push(styles.correctAnswerIcon)
  } else if (isChosen && !isCorrect) {
    answerItemStyle.push(styles.wrongAnswer)
    answerTextStyle.push(styles.wrongAnswerText)
    answerIcon.name = 'close-circle'
    answerIcon.style.push(styles.wrongAnswerIcon)
  }

  return (
    <TouchableOpacity
      disabled={isQuestionAnswered}
      onPress={onPress}
      style={answerItemStyle}>
      <View style={styles.answerConent}>
        <MaterialCommunityIcons
          name={answerIcon.name}
          style={answerIcon.style}
        />
        <Text
          numberOfLines={5}
          adjustsFontSizeToFit
          style={answerTextStyle}>
          {answer.text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Answer
