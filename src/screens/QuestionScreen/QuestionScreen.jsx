import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

function AnswerItem(props) {
  const {key, text, onPress, isAnswerCorrectly, isDisabled} = {
    ...props,
  }
  const answerItemStyle = [styles.lowerBodyDefaultAnswerItem]
  const answerTextStyle = [styles.lowerBodyDefaultAnswerText]
  let answerIcon = null
  if (isAnswerCorrectly !== null && isAnswerCorrectly) {
    answerItemStyle.push(styles.lowerBodyCorrectAnswerItem)
    answerTextStyle.push(styles.lowerBodyCorrectAnswerText)
    answerIcon = (
      <Ionicons
        name="checkmark-circle"
        size={35}
        color="green"
      />
    )
  } else if (isAnswerCorrectly !== null && !isAnswerCorrectly) {
    answerItemStyle.push(styles.lowerBodyWrongAnswerItem)
    answerTextStyle.push(styles.lowerBodyWrongAnswerText)
    answerIcon = (
      <Ionicons
        name="close-circle"
        size={35}
        color="red"
      />
    )
  }

  return (
    <TouchableOpacity
      key={key}
      disabled={isDisabled}
      onPress={onPress}
      style={answerItemStyle}>
      <Text style={answerTextStyle}>{text}</Text>
      {answerIcon}
    </TouchableOpacity>
  )
}

function QuestionScreen({navigation}) {
  const answers = [
    {
      id: 1,
      text: "A. {'<h1>'}",
      onPress: () => {},
      isAnswerCorrectly: null,
      isDisabled: false,
    },
    {
      id: 2,
      text: "B. {'<p>'}",
      onPress: () => {},
      isAnswerCorrectly: null,
      isDisabled: false,
    },
    {
      id: 3,
      text: "C. {'<div>'}",
      onPress: () => {},
      isAnswerCorrectly: true,
      isDisabled: false,
    },
    {
      id: 4,
      text: "D. {'<span>'}",
      onPress: () => {},
      isAnswerCorrectly: false,
      isDisabled: false,
    },
  ]
  return (
    <View style={styles.container}>
      <SafeAreaView
        edges={['top']}
        style={styles.topSafeArea}
      />
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerBackButton}
            onPress={() => {
              navigation.goBack()
            }}>
            <Ionicons
              name="chevron-back"
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <View style={styles.headerTitleView}>
            <Text style={styles.headerTitle}>Quiz 2</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.upperBody}>
            <Text style={styles.upperBodyQuestionText}>
              Which tag is used to define the main heading in HTML?
            </Text>
            <View style={styles.upperBodyDivider} />
            <Text style={styles.upperBodyQuestionGuide}>Choose 1 answer:</Text>
          </View>
          <View style={styles.lowerBody}>
            <View style={styles.lowerBodyAnswerList}>
              {answers.map((answer) => (
                <AnswerItem
                  key={answer.id}
                  text={answer.text}
                  onPress={answer.onPress}
                  isAnswerCorrectly={answer.isAnswerCorrectly}
                  isDisabled={answer.isDisabled}
                />
              ))}
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerContinueButton}>
            <Text style={styles.footerContinueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
export default QuestionScreen
