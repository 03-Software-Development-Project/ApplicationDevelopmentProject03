// import questionData from 'expressapp/data/questions.json'
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {
  PASS_THRESHOLD,
  SELECTED_QUESTION_POINTS as selectedQuestion,
} from '../../../env'
import QuestionComponent from '../../components/questionComponent/questionComponent'
import {getLimitedQuestions as questionData} from './model/questionModel'

class QuestionScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionIndex: 0,
      correctAnswers: 0,
      limitedQuestions: this.getLimitedQuestions(
        this.props.route.params.dataUserClassId,
        this.props.route.params.dataSubjectId,
        this.props.route.params.dataChapterId
      ),
    }
  }

  /* `handleAnswerSelect` is a function that is called when the user selects an answer to a question.
  It takes in the `selectedAnswerId` as a parameter, which is the ID of the answer that the user
  selected. */
  handleAnswerSelect = async (selectedAnswerId) => {
    const {currentQuestionIndex, correctAnswers, limitedQuestions} = this.state
    const currentQuestion = limitedQuestions[currentQuestionIndex]
    const selectedAnswer = currentQuestion.answers.find(
      (answer) => answer.id === selectedAnswerId
    )

    if (
      selectedAnswer &&
      selectedAnswer.id === currentQuestion.correct_answer
    ) {
      await this.incrementCorrectAnswers()
    }

    if (currentQuestionIndex < limitedQuestions.length - 1) {
      this.navigateToNextQuestion()
    } else {
      await this.handleEndOfQuestions(correctAnswers)
    }
  }

  incrementCorrectAnswers = () => {
    this.setState((prevState) => {
      const newCorrectAnswers = prevState.correctAnswers + 1
      const newTotalPoints = newCorrectAnswers * selectedQuestion.point
      console.log(`Total points: ${newTotalPoints} points`)
      return {
        correctAnswers: newCorrectAnswers,
        totalPoints: newTotalPoints,
      }
    })
  }

  navigateToNextQuestion = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
    }))
  }

  handleEndOfQuestions = async (correctAnswers) => {
    const hasPassed = correctAnswers >= PASS_THRESHOLD

    if (hasPassed) {
      this.handleTestPassed()
    } else {
      this.handleTestFailed()
    }

    this.resetQuestionState()
    this.navigateToHomeScreen()
  }

  handleTestPassed = () => {
    console.log('Congratulations! Passed the test! Well done!')
  }

  handleTestFailed = () => {
    console.log('Oops! Failed the test! Keep practicing!')
  }

  resetQuestionState = () => {
    this.setState({
      currentQuestionIndex: 0,
      correctAnswers: 0,
    })
  }

  navigateToHomeScreen = () => {
    this.props.navigation.navigate('Home')
  }

  /* The `getLimitedQuestions` function is filtering and shuffling the questions from a JSON file based
 on a desired difficulty level (specified in the `selectedQuestion` constant) and limiting the
 number of questions to a specified limit (specified in the `QUESTION_LIMIT` constant). It then
 returns the limited and shuffled questions. The function also logs the limited questions to the
 console for debugging purposes. */
  getLimitedQuestions = async (
    dataUserClassId,
    dataSubjectId,
    dataChapterId
  ) => {
    const {dataRef} = await questionData(
      dataUserClassId,
      dataSubjectId,
      dataChapterId
    )

    if (Array.isArray(dataRef)) {
      this.setState({
        limitedQuestions: dataRef,
      })
    } else {
      console.error(
        'Invalid dataRef: It should be an array of limited questions.'
      )
    }

    // console.log(`data is ${JSON.stringify(dataRef)}`)
    // const desiredDifficulty = selectedQuestion.difficulty.toLowerCase()
    // const filteredQuestions = questionData.filter(
    //   (question) => question.difficulty.toLowerCase() === desiredDifficulty
    // )
    // const shuffledQuestions = filteredQuestions.sort(() => Math.random() - 0.5)
    // const limitedQuestions = shuffledQuestions.slice(0, QUESTION_LIMIT)
    // console.log(JSON.stringify(limitedQuestions))
    // return limitedQuestions
  }

  getLimitedQuestion = (index) => {
    const {limitedQuestions} = this.state
    console.log(`this is the question:${JSON.stringify(limitedQuestions)}`)
    return limitedQuestions[index]
  }

  render() {
    const {currentQuestionIndex} = this.state
    const currentQuestion = this.getLimitedQuestion(currentQuestionIndex)
    return (
      <View style={styles.container}>
        {currentQuestion && (
          <QuestionComponent
            question={currentQuestion}
            onAnswerSelect={this.handleAnswerSelect}
          />
        )}
        {/* <Text>hello</Text> */}
      </View>
    )
  }
}

export default QuestionScreen

const styles = StyleSheet.create({
  container: {},
})
