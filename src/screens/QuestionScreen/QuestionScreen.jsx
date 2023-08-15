import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useDispatch, useSelector} from 'react-redux'
import {
  resetState,
  errorSelector,
  dismissError,
  setChosenAnswerIndex,
  chosenAnswerIndexSelector,
  setCurrentQuestionIndex,
  currentQuestionSelector,
  answerCurrentQuestion,
  numberOfQuestionsSelector,
} from './QuestionScreenViewModel'
import styles from './styles'
import {SharedErrorModal, SharedHeader} from '../../components/shared'
import {Answer, QuestionHandlerButton} from './components'

function QuestionScreen({route, navigation}) {
  const {currentQuestionIndex} = route.params
  const dispatch = useDispatch()
  const error = useSelector(errorSelector)
  const chosenAnswerIndex = useSelector(chosenAnswerIndexSelector)
  const currentQuestion = useSelector(currentQuestionSelector)
  const numberOfQuestions = useSelector(numberOfQuestionsSelector)

  const moveToNextQuestion = () => {
    dispatch(resetState())
    const nextQuestionIndex = currentQuestionIndex + 1
    if (nextQuestionIndex <= numberOfQuestions - 1) {
      navigation.push('Question', {
        currentQuestionIndex: nextQuestionIndex,
      })
    } else {
      navigation.navigate('QuizResult', {headerTitle: 'Quiz Result'})
    }
  }

  const backToPreviousQuestion = () => {
    dispatch(resetState())
    const previousQuestionIndex = currentQuestionIndex - 1
    if (previousQuestionIndex >= 0) {
      navigation.navigate({
        name: 'Question',
        params: {currentQuestionIndex: previousQuestionIndex},
        merge: true,
      })
    } else {
      navigation.navigate({
        name: 'QuizStarting',
        merge: true,
      })
    }
  }

  const respondCurrentQuestion = () => {
    dispatch(answerCurrentQuestion())
  }

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
        style={styles.mainContent}>
        <SharedHeader
          title={`Question ${currentQuestionIndex + 1}`}
          preset="default"
          btns={{
            left: {
              iconName: 'chevron-back',
              onPress: backToPreviousQuestion,
            },
          }}
        />

        <View style={styles.body}>
          <View style={styles.upperBody}>
            <Text style={styles.upperBodyQuestionText}>
              {currentQuestion?.question}
            </Text>
            <View style={styles.upperBodyDivider} />
            <Text style={styles.upperBodyQuestionGuide}>Choose 1 answer:</Text>
          </View>
          <View style={styles.lowerBody}>
            <View style={styles.lowerBodyAnswerList}>
              {(currentQuestion?.answers || []).map((answer) => (
                <Answer
                  key={answer.id}
                  answer={answer}
                  isChosen={
                    chosenAnswerIndex !== null &&
                    chosenAnswerIndex === answer.id
                  }
                  isCorrect={currentQuestion?.correctAnswer === answer.id}
                  isQuestionAnswered={currentQuestion?.isCorrect !== null}
                  onPress={() => {
                    dispatch(setChosenAnswerIndex(answer.id))
                  }}
                />
              ))}
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <QuestionHandlerButton
            question={currentQuestion}
            currentQuestionHandler={respondCurrentQuestion}
            afterQuestionAnsweredHandler={moveToNextQuestion}
          />
        </View>
      </SafeAreaView>
      <SharedErrorModal
        error={error}
        onClose={() => {
          dispatch(dismissError())
        }}
      />
    </View>
  )
}
export default QuestionScreen
