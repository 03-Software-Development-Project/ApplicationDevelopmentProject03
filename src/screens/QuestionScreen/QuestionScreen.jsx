import React, {useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useDispatch, useSelector} from 'react-redux'
import {
  resetState,
  setCurrentQuestionIndex,
  currentQuestionSelector,
  chosenAnswerSelector,
  numberOfQuestionsSelector,
  answerCurrentQuestion,
} from './QuestionScreenViewModel'
import styles from './styles'

function AnswerItem(props) {
  const {
    key,
    text,
    isChosen,
    isCorrect,
    shouldDisplayCorrectStyle,
    onPress,
    isDisabled,
  } = {
    ...props,
  }
  const answerItemStyle = [styles.lowerBodyDefaultAnswerItem]
  const answerTextStyle = [styles.lowerBodyDefaultAnswerText]
  let answerIcon = null
  if (
    (isChosen && isCorrect !== null && isCorrect) ||
    shouldDisplayCorrectStyle
  ) {
    answerItemStyle.push(styles.lowerBodyCorrectAnswerItem)
    answerTextStyle.push(styles.lowerBodyCorrectAnswerText)
    answerIcon = (
      <Ionicons
        name="checkmark-circle"
        size={35}
        color="green"
      />
    )
  } else if (isChosen && isCorrect !== null && !isCorrect) {
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

function QuestionScreen({route, navigation}) {
  const {currentQuestionIndex} = route.params
  const dispatch = useDispatch()
  const currentQuestion = useSelector(currentQuestionSelector)
  const chosenAnswer = useSelector(chosenAnswerSelector)
  const numberOfQuestions = useSelector(numberOfQuestionsSelector)
  useEffect(() => {
    dispatch(setCurrentQuestionIndex(currentQuestionIndex))
  }, [currentQuestionIndex, dispatch])
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
              dispatch(resetState())
              if (currentQuestionIndex === 0) {
                navigation.navigate({
                  name: 'QuizStarting',
                  merge: true,
                })
              } else {
                navigation.navigate({
                  name: 'Question',
                  params: {currentQuestionIndex: currentQuestionIndex - 1},
                  merge: true,
                })
              }
            }}>
            <Ionicons
              name="chevron-back"
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <View style={styles.headerTitleView}>
            <Text style={styles.headerTitle}>
              Question {currentQuestionIndex + 1}
            </Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.upperBody}>
            <Text style={styles.upperBodyQuestionText}>
              {currentQuestion.question}
            </Text>
            <View style={styles.upperBodyDivider} />
            <Text style={styles.upperBodyQuestionGuide}>Choose 1 answer:</Text>
          </View>
          <View style={styles.lowerBody}>
            <View style={styles.lowerBodyAnswerList}>
              {(currentQuestion.answers || []).map((answer) => (
                <AnswerItem
                  key={answer.id}
                  text={answer.text}
                  isChosen={
                    chosenAnswer !== null && chosenAnswer.id === answer.id
                  }
                  isCorrect={currentQuestion.correctAnswer === answer.id}
                  shouldDisplayCorrectStyle={
                    chosenAnswer !== null &&
                    currentQuestion.correctAnswer === answer.id
                  }
                  onPress={() => {
                    dispatch(answerCurrentQuestion(answer))
                  }}
                  isDisabled={chosenAnswer !== null}
                />
              ))}
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            disabled={currentQuestion.isCorrect === null}
            style={styles.footerContinueButton}
            onPress={() => {
              dispatch(resetState())
              if (currentQuestionIndex + 1 >= numberOfQuestions) {
                navigation.navigate('QuizResult', {headerTitle: 'Quiz Result'})
              } else {
                navigation.push('Question', {
                  currentQuestionIndex: currentQuestionIndex + 1,
                })
              }
            }}>
            <Text style={styles.footerContinueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
export default QuestionScreen
