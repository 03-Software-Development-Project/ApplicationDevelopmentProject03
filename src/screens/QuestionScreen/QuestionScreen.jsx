import React from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

function QuestionAnswerComponent(props) {
  const {key, text, onPress, isAnswerCorrectly, isFirstItem, isDisabled} = {
    ...props,
  }
  let answerContainerStyle
  let answerTextStyle
  let answerIcon
  if (isAnswerCorrectly === null) {
    answerContainerStyle = styles.lowerBodyDefaultAnswerItem
    answerTextStyle = styles.lowerBodyDefaultAnswerText
    answerIcon = null
  } else if (isAnswerCorrectly) {
    answerContainerStyle = styles.lowerBodyCorrectAnswerItem
    answerTextStyle = styles.lowerBodyCorrectAnswerText
    answerIcon = (
      <Ionicons
        name="checkmark-circle"
        size={35}
        color="green"
      />
    )
  } else {
    answerContainerStyle = styles.lowerBodyWrongAnswerItem
    answerTextStyle = styles.lowerBodyWrongAnswerText
    answerIcon = (
      <Ionicons
        name="close-circle"
        size={35}
        color="red"
      />
    )
  }
  answerContainerStyle = {
    ...answerContainerStyle,
    marginTop: isFirstItem ? 20 : 0,
    marginBottom: 20,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
  }

  answerTextStyle = {
    ...answerTextStyle,
    flex: 1,
  }

  return (
    <TouchableOpacity
      key={key}
      disabled={isDisabled}
      onPress={onPress}
      style={answerContainerStyle}>
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
    <View style={styles.rootContainer}>
      <SafeAreaView
        edges={['top']}
        style={styles.topSafeArea}
      />
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={styles.mainContainer}>
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
            <Text style={styles.upperBodyQuestionDescription}>
              Which tag is used to define the main heading in HTML?
            </Text>
            <View style={styles.upperBodyDivider} />
            <Text style={styles.upperBodyQuestionGuide}>Choose 1 answer:</Text>
          </View>
          <View style={styles.lowerBody}>
            <View style={styles.lowerBodyAnswerList}>
              {answers.map((answer, index) => (
                <QuestionAnswerComponent
                  key={answer.id}
                  text={answer.text}
                  onPress={answer.onPress}
                  isAnswerCorrectly={answer.isAnswerCorrectly}
                  isFirstItem={index === 0}
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
